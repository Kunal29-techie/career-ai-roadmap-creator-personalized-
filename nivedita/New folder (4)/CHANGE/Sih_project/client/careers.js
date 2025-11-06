// Career Details functionality
class CareerDetailsManager {
  constructor() {
    this.currentCareer = null
    this.careerData = {}
    this.init()
  }

  init() {
    this.loadCareerData()
    this.setupEventListeners()
    this.loadCareerFromURL()
  }

  loadCareerData() {
    this.careerData = {
      frontend: {
        title: "Frontend Development",
        icon: "🎨",
        description: "Master modern web development with React, TypeScript, and responsive design",
        difficulty: "Beginner Friendly",
        duration: "8 months",
        salaryRange: "$70K - $120K",
        salaryLevels: [
          { level: "Entry Level", amount: "$70K - $90K" },
          { level: "Mid Level", amount: "$90K - $130K" },
          { level: "Senior Level", amount: "$130K - $180K" },
        ],
        marketStats: [
          { label: "Job Growth", value: "+22%", positive: true },
          { label: "Open Positions", value: "50K+" },
          { label: "Remote Friendly", value: "85%" },
        ],
        skills: ["JavaScript", "React", "TypeScript", "CSS", "HTML", "Git", "Node.js", "Webpack"],
        roadmap: [
          {
            title: "HTML & CSS Fundamentals",
            duration: "3 weeks",
            description: "Learn semantic HTML and modern CSS techniques including Flexbox and Grid",
            skills: ["HTML5", "CSS3", "Flexbox", "Grid"],
          },
          {
            title: "JavaScript Essentials",
            duration: "4 weeks",
            description: "Master ES6+ features, DOM manipulation, and asynchronous programming",
            skills: ["ES6+", "DOM", "Promises", "Async/Await"],
          },
          {
            title: "React Fundamentals",
            duration: "6 weeks",
            description: "Build interactive UIs with React hooks, components, and state management",
            skills: ["React", "JSX", "Hooks", "State"],
          },
          {
            title: "TypeScript Integration",
            duration: "3 weeks",
            description: "Add type safety to your JavaScript applications",
            skills: ["TypeScript", "Interfaces", "Generics"],
          },
          {
            title: "Advanced React & Tools",
            duration: "4 weeks",
            description: "Learn React Router, Context API, and modern development tools",
            skills: ["React Router", "Context", "Redux", "Testing"],
          },
          {
            title: "Portfolio Projects",
            duration: "8 weeks",
            description: "Build 3 comprehensive projects to showcase your skills",
            skills: ["Project Planning", "Deployment", "Git Workflow"],
          },
        ],
        companies: [
          { name: "Google", logo: "G", info: "Frontend Engineer positions" },
          { name: "Meta", logo: "M", info: "React Developer roles" },
          { name: "Netflix", logo: "N", info: "UI Engineer opportunities" },
          { name: "Airbnb", logo: "A", info: "Frontend positions" },
          { name: "Spotify", logo: "S", info: "Web Developer roles" },
          { name: "Uber", logo: "U", info: "Frontend Engineer jobs" },
        ],
        stories: [
          {
            name: "Sarah Chen",
            role: "Frontend Engineer at Google",
            avatar: "SC",
            story:
              "Started with zero coding experience. The structured roadmap helped me land my dream job at Google in just 10 months!",
          },
          {
            name: "Mike Rodriguez",
            role: "React Developer at Meta",
            avatar: "MR",
            story:
              "Transitioned from graphic design to frontend development. The visual nature of frontend work was perfect for my background.",
          },
        ],
        related: [
          { icon: "⚙️", title: "Backend Development", description: "Server-side programming and APIs" },
          { icon: "📱", title: "Mobile Development", description: "iOS and Android app development" },
          { icon: "🎨", title: "UI/UX Design", description: "User interface and experience design" },
        ],
      },
      backend: {
        title: "Backend Development",
        icon: "⚙️",
        description: "Build scalable server-side applications with Node.js, databases, and cloud services",
        difficulty: "Intermediate",
        duration: "10 months",
        salaryRange: "$80K - $140K",
        salaryLevels: [
          { level: "Entry Level", amount: "$80K - $100K" },
          { level: "Mid Level", amount: "$100K - $150K" },
          { level: "Senior Level", amount: "$150K - $200K" },
        ],
        marketStats: [
          { label: "Job Growth", value: "+25%", positive: true },
          { label: "Open Positions", value: "45K+" },
          { label: "Remote Friendly", value: "90%" },
        ],
        skills: ["Node.js", "Python", "SQL", "MongoDB", "AWS", "Docker", "REST APIs", "GraphQL"],
        roadmap: [
          {
            title: "Server-Side Fundamentals",
            duration: "4 weeks",
            description: "Learn Node.js, Express.js, and server architecture",
            skills: ["Node.js", "Express", "HTTP", "Middleware"],
          },
          {
            title: "Database Design",
            duration: "5 weeks",
            description: "Master SQL and NoSQL databases, design patterns",
            skills: ["SQL", "MongoDB", "Database Design", "Indexing"],
          },
          {
            title: "API Development",
            duration: "4 weeks",
            description: "Build RESTful and GraphQL APIs",
            skills: ["REST", "GraphQL", "Authentication", "Validation"],
          },
          {
            title: "Cloud & DevOps",
            duration: "6 weeks",
            description: "Deploy applications on AWS, learn Docker and CI/CD",
            skills: ["AWS", "Docker", "CI/CD", "Monitoring"],
          },
          {
            title: "Advanced Topics",
            duration: "4 weeks",
            description: "Microservices, caching, and performance optimization",
            skills: ["Microservices", "Redis", "Performance", "Security"],
          },
          {
            title: "Capstone Projects",
            duration: "7 weeks",
            description: "Build production-ready backend systems",
            skills: ["System Design", "Testing", "Documentation"],
          },
        ],
        companies: [
          { name: "Amazon", logo: "A", info: "Backend Engineer roles" },
          { name: "Microsoft", logo: "M", info: "Cloud Developer positions" },
          { name: "Stripe", logo: "S", info: "API Engineer opportunities" },
          { name: "Slack", logo: "S", info: "Backend Developer jobs" },
          { name: "Twilio", logo: "T", info: "Platform Engineer roles" },
          { name: "MongoDB", logo: "M", info: "Database Engineer positions" },
        ],
        stories: [
          {
            name: "Alex Kumar",
            role: "Backend Engineer at Amazon",
            avatar: "AK",
            story:
              "The comprehensive database and cloud training prepared me perfectly for handling large-scale systems at Amazon.",
          },
          {
            name: "Jessica Wong",
            role: "API Engineer at Stripe",
            avatar: "JW",
            story:
              "Learning about payment systems and API design through this roadmap directly led to my role at Stripe.",
          },
        ],
        related: [
          { icon: "🎨", title: "Frontend Development", description: "Client-side web development" },
          { icon: "☁️", title: "DevOps Engineering", description: "Infrastructure and deployment" },
          { icon: "📊", title: "Data Engineering", description: "Data pipelines and processing" },
        ],
      },
      "data-science": {
        title: "Data Science",
        icon: "📊",
        description: "Analyze data, build predictive models, and extract insights using Python and ML",
        difficulty: "Intermediate",
        duration: "14 months",
        salaryRange: "$90K - $160K",
        salaryLevels: [
          { level: "Entry Level", amount: "$90K - $110K" },
          { level: "Mid Level", amount: "$110K - $160K" },
          { level: "Senior Level", amount: "$160K - $220K" },
        ],
        marketStats: [
          { label: "Job Growth", value: "+35%", positive: true },
          { label: "Open Positions", value: "30K+" },
          { label: "Remote Friendly", value: "80%" },
        ],
        skills: ["Python", "R", "SQL", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Tableau"],
        roadmap: [
          {
            title: "Python for Data Science",
            duration: "5 weeks",
            description: "Master Python libraries: NumPy, Pandas, Matplotlib",
            skills: ["Python", "NumPy", "Pandas", "Matplotlib"],
          },
          {
            title: "Statistics & Probability",
            duration: "6 weeks",
            description: "Learn statistical concepts and hypothesis testing",
            skills: ["Statistics", "Probability", "Hypothesis Testing"],
          },
          {
            title: "Data Analysis & Visualization",
            duration: "6 weeks",
            description: "Explore data and create compelling visualizations",
            skills: ["EDA", "Seaborn", "Plotly", "Tableau"],
          },
          {
            title: "Machine Learning Fundamentals",
            duration: "8 weeks",
            description: "Understand supervised and unsupervised learning",
            skills: ["Scikit-learn", "Regression", "Classification", "Clustering"],
          },
          {
            title: "Advanced ML & Deep Learning",
            duration: "8 weeks",
            description: "Build neural networks and advanced models",
            skills: ["TensorFlow", "Keras", "Neural Networks", "Deep Learning"],
          },
          {
            title: "Capstone Projects",
            duration: "7 weeks",
            description: "Complete end-to-end data science projects",
            skills: ["Project Management", "Deployment", "Communication"],
          },
        ],
        companies: [
          { name: "Netflix", logo: "N", info: "Data Scientist positions" },
          { name: "Uber", logo: "U", info: "ML Engineer roles" },
          { name: "LinkedIn", logo: "L", info: "Data Science opportunities" },
          { name: "Airbnb", logo: "A", info: "Analytics Engineer jobs" },
          { name: "Spotify", logo: "S", info: "Data Scientist roles" },
          { name: "Tesla", logo: "T", info: "ML Engineer positions" },
        ],
        stories: [
          {
            name: "David Park",
            role: "Data Scientist at Netflix",
            avatar: "DP",
            story:
              "The comprehensive ML training helped me understand recommendation systems, which was crucial for my Netflix interview.",
          },
          {
            name: "Maria Garcia",
            role: "ML Engineer at Uber",
            avatar: "MG",
            story:
              "Transitioning from traditional analytics to ML was challenging, but the structured approach made it achievable.",
          },
        ],
        related: [
          { icon: "🤖", title: "Machine Learning Engineer", description: "Production ML systems" },
          { icon: "📈", title: "Data Analyst", description: "Business intelligence and reporting" },
          { icon: "🔬", title: "Research Scientist", description: "AI and ML research" },
        ],
      },
    }
  }

  setupEventListeners() {
    document.getElementById("startRoadmapBtn")?.addEventListener("click", () => {
      window.location.href = "roadmaps.html"
    })

    document.getElementById("talkToAdvisorBtn")?.addEventListener("click", () => {
      window.location.href = "chat.html"
    })

    document.getElementById("startJourneyBtn")?.addEventListener("click", () => {
      this.startLearningJourney()
    })

    document.getElementById("customizeRoadmapBtn")?.addEventListener("click", () => {
      this.customizeRoadmap()
    })
  }

  loadCareerFromURL() {
    const urlParams = new URLSearchParams(window.location.search)
    const careerPath = urlParams.get("path")

    if (careerPath === "custom") {
      this.loadCustomCareer()
    } else {
      this.loadCareer(careerPath || "frontend")
    }
  }

  async loadCustomCareer() {
    const storedRoadmap = localStorage.getItem("roadmap");
    if (storedRoadmap) {
        this.renderCustomCareer(JSON.parse(storedRoadmap));
    } else {
        try {
            const response = await fetch("/roadmap/user");
            if (response.ok) {
                const data = await response.json();
                if (data.steps && data.steps.length > 0) {
                    localStorage.setItem("roadmap", JSON.stringify(data.steps));
                    this.renderCustomCareer(data.steps);
                } else {
                    this.displayNoRoadmapMessage();
                }
            } else {
                this.displayNoRoadmapMessage();
            }
        } catch (error) {
            console.error("Error fetching custom roadmap:", error);
            this.displayNoRoadmapMessage();
        }
    }
}

renderCustomCareer(steps) {
    const customCareer = {
        title: "Your Custom Roadmap",
        icon: "🚀",
        description: "A personalized roadmap generated by the AI assistant.",
        difficulty: "Custom",
        duration: "Varies",
        salaryRange: "N/A",
        salaryLevels: [],
        marketStats: [],
        skills: [],
        roadmap: steps.map((step, index) => ({
            title: `Step ${index + 1}: ${step.title}`,
            duration: "Varies",
            description: step.advice,
            skills: [],
        })),
        companies: [],
        stories: [],
        related: [],
    };
    this.renderCareer(customCareer);
}

displayNoRoadmapMessage() {
    document.getElementById("careerTitle").textContent = "No Custom Roadmap Found";
    document.getElementById("careerDescription").textContent = "Please go to the chat and generate a roadmap first.";
}

  loadCareer(careerKey) {
    const career = this.careerData[careerKey]
    if (!career) return
    this.renderCareer(career)
  }

  renderCareer(career) {

    this.currentCareer = career

    // Update hero section
    document.getElementById("careerIcon").textContent = career.icon
    document.getElementById("careerTitle").textContent = career.title
    document.getElementById("careerDescription").textContent = career.description
    document.getElementById("difficultyBadge").textContent = career.difficulty
    document.getElementById("durationBadge").textContent = career.duration
    document.getElementById("salaryBadge").textContent = career.salaryRange

    // Update salary info
    this.updateSalaryInfo(career.salaryLevels)

    // Update market stats
    this.updateMarketStats(career.marketStats)

    // Update skills
    this.updateSkills(career.skills)

    // Update roadmap
    this.updateRoadmap(career.roadmap)

    // Update companies
    this.updateCompanies(career.companies)

    // Update success stories
    this.updateSuccessStories(career.stories)

    // Update related careers
    this.updateRelatedCareers(career.related)

    // Animate elements
    this.animateElements()
  }

  updateSalaryInfo(salaryLevels) {
    const container = document.getElementById("salaryInfo")
    container.innerHTML = salaryLevels
      .map(
        (level) => `
      <div class="salary-level">
        <span class="level">${level.level}</span>
        <span class="amount">${level.amount}</span>
      </div>
    `,
      )
      .join("")
  }

  updateMarketStats(stats) {
    const container = document.getElementById("marketStats")
    container.innerHTML = stats
      .map(
        (stat) => `
      <div class="stat">
        <span class="stat-label">${stat.label}</span>
        <span class="stat-value ${stat.positive ? "positive" : ""}">${stat.value}</span>
      </div>
    `,
      )
      .join("")
  }

  updateSkills(skills) {
    const container = document.getElementById("skillsList")
    container.innerHTML = skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")
  }

  updateRoadmap(roadmap) {
    const container = document.getElementById("roadmapTimeline")
    container.innerHTML = roadmap
      .map(
        (item, index) => `
      <div class="timeline-item" style="animation-delay: ${index * 0.1}s">
        <div class="timeline-content">
          <div class="timeline-header">
            <h4 class="timeline-title">${item.title}</h4>
            <span class="timeline-duration">${item.duration}</span>
          </div>
          <p class="timeline-description">${item.description}</p>
          <div class="timeline-skills">
            ${item.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
          </div>
        </div>
      </div>
    `,
      )
      .join("")
  }

  updateCompanies(companies) {
    const container = document.getElementById("companiesGrid")
    container.innerHTML = companies
      .map(
        (company, index) => `
      <div class="company-card" style="animation-delay: ${index * 0.1}s">
        <div class="company-logo">${company.logo}</div>
        <h4 class="company-name">${company.name}</h4>
        <p class="company-info">${company.info}</p>
      </div>
    `,
      )
      .join("")
  }

  updateSuccessStories(stories) {
    const container = document.getElementById("storiesGrid")
    container.innerHTML = stories
      .map(
        (story, index) => `
      <div class="story-card" style="animation-delay: ${index * 0.2}s">
        <div class="story-header">
          <div class="story-avatar">${story.avatar}</div>
          <div class="story-info">
            <h4>${story.name}</h4>
            <p>${story.role}</p>
          </div>
        </div>
        <div class="story-content">
          "${story.story}"
        </div>
      </div>
    `,
      )
      .join("")
  }

  updateRelatedCareers(related) {
    const container = document.getElementById("relatedGrid")
    container.innerHTML = related
      .map(
        (career, index) => `
      <a href="careers.html?path=${career.title.toLowerCase().replace(/\s+/g, "-")}" class="related-card" style="animation-delay: ${index * 0.1}s">
        <div class="related-icon">${career.icon}</div>
        <h4>${career.title}</h4>
        <p>${career.description}</p>
      </a>
    `,
      )
      .join("")
  }

  startLearningJourney() {
    // Simulate starting the learning journey
    const btn = document.getElementById("startJourneyBtn")
    btn.textContent = "Starting Journey..."
    btn.disabled = true

    setTimeout(() => {
      alert(`Welcome to your ${this.currentCareer.title} journey! Your personalized learning path is now active.`)
      btn.textContent = "Journey Started ✓"
      btn.classList.add("btn-success")
    }, 2000)
  }

  customizeRoadmap() {
    alert(
      "Roadmap customization feature coming soon! You'll be able to adjust the learning path based on your experience and goals.",
    )
  }

  animateElements() {
    // Animate cards on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 0.6s ease-out"
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".overview-card, .company-card, .story-card, .related-card").forEach((card) => {
      observer.observe(card)
    })
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new CareerDetailsManager()
})

// Add interactive effects
document.addEventListener("DOMContentLoaded", () => {
  // Animate skill tags on hover
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("skill-tag")) {
      e.target.style.transform = "scale(0.95)"
      setTimeout(() => {
        e.target.style.transform = "scale(1)"
      }, 150)
    }
  })

  // Add floating animation to career icon
  const careerIcon = document.getElementById("careerIcon")
  if (careerIcon) {
    setInterval(() => {
      careerIcon.style.transform = "translateY(-10px) scale(1.05)"
      setTimeout(() => {
        careerIcon.style.transform = "translateY(0) scale(1)"
      }, 1000)
    }, 4000)
  }

  // Animate timeline items on scroll
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "slideInLeft 0.6s ease-out"
        }
      })
    },
    { threshold: 0.3 },
  )

  setTimeout(() => {
    document.querySelectorAll(".timeline-item").forEach((item) => {
      timelineObserver.observe(item)
    })
  }, 1000)
})
