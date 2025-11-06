"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Home, MessageCircle, Map, Target, Sparkles, Trophy, Bot } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Career Chat", href: "/chat", icon: MessageCircle },
  { name: "AI Chatbot", href: "http://localhost:5000/chatbot", icon: Bot, external: true },
  { name: "Roadmaps", href: "/roadmaps", icon: Map },
  { name: "Career Paths", href: "/careers", icon: Target },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-xl font-bold">CareerQuest</span>
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                    "text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              )
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Trophy className="h-4 w-4 text-accent" />
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              Level 1
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">0 XP</span>
          </div>
        </div>
      </div>
    </header>
  )
}
