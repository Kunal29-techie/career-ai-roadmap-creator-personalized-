import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import {
  Code,
  Database,
  Brain,
  Cloud,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Clock,
  Users,
  DollarSign,
  Star,
  Trophy,
  Target,
  ArrowRight,
} from "lucide-react"

const roadmaps = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Master modern web development with React, TypeScript, and cutting-edge tools",
    icon: Globe,
    difficulty: "Beginner",
    duration: "4-6 months",
    salary: "$70K - $120K",
    popularity: 95,
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Next.js"],
    progress: 0,
    color: "bg-blue-500",
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Build scalable server-side applications and APIs",
    icon: Database,
    difficulty: "Intermediate",
    duration: "5-7 months",
    salary: "$80K - $140K",
    popularity: 88,
    skills: ["Node.js", "Python", "Databases", "APIs", "System Design"],
    progress: 25,
    color: "bg-green-500",
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description: "Combine frontend and backend skills for complete web solutions",
    icon: Code,
    difficulty: "Intermediate",
    duration: "8-12 months",
    salary: "$85K - $150K",
    popularity: 92,
    skills: ["React", "Node.js", "Databases", "DevOps", "System Architecture"],
    progress: 15,
    color: "bg-purple-500",
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Extract insights from data using statistics, ML, and visualization",
    icon: BarChart3,
    difficulty: "Intermediate",
    duration: "6-9 months",
    salary: "$90K - $160K",
    popularity: 85,
    skills: ["Python", "Statistics", "Machine Learning", "SQL", "Visualization"],
    progress: 40,
    color: "bg-orange-500",
  },
  {
    id: "ai-ml",
    title: "AI/ML Engineering",
    description: "Build intelligent systems and machine learning models",
    icon: Brain,
    difficulty: "Advanced",
    duration: "9-12 months",
    salary: "$100K - $180K",
    popularity: 78,
    skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning", "MLOps"],
    progress: 0,
    color: "bg-pink-500",
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    description: "Streamline development and deployment processes",
    icon: Cloud,
    difficulty: "Intermediate",
    duration: "5-8 months",
    salary: "$85K - $155K",
    popularity: 82,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Infrastructure"],
    progress: 0,
    color: "bg-cyan-500",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Protect systems and data from digital threats",
    icon: Shield,
    difficulty: "Intermediate",
    duration: "6-10 months",
    salary: "$80K - $145K",
    popularity: 75,
    skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance"],
    progress: 0,
    color: "bg-red-500",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Create native and cross-platform mobile applications",
    icon: Smartphone,
    difficulty: "Intermediate",
    duration: "5-7 months",
    salary: "$75K - $135K",
    popularity: 80,
    skills: ["React Native", "Flutter", "iOS", "Android", "Mobile UI/UX"],
    progress: 0,
    color: "bg-indigo-500",
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800"
    case "Advanced":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function RoadmapsPage() {
  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Career Roadmaps</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose your adventure and follow structured learning paths to achieve your career goals in computer science
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm text-muted-foreground">Career Paths</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-sm text-muted-foreground">Active Learners</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">94%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm text-muted-foreground">Avg. Months</div>
          </CardContent>
        </Card>
      </div>

      {/* Roadmaps Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((roadmap) => {
          const Icon = roadmap.icon
          return (
            <Card key={roadmap.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${roadmap.color} text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{roadmap.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getDifficultyColor(roadmap.difficulty)}>{roadmap.difficulty}</Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-xs text-muted-foreground">{roadmap.popularity}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-sm">{roadmap.description}</CardDescription>

                {/* Progress Bar (if started) */}
                {roadmap.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{roadmap.progress}%</span>
                    </div>
                    <Progress value={roadmap.progress} className="h-2" />
                  </div>
                )}

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{roadmap.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>{roadmap.salary}</span>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <p className="text-sm font-medium mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {roadmap.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {roadmap.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{roadmap.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button asChild className="w-full group-hover:bg-primary/90">
                  <Link href={`/careers/${roadmap.id}`}>
                    {roadmap.progress > 0 ? "Continue Journey" : "Start Journey"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Not Sure Which Path to Choose?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our AI career advisor can help you discover the perfect roadmap based on your interests, skills, and
              goals. Get personalized recommendations in minutes!
            </p>
            <Button asChild size="lg">
              <Link href="/chat">
                Get Personalized Advice
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
