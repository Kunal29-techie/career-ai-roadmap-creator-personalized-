
from flask import Flask, request, jsonify, render_template
import requests, json, os, re

app = Flask(__name__, template_folder="../client", static_folder="../client", static_url_path="")

OLLAMA_URL = os.environ.get("OLLAMA_URL", "http://localhost:11434/api/generate")
ROADMAP_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../client/chatbot_roadmap.json")

# ----------------- Storage helpers -----------------
def load_roadmaps():
    if not os.path.exists(ROADMAP_FILE):
        return {}
    with open(ROADMAP_FILE, "r", encoding="utf-8") as f:
        try:
            return json.load(f)
        except:
            return {}

def save_roadmaps(data):
    with open(ROADMAP_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

# ----------------- LLM query helper -----------------
def query_ollama(prompt, timeout=30):
    payload = {"model": "llama3.2", "prompt": prompt, "stream": False}
    try:
        resp = requests.post(OLLAMA_URL, json=payload, timeout=timeout)
    except Exception as e:
        return f"[ERROR contacting Ollama: {e}]"
    try:
        data = resp.json()
    except Exception:
        return resp.text
    for key in ("response", "text", "output", "result"):
        if isinstance(data, dict) and key in data:
            return data[key]
    if isinstance(data, dict) and "choices" in data:
        try:
            first = data["choices"][0]
            for k in ("text", "message", "content"):
                if isinstance(first, dict) and k in first:
                    return first[k]
            return json.dumps(first)
        except:
            pass
    return json.dumps(data)

# ----------------- robust JSON extraction -----------------
def extract_first_json_object(text):
    if not isinstance(text, str):
        return None
    length = len(text)
    for i, ch in enumerate(text):
        if ch == '{':
            brace = 0
            for j in range(i, length):
                if text[j] == '{':
                    brace += 1
                elif text[j] == '}':
                    brace -= 1
                if brace == 0:
                    candidate = text[i:j+1]
                    try:
                        return json.loads(candidate)
                    except Exception:
                        continue
    return None

# ----------------- title generator fallback -----------------
STOPWORDS = {
    "the","and","for","with","that","this","these","those","from","your","a","an","to","in","on",
    "of","is","are","be","by","as","it","or","at","which","about","then","also","can","will","should",
    "start","learn","learning","basics","basic","step","steps","skill","skills","how","be","become"
}

def generate_title_from_text(advice_text, query_text=None, max_terms=4):
    if not advice_text:
        advice_text = query_text or ""
    words = re.findall(r"[A-Za-z]+", advice_text)
    counts = {}
    for w in words:
        wl = w.lower()
        if wl in STOPWORDS or len(wl) < 3:
            continue
        counts[wl] = counts.get(wl, 0) + 1
    if not counts and query_text:
        words = re.findall(r"[A-Za-z]+", query_text)
        for w in words:
            wl = w.lower()
            if wl in STOPWORDS or len(wl) < 3:
                continue
            counts[wl] = counts.get(wl, 0) + 1
    if counts:
        sorted_terms = sorted(counts.items(), key=lambda kv: (-kv[1], -len(kv[0])))
        top = [t[0].capitalize() for t in sorted_terms[:max_terms]]
        title = ", ".join(top)
        if len(title) > 60:
            title = title[:57].rstrip() + "..."
        return title
    if query_text:
        qwords = re.findall(r"[A-Za-z]+", query_text)
        qtop = [w.capitalize() for w in qwords if w.lower() not in STOPWORDS][:3]
        if qtop:
            return " ".join(qtop) + " Roadmap"
    return "Career Roadmap"

# ----------------- Flask routes -----------------
@app.route("/")
def home():
    return render_template("chat.html")

@app.route("/ask", methods=["POST"])
def ask():
    payload = request.json or {}
    username = payload.get("username", "guest").strip() or "guest"
    query = payload.get("query", "").strip()
    # Keep existing behavior (this file overwrites user's roadmap, as your working code does)
    if not query:
        return jsonify({"error": "empty query"}), 400

    prompt = f"""
You are a career roadmap assistant. Your task is to generate a roadmap based on the user's query.
The user's query is: "{query}"

You MUST respond with ONLY a JSON object. Do not include any other text, introductions, or explanations.
The JSON object must contain two keys: "title" and "advice".

- The "title" value should be a concise and descriptive name for the roadmap.
- The "advice" value should be a single string, with each step on a new line, starting with "Step X:".

Example format:
{{
  "title": "Your Generated Title Here",
  "advice": "Step 1: First action item.\\nStep 2: Second action item.\\nStep 3: Third action item."
}}
"""
    llm_text = query_ollama(prompt)

    # Parse response (robust)
    parsed = None
    try:
        stripped = llm_text.strip()
        if stripped.startswith("{") and stripped.endswith("}"):
            parsed = json.loads(stripped)
    except Exception:
        parsed = None
    if parsed is None:
        parsed = extract_first_json_object(llm_text)

    title = parsed.get("title") if parsed else None
    advice = parsed.get("advice") if parsed else None

    if not advice:
        advice = llm_text.strip() or "[No advice returned]"
    if not title:
        title = generate_title_from_text(advice, query)

    # --- Split into steps (final, more robust version) ---
    step_entries = []
    # Use re.split with a lookahead to split the string by "Step X:" delimiters
    parts = re.split(r'(?=Step\s*\d+:)', advice.strip(), flags=re.IGNORECASE)
    
    # Filter out any empty strings that might result from the split
    parts = [p.strip() for p in parts if p.strip()]

    if parts:
        for part in parts:
            # Each 'part' should be a full step like "Step 1: Do something"
            try:
                step_title, step_advice = part.split(":", 1)
                step_entries.append({
                    "title": step_title.strip(),
                    "advice": step_advice.strip()
                })
            except ValueError:
                # This handles rare cases where a part might not contain a colon
                if part: # Avoid adding empty steps
                    step_entries.append({"title": part, "advice": ""})
    
    # If, after all that, no steps were found, use a fallback.
    if not step_entries:
        step_entries.append({"title": "Roadmap Details", "advice": advice.strip()})

    # --- Build a concise summary string for the frontend ---
    def build_summary(steps, max_steps=3):
        pieces = []
        for s in steps[:max_steps]:
            c = s.get("advice", "").strip()
            # first sentence heuristic
            first_sent = re.split(r'(?<=[.!?])\s+', c)
            first = first_sent[0] if first_sent and first_sent[0] else (c[:120] + ("..." if len(c) > 120 else ""))
            pieces.append(f"{s.get('title')}: {first}")
        if not pieces:
            return ""
        return "Summary: " + " ".join(pieces)

    summary = build_summary(step_entries, max_steps=3)

    # --- Save the new roadmap under its title ---
    # This will store multiple roadmaps, keyed by their title.
    db = load_roadmaps()
    if not isinstance(db, dict): # Ensure db is a dict
        db = {}
    db[title] = step_entries
    save_roadmaps(db)

    # Return steps AND summary (frontend will use summary for chat + steps for roadmap)
    return jsonify({"steps": step_entries, "summary": summary, "title": title})

@app.route("/roadmap/<topic>", methods=["GET"])
def get_roadmap(topic):
    db = load_roadmaps()
    steps = db.get(topic, [])
    return jsonify({"steps": steps})

@app.route("/clear", methods=["POST"])
def clear_roadmap():
    # This function can now clear a specific topic or all roadmaps
    payload = request.json or {}
    topic_to_clear = payload.get("topic", "").strip()
    
    if topic_to_clear:
        db = load_roadmaps()
        if topic_to_clear in db:
            del db[topic_to_clear]
            save_roadmaps(db)
    else:
        # If no topic is specified, clear all roadmaps
        save_roadmaps({})
        
    return jsonify({"ok": True})

# ----------------- Run -----------------
if __name__ == "__main__":
    if not os.path.exists(ROADMAP_FILE):
        save_roadmaps({})
    app.run(host="127.0.0.1", port=5000, debug=True)
