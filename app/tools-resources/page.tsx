"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Zap,
  TrendingUp,
  Share2,
  MessageCircle,
  Sparkles,
  Eye,
  Cloud,
  Shield,
  Download,
  Calendar,
  CheckCircle,
  FileText,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  Send,
  Copy,
  AlertCircle,
  CheckCircle2,
  BarChart3,
  Users,
  Heart,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ToolsResourcesPage() {
  const router = useRouter()

  // Website Estimator State
  const [estimatorFeatures, setEstimatorFeatures] = useState({
    basic: true,
    ecommerce: false,
    cms: false,
    api: false,
    analytics: false,
  })
  const [estimatorCost, setEstimatorCost] = useState(0)

  // ROI Calculator State
  const [roiInputs, setRoiInputs] = useState({ investment: "", revenue: "", months: "12" })
  const [roiResult, setRoiResult] = useState<number | null>(null)

  // Enhanced Social Audit State
  const [auditHandle, setAuditHandle] = useState("")
  const [auditResults, setAuditResults] = useState<any>(null)
  const [auditLoading, setAuditLoading] = useState(false)

  // Chatbot State
  const [chatMessages, setChatMessages] = useState<Array<{ role: string; text: string }>>([
    { role: "bot", text: "Hi! I'm Omar's AI Assistant. How can I help you today?" },
  ])
  const [chatInput, setChatInput] = useState("")

  // Copy Generator State
  const [copyTopic, setCopyTopic] = useState("")
  const [generatedCopies, setGeneratedCopies] = useState<string[]>([])

  // Enhanced Cloud Quiz State
  const [cloudQuizAnswers, setCloudQuizAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
  })
  const [cloudQuizResult, setCloudQuizResult] = useState<any>(null)

  // Enhanced Security Check State
  const [securityAnswers, setSecurityAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  })
  const [securityResult, setSecurityResult] = useState<any>(null)

  const businessTools = [
    {
      id: "website-estimator",
      title: "Website Estimator",
      description: "Get an accurate estimate for your website project based on features and complexity",
      icon: Zap,
      features: ["Project scope analysis", "Cost estimation", "Timeline projection"],
      cta: "Try Now",
    },
    {
      id: "roi-calculator",
      title: "ROI Calculator",
      description: "Calculate the return on investment for your digital transformation initiatives",
      icon: TrendingUp,
      features: ["Revenue impact", "Cost savings", "Break-even analysis"],
      cta: "Calculate Now",
    },
    {
      id: "social-audit",
      title: "Social Media Audit",
      description: "Analyze your social media presence and get actionable improvement suggestions",
      icon: Share2,
      features: ["Performance analysis", "Competitor comparison", "Growth recommendations"],
      cta: "Start Audit",
    },
  ]

  const aiDemos = [
    {
      id: "chatbot-demo",
      title: "AI Chatbot Demo",
      description: "Experience our intelligent chatbot that can handle customer inquiries 24/7",
      icon: MessageCircle,
      features: ["Multi-language support", "Context awareness", "Seamless integration"],
      cta: "Chat Now",
    },
    {
      id: "copy-generator",
      title: "AI Copy Generator",
      description: "Generate compelling marketing copy for your campaigns in seconds",
      icon: Sparkles,
      features: ["Multiple tones", "SEO optimized", "Brand-aligned"],
      cta: "Generate Text",
    },
    {
      id: "insights-simulator",
      title: "Predictive Insights",
      description: "Get AI-powered predictions for market trends and business opportunities",
      icon: Eye,
      features: ["Market analysis", "Trend forecasting", "Opportunity detection"],
      cta: "View Insights",
    },
  ]

  const techReadiness = [
    {
      id: "cloud-quiz",
      title: "Cloud Readiness Quiz",
      description: "Assess your business readiness for cloud migration and transformation",
      icon: Cloud,
      features: ["10-minute assessment", "Personalized recommendations", "Implementation roadmap"],
      cta: "Take Quiz",
    },
    {
      id: "security-check",
      title: "Data Security Check",
      description: "Evaluate your current data security posture and identify vulnerabilities",
      icon: Shield,
      features: ["Security scoring", "Risk assessment", "Compliance check"],
      cta: "Check Now",
    },
  ]

  const downloads = [
    {
      id: "content-calendar",
      title: "Content Marketing Calendar",
      description: "Plan your content strategy for the entire year with our detailed template",
      icon: Calendar,
      format: "Excel & PDF",
    },
    {
      id: "marketing-checklist",
      title: "Marketing Checklist",
      description: "Complete checklist for launching a successful digital marketing campaign",
      icon: CheckCircle,
      format: "PDF",
    },
    {
      id: "business-plan",
      title: "Business Plan Template",
      description: "Professional business plan template for startups and growing businesses",
      icon: FileText,
      format: "Word & PDF",
    },
  ]

  // Calculate Website Cost
  const calculateWebsiteCost = () => {
    let cost = 100000
    if (estimatorFeatures.ecommerce) cost += 300000
    if (estimatorFeatures.cms) cost += 200000
    if (estimatorFeatures.api) cost += 1000000
    if (estimatorFeatures.analytics) cost += 50000
    setEstimatorCost(cost)
  }

  // Calculate ROI
  const calculateROI = () => {
    if (roiInputs.investment && roiInputs.revenue) {
      const investment = Number(roiInputs.investment)
      const revenue = Number(roiInputs.revenue)
      const roi = ((revenue - investment) / investment) * 100
      setRoiResult(roi)
    }
  }

  // Enhanced Social Media Audit
  const performEnhancedAudit = async () => {
    if (auditHandle) {
      setAuditLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const followers = Math.floor(Math.random() * 150000) + 5000
      const engagement = (Math.random() * 12 + 1).toFixed(1)
      const postFrequency = Math.floor(Math.random() * 25) + 3
      const avgReach = Math.floor(Math.random() * 500000) + 50000

      const auditScore = Math.min(
        100,
        Math.floor(
          (Number(engagement) / 10) * 40 + Math.min(postFrequency / 30, 1) * 30 + Math.min(followers / 100000, 1) * 30,
        ),
      )

      const recommendations = []
      if (engagement < 3) recommendations.push("Increase posting frequency and engagement tactics")
      if (postFrequency < 7) recommendations.push("Post at least 7 times per week for better visibility")
      if (followers < 10000) recommendations.push("Focus on growth strategies - consider influencer partnerships")

      setAuditResults({
        handle: auditHandle,
        followers,
        engagement,
        postFrequency,
        avgReach,
        score: auditScore,
        topPlatform: ["Instagram", "LinkedIn", "TikTok", "Twitter"][Math.floor(Math.random() * 4)],
        bestPostingTime: ["9 AM", "12 PM", "6 PM", "8 PM"][Math.floor(Math.random() * 4)],
        recommendations: recommendations.length > 0 ? recommendations : ["Great performance! Keep it up!"],
      })
      setAuditLoading(false)
    }
  }

  // Enhanced Cloud Readiness Quiz
  const scoreEnhancedCloudQuiz = () => {
    let score = 0
    const weights = { q1: 15, q2: 15, q3: 15, q4: 20, q5: 20, q6: 15 }

    if (cloudQuizAnswers.q1 === "yes") score += weights.q1
    if (cloudQuizAnswers.q2 === "yes") score += weights.q2
    if (cloudQuizAnswers.q3 === "yes") score += weights.q3
    if (cloudQuizAnswers.q4 === "yes") score += weights.q4
    if (cloudQuizAnswers.q5 === "yes") score += weights.q5
    if (cloudQuizAnswers.q6 === "yes") score += weights.q6

    let readiness = ""
    let color = ""
    let recommendations: string[] = []

    if (score >= 80) {
      readiness = "Enterprise Ready"
      color = "text-green-600"
      recommendations = [
        "Your organization is well-prepared for cloud migration",
        "Consider a phased migration approach starting with non-critical systems",
        "Establish cloud governance policies before migration",
      ]
    } else if (score >= 60) {
      readiness = "Ready with Planning"
      color = "text-blue-600"
      recommendations = [
        "You have a good foundation - address identified gaps",
        "Invest in team training and certification programs",
        "Start with pilot projects to build experience",
      ]
    } else if (score >= 40) {
      readiness = "Preparation Required"
      color = "text-yellow-600"
      recommendations = [
        "Develop a comprehensive cloud strategy",
        "Increase team training and skill development",
        "Conduct thorough infrastructure assessment",
      ]
    } else {
      readiness = "Early Stage"
      color = "text-red-600"
      recommendations = [
        "Start with cloud awareness and training programs",
        "Hire cloud consultants to develop strategy",
        "Begin with SaaS applications for quick wins",
      ]
    }

    setCloudQuizResult({ score, readiness, color, recommendations })
  }

  // Enhanced Security Check
  const scoreEnhancedSecurityCheck = () => {
    let score = 100
    const vulnerabilities: Array<{ issue: string; severity: string; solution: string }> = []

    if (securityAnswers.q1 !== "yes") {
      score -= 20
      vulnerabilities.push({
        issue: "No regular backups",
        severity: "Critical",
        solution: "Implement daily automated backups with off-site redundancy",
      })
    }
    if (securityAnswers.q2 !== "yes") {
      score -= 25
      vulnerabilities.push({
        issue: "Encryption not implemented",
        severity: "Critical",
        solution: "Enable end-to-end encryption for data in transit and at rest",
      })
    }
    if (securityAnswers.q3 !== "yes") {
      score -= 20
      vulnerabilities.push({
        issue: "No 2FA/MFA",
        severity: "High",
        solution: "Mandate MFA for all user accounts, especially admin access",
      })
    }
    if (securityAnswers.q4 !== "yes") {
      score -= 15
      vulnerabilities.push({
        issue: "Insufficient staff training",
        severity: "High",
        solution: "Conduct quarterly security awareness training for all employees",
      })
    }
    if (securityAnswers.q5 !== "yes") {
      score -= 20
      vulnerabilities.push({
        issue: "No compliance framework",
        severity: "High",
        solution: "Implement ISO 27001 or other relevant compliance standards",
      })
    }

    let riskLevel = ""
    let riskColor = ""

    if (score >= 80) {
      riskLevel = "Low Risk"
      riskColor = "text-green-600"
    } else if (score >= 60) {
      riskLevel = "Moderate Risk"
      riskColor = "text-yellow-600"
    } else {
      riskLevel = "High Risk"
      riskColor = "text-red-600"
    }

    setSecurityResult({
      score: Math.max(0, score),
      riskLevel,
      riskColor,
      vulnerabilities,
      complianceStatus: score >= 80 ? "Compliant" : score >= 60 ? "Partially Compliant" : "Non-Compliant",
    })
  }

  // Send Chat Message
  const sendChatMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { role: "user", text: chatInput }])

      const responses = [
        "That's a great question! I can help you with that.",
        "We offer comprehensive solutions for that. Would you like more details?",
        "Our team specializes in this area. When would you like to schedule a consultation?",
        "This is one of our core services.",
        "I'd recommend discussing this with our specialists. Shall I book a call for you?",
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setChatMessages((prev) => [...prev, { role: "bot", text: randomResponse }])
      setChatInput("")
    }
  }

  // Generate Copy
  const generateCopy = () => {
    if (copyTopic) {
      const copies = [
        `Transform Your ${copyTopic} - Expert Solutions at Your Fingertips`,
        `Unlock Growth With Our ${copyTopic} Services - Proven Results`,
        `${copyTopic} Made Simple - Let's Build Your Success Together`,
        `Maximize ROI With Strategic ${copyTopic} Solutions`,
        `Your ${copyTopic} Partner For Digital Excellence`,
      ]
      setGeneratedCopies(copies)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
              Empowering Your Business with Smart Digital Tools
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Access free tools, calculators, and resources to assess your business needs, explore AI capabilities, and
              make informed decisions about your digital transformation journey.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto touch-manipulation active:scale-[0.98]"
            >
              Start Your Next Campaign <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Business & Marketing Tools */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              Business & Marketing Tools
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Practical tools to help you estimate costs, measure ROI, and optimize your marketing efforts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {businessTools.map((tool) => {
              const Icon = tool.icon
              return (
                <Card key={tool.id} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{tool.title}</CardTitle>
                    <CardDescription className="text-sm">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {tool.id === "website-estimator" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base touch-manipulation active:scale-[0.98]">
                            {tool.cta}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{tool.title}</DialogTitle>
                            <DialogDescription>{tool.description}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="basic" checked={estimatorFeatures.basic} disabled />
                                <Label htmlFor="basic" className="text-sm">
                                  Basic Website - ₦50,000
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="ecommerce"
                                  checked={estimatorFeatures.ecommerce}
                                  onCheckedChange={(checked) =>
                                    setEstimatorFeatures({ ...estimatorFeatures, ecommerce: checked as boolean })
                                  }
                                />
                                <Label htmlFor="ecommerce" className="text-sm">
                                  E-commerce - ₦150,000
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="cms"
                                  checked={estimatorFeatures.cms}
                                  onCheckedChange={(checked) =>
                                    setEstimatorFeatures({ ...estimatorFeatures, cms: checked as boolean })
                                  }
                                />
                                <Label htmlFor="cms" className="text-sm">
                                  CMS Integration - ₦100,000
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="api"
                                  checked={estimatorFeatures.api}
                                  onCheckedChange={(checked) =>
                                    setEstimatorFeatures({ ...estimatorFeatures, api: checked as boolean })
                                  }
                                />
                                <Label htmlFor="api" className="text-sm">
                                  API Development - ₦200,000
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="analytics"
                                  checked={estimatorFeatures.analytics}
                                  onCheckedChange={(checked) =>
                                    setEstimatorFeatures({ ...estimatorFeatures, analytics: checked as boolean })
                                  }
                                />
                                <Label htmlFor="analytics" className="text-sm">
                                  Analytics & Tracking - ₦50,000
                                </Label>
                              </div>
                            </div>
                            <Button
                              onClick={calculateWebsiteCost}
                              className="w-full bg-primary hover:bg-primary/90 touch-manipulation active:scale-[0.98]"
                            >
                              Calculate Cost
                            </Button>
                            {estimatorCost > 0 && (
                              <div className="bg-primary/10 p-4 rounded-lg">
                                <p className="text-xs sm:text-sm text-muted-foreground mb-2">Estimated Total Cost:</p>
                                <p className="text-xl sm:text-2xl font-bold text-primary">
                                  ₦{estimatorCost.toLocaleString()}
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">Timeline: 4-8 weeks</p>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {tool.id === "roi-calculator" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base touch-manipulation active:scale-[0.98]">
                            {tool.cta}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>{tool.title}</DialogTitle>
                            <DialogDescription>Calculate your expected return on investment</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div>
                              <Label htmlFor="investment" className="text-sm">
                                Initial Investment (₦)
                              </Label>
                              <Input
                                id="investment"
                                type="number"
                                placeholder="e.g., 500000"
                                value={roiInputs.investment}
                                onChange={(e) => setRoiInputs({ ...roiInputs, investment: e.target.value })}
                                className="text-sm touch-manipulation"
                              />
                            </div>
                            <div>
                              <Label htmlFor="revenue" className="text-sm">
                                Expected Revenue Increase (₦)
                              </Label>
                              <Input
                                id="revenue"
                                type="number"
                                placeholder="e.g., 1500000"
                                value={roiInputs.revenue}
                                onChange={(e) => setRoiInputs({ ...roiInputs, revenue: e.target.value })}
                                className="text-sm touch-manipulation"
                              />
                            </div>
                            <div>
                              <Label htmlFor="months" className="text-sm">
                                Timeline (Months)
                              </Label>
                              <Input
                                id="months"
                                type="number"
                                value={roiInputs.months}
                                onChange={(e) => setRoiInputs({ ...roiInputs, months: e.target.value })}
                                className="text-sm touch-manipulation"
                              />
                            </div>
                            <Button
                              onClick={calculateROI}
                              className="w-full bg-primary hover:bg-primary/90 touch-manipulation active:scale-[0.98]"
                            >
                              Calculate ROI
                            </Button>
                            {roiResult !== null && (
                              <div className="bg-primary/10 p-4 rounded-lg">
                                <p className="text-xs sm:text-sm text-muted-foreground mb-2">Your ROI:</p>
                                <p
                                  className={`text-2xl font-bold ${roiResult >= 0 ? "text-green-600" : "text-red-600"}`}
                                >
                                  {roiResult.toFixed(1)}%
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  {roiResult >= 0 ? "Positive return expected" : "Consider adjusting your strategy"}
                                </p>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {tool.id === "social-audit" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base touch-manipulation active:scale-[0.98]">
                            {tool.cta}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md sm:max-w-lg max-h-[85vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-lg">{tool.title}</DialogTitle>
                            <DialogDescription className="text-sm">
                              Enter your social media handle for comprehensive analysis
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div>
                              <Label htmlFor="handle" className="text-sm">
                                Social Media Handle
                              </Label>
                              <Input
                                id="handle"
                                placeholder="@yourbrand"
                                value={auditHandle}
                                onChange={(e) => setAuditHandle(e.target.value)}
                                className="text-sm touch-manipulation"
                              />
                            </div>
                            <Button
                              onClick={performEnhancedAudit}
                              disabled={auditLoading}
                              className="w-full bg-primary hover:bg-primary/90 touch-manipulation active:scale-[0.98]"
                            >
                              {auditLoading ? "Analyzing..." : "Analyze Profile"}
                            </Button>
                            {auditResults && (
                              <div className="space-y-4">
                                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg">
                                  <div className="flex items-center justify-between mb-2">
                                    <p className="text-xs sm:text-sm font-semibold">Overall Performance Score</p>
                                    <p className="text-xl sm:text-2xl font-bold text-primary">
                                      {auditResults.score}/100
                                    </p>
                                  </div>
                                  <Progress value={auditResults.score} className="h-2" />
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                  <div className="bg-muted p-3 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                      <Users className="h-4 w-4 text-primary" />
                                      <span className="text-xs text-muted-foreground">Followers</span>
                                    </div>
                                    <p className="text-sm sm:text-base font-semibold">
                                      {(auditResults.followers / 1000).toFixed(0)}K
                                    </p>
                                  </div>
                                  <div className="bg-muted p-3 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                      <Heart className="h-4 w-4 text-primary" />
                                      <span className="text-xs text-muted-foreground">Engagement</span>
                                    </div>
                                    <p className="text-sm sm:text-base font-semibold">{auditResults.engagement}%</p>
                                  </div>
                                  <div className="bg-muted p-3 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                      <BarChart3 className="h-4 w-4 text-primary" />
                                      <span className="text-xs text-muted-foreground">Frequency</span>
                                    </div>
                                    <p className="text-sm sm:text-base font-semibold">
                                      {auditResults.postFrequency}x/week
                                    </p>
                                  </div>
                                  <div className="bg-muted p-3 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                      <TrendingUp className="h-4 w-4 text-primary" />
                                      <span className="text-xs text-muted-foreground">Avg Reach</span>
                                    </div>
                                    <p className="text-sm sm:text-base font-semibold">
                                      {(auditResults.avgReach / 1000).toFixed(0)}K
                                    </p>
                                  </div>
                                </div>

                                <div className="bg-muted p-3 rounded-lg">
                                  <p className="text-xs font-semibold text-muted-foreground mb-2">KEY INSIGHTS</p>
                                  <div className="space-y-1">
                                    <div className="text-xs">
                                      🎯 <strong>Top Platform:</strong> {auditResults.topPlatform}
                                    </div>
                                    <div className="text-xs">
                                      ⏰ <strong>Best Time:</strong> {auditResults.bestPostingTime}
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <p className="text-xs font-semibold text-muted-foreground mb-2">RECOMMENDATIONS</p>
                                  <div className="space-y-2">
                                    {auditResults.recommendations.map((rec: string, idx: number) => (
                                      <Alert key={idx} className="border-primary/20 py-2">
                                        <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                                        <AlertDescription className="text-xs ml-2">{rec}</AlertDescription>
                                      </Alert>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI-Powered Demos */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-b bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">AI-Powered Demos</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Experience the power of artificial intelligence with our interactive demos and tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {aiDemos.map((tool) => {
              const Icon = tool.icon
              return (
                <Card key={tool.id} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{tool.title}</CardTitle>
                    <CardDescription className="text-sm">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {tool.id === "chatbot-demo" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base touch-manipulation active:scale-[0.98]">
                            {tool.cta}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>{tool.title}</DialogTitle>
                            <DialogDescription className="text-sm">Chat with our AI assistant</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4 max-h-72 overflow-y-auto">
                            <div className="space-y-3">
                              {chatMessages.map((msg, idx) => (
                                <div
                                  key={idx}
                                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                  <div
                                    className={`max-w-xs p-3 rounded-lg text-sm ${
                                      msg.role === "user" ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                                    }`}
                                  >
                                    {msg.text}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Input
                              placeholder="Ask me something..."
                              value={chatInput}
                              onChange={(e) => setChatInput(e.target.value)}
                              onKeyPress={(e) => e.key === "Enter" && sendChatMessage()}
                              className="text-sm touch-manipulation"
                            />
                            <Button
                              onClick={sendChatMessage}
                              size="icon"
                              className="bg-primary hover:bg-primary/90 flex-shrink-0 touch-manipulation active:scale-[0.98]"
                            >
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {tool.id === "copy-generator" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base touch-manipulation active:scale-[0.98]">
                            {tool.cta}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>{tool.title}</DialogTitle>
                            <DialogDescription className="text-sm">
                              Generate marketing copy for your campaign
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div>
                              <Label htmlFor="topic" className="text-sm">
                                What's your topic or product?
                              </Label>
                              <Input
                                id="topic"
                                placeholder="e.g., Cloud Migration Services"
                                value={copyTopic}
                                onChange={(e) => setCopyTopic(e.target.value)}
                                className="text-sm touch-manipulation"
                              />
                            </div>
                            <Button
                              onClick={generateCopy}
                              className="w-full bg-primary hover:bg-primary/90 touch-manipulation active:scale-[0.98]"
                            >
                              Generate Copy Ideas
                            </Button>
                            {generatedCopies.length > 0 && (
                              <div className="space-y-2">
                                {generatedCopies.map((copy, idx) => (
                                  <div
                                    key={idx}
                                    className="bg-muted p-3 rounded-lg flex justify-between items-start gap-2"
                                  >
                                    <p className="text-xs sm:text-sm leading-relaxed flex-1">{copy}</p>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => navigator.clipboard.writeText(copy)}
                                      className="flex-shrink-0 touch-manipulation active:scale-[0.95]"
                                    >
                                      <Copy className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {tool.id === "insights-simulator" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base touch-manipulation active:scale-[0.98]">
                            {tool.cta}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>{tool.title}</DialogTitle>
                            <DialogDescription className="text-sm">
                              Market trends and business insights
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-3">
                              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg">
                                <p className="text-xs text-muted-foreground mb-1">Cloud Adoption Trend</p>
                                <p className="text-base sm:text-lg font-semibold text-primary">↑ 45% Growth Expected</p>
                                <p className="text-xs text-muted-foreground mt-1">Q1-Q4 2024</p>
                              </div>
                              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg">
                                <p className="text-xs text-muted-foreground mb-1">AI Implementation</p>
                                <p className="text-base sm:text-lg font-semibold text-primary">↑ 62% Increase</p>
                                <p className="text-xs text-muted-foreground mt-1">Among SMEs</p>
                              </div>
                              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg">
                                <p className="text-xs text-muted-foreground mb-1">Digital Marketing ROI</p>
                                <p className="text-base sm:text-lg font-semibold text-primary">↑ 38% Improvement</p>
                                <p className="text-xs text-muted-foreground mt-1">With Automation</p>
                              </div>
                              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg">
                                <p className="text-xs text-muted-foreground mb-1">E-commerce Growth</p>
                                <p className="text-base sm:text-lg font-semibold text-primary">↑ 55% Expected</p>
                                <p className="text-xs text-muted-foreground mt-1">In Nigeria</p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cloud & Tech Readiness */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Cloud & Tech Readiness</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Assess your organization's readiness for cloud adoption and technology transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {techReadiness.map((tool) => {
              const Icon = tool.icon
              return (
                <Card key={tool.id} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{tool.title}</CardTitle>
                    <CardDescription className="text-sm">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {tool.id === "cloud-quiz" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base touch-manipulation active:scale-[0.98]">
                            {tool.cta}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md sm:max-w-lg max-h-[85vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-lg">{tool.title}</DialogTitle>
                            <DialogDescription className="text-sm">
                              6-question assessment of your cloud readiness
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            {[
                              { num: 1, question: "Does your team have cloud experience?", key: "q1" },
                              { num: 2, question: "Do you have a defined IT strategy?", key: "q2" },
                              { num: 3, question: "Is data security a priority?", key: "q3" },
                              { num: 4, question: "Do you have budget for cloud migration?", key: "q4" },
                              { num: 5, question: "Are you using SaaS applications?", key: "q5" },
                              { num: 6, question: "Do you have a dedicated IT department?", key: "q6" },
                            ].map((item) => (
                              <div key={item.key}>
                                <p className="font-semibold text-sm mb-2">
                                  {item.num}. {item.question}
                                </p>
                                <RadioGroup
                                  value={cloudQuizAnswers[item.key as keyof typeof cloudQuizAnswers]}
                                  onValueChange={(val) => setCloudQuizAnswers({ ...cloudQuizAnswers, [item.key]: val })}
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="yes" id={`${item.key}yes`} />
                                    <Label htmlFor={`${item.key}yes`} className="text-sm cursor-pointer">
                                      Yes
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="no" id={`${item.key}no`} />
                                    <Label htmlFor={`${item.key}no`} className="text-sm cursor-pointer">
                                      No
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            ))}
                            <Button
                              onClick={scoreEnhancedCloudQuiz}
                              className="w-full bg-primary hover:bg-primary/90 mt-4 touch-manipulation active:scale-[0.98]"
                            >
                              Get Detailed Assessment
                            </Button>
                            {cloudQuizResult && (
                              <div className="space-y-4 mt-4">
                                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg">
                                  <div className="flex items-center justify-between mb-2">
                                    <p className="text-xs sm:text-sm font-semibold">Cloud Readiness Score</p>
                                    <p className={`text-2xl sm:text-3xl font-bold ${cloudQuizResult.color}`}>
                                      {cloudQuizResult.score}%
                                    </p>
                                  </div>
                                  <Progress value={cloudQuizResult.score} className="h-2 mb-3" />
                                  <p className={`text-base sm:text-lg font-semibold ${cloudQuizResult.color}`}>
                                    {cloudQuizResult.readiness}
                                  </p>
                                </div>

                                <div>
                                  <p className="text-xs font-semibold text-muted-foreground mb-2">RECOMMENDATIONS</p>
                                  <div className="space-y-2">
                                    {cloudQuizResult.recommendations.map((rec: string, idx: number) => (
                                      <Alert key={idx} className="py-2">
                                        <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                                        <AlertDescription className="text-xs ml-2">{rec}</AlertDescription>
                                      </Alert>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {tool.id === "security-check" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base touch-manipulation active:scale-[0.98]">
                            {tool.cta}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md sm:max-w-lg max-h-[85vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-lg">{tool.title}</DialogTitle>
                            <DialogDescription className="text-sm">
                              Comprehensive security vulnerability assessment
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            {[
                              { num: 1, question: "Do you have regular automated backups?", key: "q1" },
                              {
                                num: 2,
                                question: "Is data encryption implemented (in transit & at rest)?",
                                key: "q2",
                              },
                              { num: 3, question: "Is Multi-Factor Authentication (MFA) enabled?", key: "q3" },
                              { num: 4, question: "Do staff undergo regular security training?", key: "q4" },
                              {
                                num: 5,
                                question: "Are you compliant with security standards (ISO 27001, GDPR)?",
                                key: "q5",
                              },
                            ].map((item) => (
                              <div key={item.key}>
                                <p className="font-semibold text-sm mb-2">
                                  {item.num}. {item.question}
                                </p>
                                <RadioGroup
                                  value={securityAnswers[item.key as keyof typeof securityAnswers]}
                                  onValueChange={(val) => setSecurityAnswers({ ...securityAnswers, [item.key]: val })}
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="yes" id={`sec${item.key}yes`} />
                                    <Label htmlFor={`sec${item.key}yes`} className="text-sm cursor-pointer">
                                      Yes
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="no" id={`sec${item.key}no`} />
                                    <Label htmlFor={`sec${item.key}no`} className="text-sm cursor-pointer">
                                      No
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            ))}
                            <Button
                              onClick={scoreEnhancedSecurityCheck}
                              className="w-full bg-primary hover:bg-primary/90 mt-4 touch-manipulation active:scale-[0.98]"
                            >
                              Assess Security
                            </Button>
                            {securityResult && (
                              <div className="space-y-4 mt-4">
                                <div
                                  className={`bg-gradient-to-r from-${securityResult.riskColor.split("-")[1]}-50/30 to-${securityResult.riskColor.split("-")[1]}-50/10 p-4 rounded-lg border-l-4 ${securityResult.score >= 80 ? "border-green-500" : securityResult.score >= 60 ? "border-yellow-500" : "border-red-500"}`}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <p className="text-xs sm:text-sm font-semibold">Security Score</p>
                                    <p className={`text-2xl sm:text-3xl font-bold ${securityResult.riskColor}`}>
                                      {securityResult.score}/100
                                    </p>
                                  </div>
                                  <Progress value={securityResult.score} className="h-2 mb-3" />
                                  <div className="flex items-center justify-between">
                                    <p className={`font-semibold text-sm ${securityResult.riskColor}`}>
                                      {securityResult.riskLevel}
                                    </p>
                                    <p className="text-xs font-semibold text-muted-foreground">
                                      {securityResult.complianceStatus}
                                    </p>
                                  </div>
                                </div>

                                {securityResult.vulnerabilities.length > 0 && (
                                  <div>
                                    <p className="text-xs font-semibold text-muted-foreground mb-2">VULNERABILITIES</p>
                                    <div className="space-y-2">
                                      {securityResult.vulnerabilities.map((vuln: any, idx: number) => (
                                        <Alert
                                          key={idx}
                                          className={`border-l-4 text-xs ${
                                            vuln.severity === "Critical"
                                              ? "border-red-500 bg-red-50/50"
                                              : "border-yellow-500 bg-yellow-50/50"
                                          }`}
                                        >
                                          <AlertCircle className="h-3 w-3 text-red-600 flex-shrink-0" />
                                          <div className="ml-2">
                                            <p className="font-semibold">
                                              {vuln.issue}
                                              <span
                                                className={`ml-2 text-xs font-bold ${
                                                  vuln.severity === "Critical" ? "text-red-600" : "text-yellow-600"
                                                }`}
                                              >
                                                {vuln.severity}
                                              </span>
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-1">
                                              <strong>Solution:</strong> {vuln.solution}
                                            </p>
                                          </div>
                                        </Alert>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Free Downloads */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-b bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Free Downloads</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Download our professionally crafted templates and checklists to accelerate your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {downloads.map((resource) => {
              const Icon = resource.icon
              return (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{resource.title}</CardTitle>
                    <CardDescription className="text-sm">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                      <span className="font-semibold">Format:</span> {resource.format}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-sm touch-manipulation active:scale-[0.98]">
                          <Download className="mr-2 h-4 w-4" />
                          Download Free
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-lg">Download {resource.title}</DialogTitle>
                          <DialogDescription className="text-sm">
                            Enter your details to download this free resource
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <Input placeholder="Your name" className="text-sm touch-manipulation" />
                          <Input placeholder="Your email" type="email" className="text-sm touch-manipulation" />
                          <Input placeholder="Your company" className="text-sm touch-manipulation" />
                          <Button className="w-full bg-primary hover:bg-primary/90 touch-manipulation active:scale-[0.98]">
                            Download Now
                          </Button>
                          <p className="text-xs text-muted-foreground text-center">
                            ✓ Download link will be sent to your email
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Tools */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Engagement & Support</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Connect with our team and stay updated with the latest insights and opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Book a Consultation - Links to /booking */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Phone className="h-8 w-8 text-primary flex-shrink-0" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Book a Consultation</CardTitle>
                <CardDescription className="text-sm">
                  Schedule a free 30-minute consultation with our experts
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base touch-manipulation active:scale-[0.98]"
                  onClick={() => router.push("/booking")}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Mail className="h-8 w-8 text-primary flex-shrink-0" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Newsletter Signup</CardTitle>
                <CardDescription className="text-sm">
                  Get weekly insights, tips, and industry updates delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base touch-manipulation active:scale-[0.98]">
                      Subscribe
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Newsletter Signup</DialogTitle>
                      <DialogDescription className="text-sm">
                        Get weekly insights, tips, and industry updates delivered to your inbox
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <Input placeholder="Your name" className="text-sm touch-manipulation" />
                      <Input placeholder="Your email" type="email" className="text-sm touch-manipulation" />
                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter-terms" />
                        <label htmlFor="newsletter-terms" className="text-xs sm:text-sm text-muted-foreground">
                          I agree to receive marketing emails from Omar Consults
                        </label>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 touch-manipulation active:scale-[0.98]">
                        Subscribe Now
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        ✓ You'll receive weekly insights and industry updates
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Live Chat Support - WhatsApp */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <MessageSquare className="h-8 w-8 text-primary flex-shrink-0" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Live Chat Support</CardTitle>
                <CardDescription className="text-sm">
                  Chat with our team in real-time to answer your questions instantly
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base touch-manipulation active:scale-[0.98]">
                      Start Chat
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Live Chat Support</DialogTitle>
                      <DialogDescription className="text-sm">
                        Chat with our team in real-time to answer your questions instantly
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4 text-center">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                        <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-3" />
                        <p className="text-muted-foreground mb-2 text-sm">Chat on WhatsApp</p>
                        <p className="font-semibold text-foreground mb-4 text-sm">
                          Connect with our support team instantly on WhatsApp
                        </p>
                        <Button
                          size="lg"
                          className="w-full bg-green-600 hover:bg-green-700 text-white text-sm touch-manipulation active:scale-[0.98]"
                          onClick={() => {
                            const phoneNumber = "+2349066414474"
                            const message = encodeURIComponent(
                              "Hello, I got your number from Omarconsults.ng. I would like to chat with your support team.",
                            )
                            window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
                          }}
                        >
                          Open WhatsApp Chat
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">💬 Available 9 AM - 6 PM (WAT), Monday - Friday</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strong CTA Banner */}
      <section className="relative bg-gradient-to-r from-primary via-primary/80 to-primary/60 py-12 sm:py-16 md:py-20 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              Ready to Unlock Your Business Potential?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Start using our tools today and take the first step toward digital transformation. Our team is ready to
              support you on your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 text-sm sm:text-base touch-manipulation active:scale-[0.98] w-full sm:w-auto"
                onClick={() => router.push("/booking")}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent text-sm sm:text-base touch-manipulation active:scale-[0.98] w-full sm:w-auto"
              >
                Explore More Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
