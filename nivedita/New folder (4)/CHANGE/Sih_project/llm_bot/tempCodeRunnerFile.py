    # Split into clear step entries
    step_entries = []
    matches = re.split(r"(?:^|\n)\s*Step\s*\d+:\s*", advice.strip(), flags=re.IGNORECASE)
    matches = [m.strip() for m in matches if m.strip()]

    if not matches:
        step_entries.append({"step": "Step 1", "content": advice.strip()})
    else:
        for idx, content in enumerate(matches, start=1):
            step_entries.append({"step": f"Step {idx}", "content": content})