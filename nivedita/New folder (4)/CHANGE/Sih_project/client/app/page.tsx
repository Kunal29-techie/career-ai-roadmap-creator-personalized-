"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, MessageCircle, Map, Target, Users, TrendingUp, Star, Zap, Trophy, BookOpen, Bot } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "AI Career Advisor",
    description: "Get personalized career guidance from our intelligent chatbot",
    href: "/chat",
  },
  {
    icon: Bot,
    title: "External AI Chatbot",
    description: "Chat with our advanced AI powered by Llama 3.2",
    href: "http://localhost:5000/shghdf/s.html",
    external: true,
  },
  {
    icon: Map,
    title: "Learning Roadmaps",
    description: "Follow structured paths to achieve your career goals",
    href: "/roadmaps",
  },
  {
    icon: Target,
    title: "Career Paths",
    description: "Explore different CS specializations and their requirements",
    href: "/careers",
  },
]

const stats = [
  { label: "Active Learners", value: "10K+", icon: Users },
  { label: "Career Paths", value: "25+", icon: Target },
  { label: "Success Rate", value: "94%", icon: TrendingUp },
]

const testimonials = [
  {
    name: "Alex Chen",
    role: "Software Engineer at Google",
    content:
      "CareerQuest helped me transition from web development to machine learning. The roadmap was incredibly detailed!",
    level: "Level 15",
  },
  {
    name: "Sarah Johnson",
    role: "Data Scientist at Netflix",
    content: "The AI advisor gave me insights I never considered. Now I'm working my dream job in data science!",
    level: "Level 12",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                <Star className="mr-1 h-3 w-3" />
                Start Your Adventure
              </Badge>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              Level Up Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CS Career</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground text-pretty">
              Embark on a gamified journey to discover your perfect career path in computer science. Get personalized
              guidance, follow structured roadmaps, and track your progress like never before.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/chat">
                  Start Your Quest
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg bg-transparent">
                <Link href="/roadmaps">
                  View Roadmaps
                  <Map className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg"
                onClick={() => window.open('http://localhost:5000/chatbot', '_blank')}
              >
                <Bot className="mr-2 h-5 w-5" />
                AI Chatbot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Your Adventure Toolkit</h2>
            <p className="text-lg text-muted-foreground">Everything you need to navigate your CS career journey</p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{feature.description}</CardDescription>
                    {feature.external ? (
                      <Button 
                        asChild 
                        variant="ghost" 
                        className="group-hover:text-primary"
                        onClick={() => window.open(feature.href, '_blank')}
                      >
                        <a href={feature.href} target="_blank" rel="noopener noreferrer">
                          Open Chatbot
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button asChild variant="ghost" className="group-hover:text-primary">
                        <Link href={feature.href}>
                          Explore
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">See how CareerQuest helped others achieve their goals</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      <Trophy className="mr-1 h-3 w-3" />
                      {testimonial.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Quest?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join thousands of CS professionals who've leveled up their careers with CareerQuest
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="/chat">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Chatting
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/roadmaps">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Roadmaps
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
