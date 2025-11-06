// Chat functionality
class ChatBot {
  constructor() {
    this.messages = []
    this.isTyping = false
    this.messageInput = document.getElementById("messageInput")
    this.sendButton = document.getElementById("sendButton")
    this.chatMessages = document.getElementById("chatMessages")
    this.typingIndicator = document.getElementById("typingIndicator")

    this.init()
  }

  init() {
    // Event listeners
    this.messageInput.addEventListener("input", () => this.handleInputChange())
    this.messageInput.addEventListener("keydown", (e) => this.handleKeyDown(e))
    this.sendButton.addEventListener("click", () => this.sendMessage())

    // Quick question buttons
    document.querySelectorAll(".question-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const question = btn.dataset.question
        this.messageInput.value = question
        this.sendMessage()
      })
    })

    // Auto-resize textarea
    this.messageInput.addEventListener("input", () => {
      this.messageInput.style.height = "auto"
      this.messageInput.style.height = this.messageInput.scrollHeight + "px"
    })
  }

  handleInputChange() {
    const hasText = this.messageInput.value.trim().length > 0
    this.sendButton.disabled = !hasText || this.isTyping
  }

  handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      this.sendMessage()
    }
  }

  async sendMessage() {
    const message = this.messageInput.value.trim()
    if (!message || this.isTyping) return

    // Add user message
    this.addMessage(message, "user")
    this.messageInput.value = ""
    this.messageInput.style.height = "auto"
    this.handleInputChange()

    // Show typing indicator
    this.showTyping()

    // Show typing indicator
    this.showTyping()

    try {
      const response = await fetch("/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "user", // Replace with actual username if available
          query: message,
        }),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()
      this.addMessage(data.summary, "bot")

      // Also, update the roadmap
      localStorage.setItem("roadmap", JSON.stringify(data.steps))
      this.updateThemeFromResponse(data.summary)
      window.dispatchEvent(new Event("storage")) // Notify other pages of the change
    } catch (error) {
      console.error("Error fetching AI response:", error)
      this.addMessage(
        "Sorry, I'm having trouble connecting to the server. Please try again later.",
        "bot",
      )
    } finally {
      this.hideTyping()
    }
  }

  addMessage(content, sender) {
    const messageContainer = document.createElement("div")
    messageContainer.className = `message ${sender}-message`

    const avatar = document.createElement("div")
    avatar.className = "message-avatar"
    avatar.textContent = sender === "user" ? "👤" : "🤖"

    const messageContent = document.createElement("div")
    messageContent.className = "message-content"

    const bubble = document.createElement("div")
    bubble.className = "message-bubble"

    if (typeof content === "string") {
      bubble.innerHTML = this.formatMessage(content)
    } else {
      bubble.appendChild(content)
    }

    const time = document.createElement("div")
    time.className = "message-time"
    time.textContent = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })

    messageContent.appendChild(bubble)
    messageContent.appendChild(time)
    messageContainer.appendChild(avatar)
    messageContainer.appendChild(messageContent)

    // Insert before quick questions
    const quickQuestions = document.querySelector(".quick-questions")
    quickQuestions.parentNode.insertBefore(messageContainer, quickQuestions)

    // Scroll to bottom
    this.scrollToBottom()

    // Add to messages array
    this.messages.push({ content, sender, timestamp: new Date() })
  }

  formatMessage(message) {
    // Convert line breaks to <br> tags
    return message.replace(/\n/g, "<br>")
  }

  showTyping() {
    this.isTyping = true
    this.typingIndicator.classList.add("active")
    this.handleInputChange()
  }

  hideTyping() {
    this.isTyping = false
    this.typingIndicator.classList.remove("active")
    this.handleInputChange()
  }

  updateThemeFromResponse(responseText) {
    const lowerText = responseText.toLowerCase()
    let theme = "default"
    if (lowerText.includes("frontend") || lowerText.includes("react")) {
      theme = "frontend"
    } else if (lowerText.includes("backend") || lowerText.includes("node")) {
      theme = "backend"
    } else if (
      lowerText.includes("data science") ||
      lowerText.includes("machine learning")
    ) {
      theme = "data-science"
    }
    applyTheme(theme)
  }

  scrollToBottom() {
    setTimeout(() => {
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight
    }, 100)
  }
}

// Initialize chat when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ChatBot()
})

// Add some interactive animations
document.addEventListener("DOMContentLoaded", () => {
  // Animate quick question buttons on hover
  document.querySelectorAll(".question-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.02)"
    })

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Add floating animation to advisor avatar
  const advisorAvatar = document.querySelector(".advisor-avatar")
  if (advisorAvatar) {
    setInterval(() => {
      advisorAvatar.style.transform = "translateY(-5px)"
      setTimeout(() => {
        advisorAvatar.style.transform = "translateY(0)"
      }, 1000)
    }, 3000)
  }
})
