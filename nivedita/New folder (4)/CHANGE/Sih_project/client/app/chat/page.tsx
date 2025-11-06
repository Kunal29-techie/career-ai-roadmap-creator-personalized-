"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Bot, User, Sparkles, Trophy, BookOpen, Target, TrendingUp } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  xpGained?: number
}

const suggestedQuestions = [
  "What career path should I choose in CS?",
  "How do I transition from web dev to AI/ML?",
  "What skills do I need for data science?",
  "Should I pursue a master's degree?",
  "How to prepare for FAANG interviews?",
  "What's the difference between DevOps and SRE?",
]

const questLog = [
  { title: "Explore Frontend Development", progress: 75, xp: 150 },
  { title: "Learn About Data Science", progress: 40, xp: 80 },
  { title: "Understand Cloud Computing", progress: 20, xp: 40 },
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Welcome to CareerQuest! I'm your AI career advisor. I'm here to help you navigate your computer science career journey. What would you like to know about CS careers today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(content),
        sender: "bot",
        timestamp: new Date(),
        xpGained: Math.floor(Math.random() * 20) + 5,
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("career path") || input.includes("choose")) {
      return "Great question! Choosing a CS career path depends on your interests and strengths. Here are some popular paths:\n\n🚀 **Software Engineering**: Building applications and systems\n📊 **Data Science**: Analyzing data to drive decisions\n🤖 **AI/ML Engineering**: Creating intelligent systems\n☁️ **Cloud/DevOps**: Managing infrastructure and deployments\n🔒 **Cybersecurity**: Protecting systems and data\n\nWhat interests you most? I can provide a detailed roadmap for any of these paths!"
    }

    if (input.includes("transition") || input.includes("web dev") || input.includes("ai") || input.includes("ml")) {
      return "Transitioning from web development to AI/ML is definitely possible! Here's a roadmap:\n\n📚 **Foundation**: Strengthen your Python and math skills (linear algebra, statistics)\n🧠 **Learn ML Basics**: Start with scikit-learn, understand algorithms\n📊 **Data Handling**: Master pandas, numpy for data manipulation\n🤖 **Deep Learning**: Explore TensorFlow/PyTorch\n💼 **Projects**: Build a portfolio with real ML projects\n\nWould you like me to create a personalized 6-month learning plan for you?"
    }

    if (input.includes("data science") || input.includes("skills")) {
      return "Data science requires a mix of technical and analytical skills:\n\n**Technical Skills:**\n• Python/R programming\n• SQL for databases\n• Statistics and probability\n• Machine learning algorithms\n• Data visualization (Matplotlib, Seaborn)\n\n**Soft Skills:**\n• Problem-solving\n• Communication\n• Business acumen\n• Critical thinking\n\nI recommend starting with Python and SQL, then building projects that showcase your ability to extract insights from data. Want specific learning resources?"
    }

    return "That's an excellent question! Based on your query, I'd recommend exploring our roadmaps section where you can find detailed career paths. Each path includes specific skills, timeline, and salary expectations. Would you like me to suggest a specific roadmap based on your interests?"
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">AI Career Advisor</CardTitle>
                    <p className="text-sm text-muted-foreground">Your personal CS career guide</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Online
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start space-x-3 ${
                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback
                          className={
                            message.sender === "user"
                              ? "bg-secondary text-secondary-foreground"
                              : "bg-primary text-primary-foreground"
                          }
                        >
                          {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                        {message.xpGained && (
                          <div className="mt-2 flex items-center space-x-1">
                            <Sparkles className="h-3 w-3 text-accent" />
                            <span className="text-xs text-accent font-medium">+{message.xpGained} XP</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex items-start space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask about your CS career..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                    className="flex-1"
                  />
                  <Button onClick={() => handleSendMessage(inputValue)} disabled={!inputValue.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suggested Questions */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Popular Questions</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start text-left h-auto p-3 bg-transparent"
                  onClick={() => handleSendMessage(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quest Log */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Quest Log</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {questLog.map((quest, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{quest.title}</p>
                    <Badge variant="secondary" className="text-xs">
                      {quest.xp} XP
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${quest.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground">{quest.progress}% complete</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Trophy className="mr-2 h-4 w-4" />
                View Achievements
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <TrendingUp className="mr-2 h-4 w-4" />
                Track Progress
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Roadmaps
              </Button>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Your Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Total XP</span>
                <span className="font-semibold">270</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Questions Asked</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Roadmaps Started</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Level</span>
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  Level 1
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
