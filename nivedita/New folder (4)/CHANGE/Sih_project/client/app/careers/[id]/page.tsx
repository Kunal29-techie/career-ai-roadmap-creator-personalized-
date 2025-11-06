import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  Globe,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  BookOpen,
  Target,
  CheckCircle,
  Circle,
  Star,
  Building,
  ArrowRight,
  Play,
  Award,
} from "lucide-react"

// This would typically come from a database or API
const careerData = {
  frontend: {
    title: "Frontend Development",
    description: "Master modern web development with React, TypeScript, and cutting-edge tools",
    icon: Globe,
    difficulty: "Beginner",
    duration: "4-6 months",
    salary: "$70K - $120K",
    popularity: 95,
    color: "bg-blue-500",
    overview:
      "Frontend development focuses on creating user interfaces and experiences for web applications. You'll learn to build responsive, interactive websites using modern frameworks and tools.",
    skills: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Git & GitHub",
      "Responsive Design",
      "Web Performance",
      "Testing (Jest, Cypress)",
    ],
    roadmap: [
      {
        phase: "Foundation",
        duration: "4-6 weeks",
        completed: false,
        topics: [
          { name: "HTML5 Fundamentals", completed: false },
          { name: "CSS3 & Flexbox/Grid", completed: false },
          { name: "JavaScript Basics", completed: false },
          { name: "DOM Manipulation", completed: false },
        ],
      },
      {
        phase: "Modern JavaScript",
        duration: "3-4 weeks",
        completed: false,
        topics: [
          { name: "ES6+ Features", completed: false },
          { name: "Async/Await & Promises", completed: false },
          { name: "Modules & Bundlers", completed: false },
          { name: "API Integration", completed: false },
        ],
      },
      {
        phase: "React Ecosystem",
        duration: "6-8 weeks",
        completed: false,
        topics: [
          { name: "React Fundamentals", completed: false },
          { name: "Hooks & State Management", completed: false },
          { name: "React Router", completed: false },
          { name: "Context API", completed: false },
        ],
      },
      {
        phase: "Advanced Topics",
        duration: "4-6 weeks",
        completed: false,
        topics: [
          { name: "TypeScript", completed: false },
          { name: "Next.js Framework", completed: false },
          { name: "Testing Strategies", completed: false },
          { name: "Performance Optimization", completed: false },
        ],
      },
      {
        phase: "Professional Skills",
        duration: "2-3 weeks",
        completed: false,
        topics: [
          { name: "Version Control (Git)", completed: false },
          { name: "Deployment & CI/CD", completed: false },
          { name: "Code Review Process", completed: false },
          { name: "Portfolio Development", completed: false },
        ],
      },
    ],
    companies: [
      { name: "Google", logo: "🔍", positions: "Frontend Engineer, UI Developer" },
      { name: "Meta", logo: "📘", positions: "Frontend Engineer, React Developer" },
      { name: "Netflix", logo: "🎬", positions: "UI Engineer, Frontend Developer" },
      { name: "Airbnb", logo: "🏠", positions: "Frontend Engineer, Web Developer" },
      { name: "Spotify", logo: "🎵", positions: "Frontend Developer, UI Engineer" },
    ],
    salaryRanges: [
      { level: "Junior (0-2 years)", range: "$60K - $85K", location: "Average US" },
      { level: "Mid-level (2-5 years)", range: "$85K - $120K", location: "Average US" },
      { level: "Senior (5+ years)", range: "$120K - $180K", location: "Average US" },
      { level: "Staff/Principal", range: "$180K - $250K+", location: "Top Companies" },
    ],
    futureOutlook: {
      growth: "+13%",
      period: "2022-2032",
      demand: "High",
      description:
        "Frontend development continues to grow as businesses prioritize user experience. The rise of mobile-first design, progressive web apps, and modern frameworks ensures strong demand for skilled frontend developers.",
    },
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export default function CareerDetailPage({ params }: PageProps) {
  const career = careerData[params.id as keyof typeof careerData]

  if (!career) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Career Path Not Found</h1>
        <p className="text-muted-foreground mb-8">The career path you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/roadmaps">Browse All Roadmaps</Link>
        </Button>
      </div>
    )
  }

  const Icon = career.icon
  const completedPhases = career.roadmap.filter((phase) => phase.completed).length
  const totalPhases = career.roadmap.length
  const overallProgress = (completedPhases / totalPhases) * 100

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className={`p-3 rounded-lg ${career.color} text-white`}>
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{career.title}</h1>
            <p className="text-muted-foreground">{career.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <Badge className="bg-green-100 text-green-800">{career.difficulty}</Badge>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{career.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{career.salary}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm">{career.popularity}% popularity</span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
              <TabsTrigger value="companies">Companies</TabsTrigger>
              <TabsTrigger value="salary">Salary</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{career.overview}</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {career.skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Future Outlook</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{career.futureOutlook.growth}</div>
                      <div className="text-sm text-muted-foreground">Job Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{career.futureOutlook.period}</div>
                      <div className="text-sm text-muted-foreground">Time Period</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{career.futureOutlook.demand}</div>
                      <div className="text-sm text-muted-foreground">Market Demand</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{career.futureOutlook.description}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="roadmap" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Learning Path</CardTitle>
                    <Badge variant="secondary">
                      {completedPhases}/{totalPhases} Phases Complete
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Overall Progress</span>
                      <span className="text-sm text-muted-foreground">{Math.round(overallProgress)}%</span>
                    </div>
                    <Progress value={overallProgress} className="h-2" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {career.roadmap.map((phase, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            phase.completed ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {phase.completed ? <CheckCircle className="h-4 w-4" /> : <span>{index + 1}</span>}
                        </div>
                        <div>
                          <h3 className="font-semibold">{phase.phase}</h3>
                          <p className="text-sm text-muted-foreground">{phase.duration}</p>
                        </div>
                      </div>
                      <div className="ml-11 space-y-2">
                        {phase.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-2">
                            {topic.completed ? (
                              <CheckCircle className="h-4 w-4 text-primary" />
                            ) : (
                              <Circle className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span className={`text-sm ${topic.completed ? "line-through text-muted-foreground" : ""}`}>
                              {topic.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="companies" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Hiring Companies</CardTitle>
                  <CardDescription>Companies actively hiring for this role</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {career.companies.map((company, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <div className="text-2xl">{company.logo}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{company.name}</h3>
                          <p className="text-sm text-muted-foreground">{company.positions}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Jobs
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="salary" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Salary Expectations</CardTitle>
                  <CardDescription>Average salary ranges by experience level</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {career.salaryRanges.map((salary, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{salary.level}</h3>
                          <p className="text-sm text-muted-foreground">{salary.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-primary">{salary.range}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                <Play className="mr-2 h-4 w-4" />
                Start Learning Path
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <BookOpen className="mr-2 h-4 w-4" />
                Download Roadmap
              </Button>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/chat">
                  <Target className="mr-2 h-4 w-4" />
                  Get Personalized Plan
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Path Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Active Learners</span>
                </div>
                <span className="font-semibold">2,847</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Completion Rate</span>
                </div>
                <span className="font-semibold">87%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Avg. Time to Complete</span>
                </div>
                <span className="font-semibold">5.2 months</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Job Placement Rate</span>
                </div>
                <span className="font-semibold">94%</span>
              </div>
            </CardContent>
          </Card>

          {/* Related Paths */}
          <Card>
            <CardHeader>
              <CardTitle>Related Paths</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="ghost" className="w-full justify-start bg-transparent" asChild>
                <Link href="/careers/fullstack">
                  Full Stack Development
                  <ArrowRight className="ml-auto h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start bg-transparent" asChild>
                <Link href="/careers/mobile">
                  Mobile Development
                  <ArrowRight className="ml-auto h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start bg-transparent" asChild>
                <Link href="/careers/backend">
                  Backend Development
                  <ArrowRight className="ml-auto h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
