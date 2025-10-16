"use client"

import { ArrowRight, CheckCircle, Brain, Code, Cloud, TrendingUp, Calculator } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">Our Services</h1>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 sm:p-8 rounded-2xl border hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6 text-center sm:text-left">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
                    <p className="text-primary font-semibold text-base sm:text-lg">{service.price}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>

                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-base sm:text-lg">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link href="/booking" className="flex-1">
                      <Button className="w-full">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg sm:text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 sm:mb-8">
              Let's discuss your project and how we can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/booking">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 w-full sm:w-auto bg-transparent"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "AI Strategy & Consulting",
    price: "Starting from $999",
    description:
      "Transform your business with cutting-edge AI solutions tailored to your specific needs and industry requirements.",
    features: [
      "AI Readiness Assessment",
      "Custom AI Strategy Development",
      "Implementation Roadmap",
      "ROI Analysis & Projections",
    ],
    included: [
      "Initial consultation and needs assessment",
      "Comprehensive AI audit of current systems",
      "Custom AI strategy document",
      "Implementation timeline and milestones",
      "3 months of post-implementation support",
      "Training for your team",
    ],
    icon: Brain,
  },
  {
    title: "Custom Software Development",
    price: "Starting from ₦800,000",
    description:
      "Build scalable and efficient software solutions that drive your business forward with modern technologies.",
    features: [
      "Web & Mobile Applications",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "Legacy System Modernization",
    ],
    included: [
      "Requirements analysis and planning",
      "UI/UX design and prototyping",
      "Full-stack development",
      "Quality assurance and testing",
      "Deployment and hosting setup",
      "6 months of maintenance and support",
    ],
    icon: Code,
  },
  {
    title: "Cloud Solutions",
    price: "Starting from ₦500,000",
    description: "Leverage the power of cloud computing for enhanced scalability, security, and performance.",
    features: [
      "Cloud Migration Services",
      "Infrastructure Optimization",
      "Cloud Security Implementation",
      "24/7 Monitoring & Support",
    ],
    included: [
      "Cloud readiness assessment",
      "Migration strategy and planning",
      "Infrastructure setup and configuration",
      "Security implementation",
      "Performance optimization",
      "Ongoing monitoring and maintenance",
    ],
    icon: Cloud,
  },
  {
    title: "Business & Tax Advisory",
    price: "Starting from ₦150,000",
    description:
      "Comprehensive tax compliance, business registration, and financial management solutions for SMEs and startups.",
    features: [
      "Tax Compliance & Filing",
      "Business Registration & Structuring",
      "Digital Financial Management",
      "Tax Planning for SMEs & Startups",
    ],
    included: [
      "Corporate and personal income tax guidance",
      "VAT, PAYE, and withholding tax compliance",
      "CAC registration and restructuring",
      "Integration of accounting software (QuickBooks, Sage, Zoho Books)",
      "Cloud-based tax record management",
      "Strategic tax planning to reduce liability",
    ],
    icon: Calculator,
  },
  {
    title: "Digital Marketing",
    price: "Starting from ₦200,000",
    description: "Boost your online presence and reach your target audience with data-driven marketing strategies.",
    features: [
      "SEO & SEM Optimization",
      "Social Media Marketing",
      "Content Strategy & Creation",
      "Analytics & Performance Reporting",
    ],
    included: [
      "Digital marketing audit",
      "Strategy development and planning",
      "Content creation and optimization",
      "Campaign setup and management",
      "Monthly performance reports",
      "Ongoing optimization and support",
    ],
    icon: TrendingUp,
  },
]

const process = [
  {
    title: "Discovery",
    description: "We analyze your business needs and current technology landscape",
  },
  {
    title: "Strategy",
    description: "We develop a comprehensive plan tailored to your objectives",
  },
  {
    title: "Implementation",
    description: "We execute the solution with regular updates and feedback",
  },
  {
    title: "Support",
    description: "We provide ongoing support and optimization for continued success",
  },
]
