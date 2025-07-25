"use client"

import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  ChevronDown,
  ArrowUpRight,
  Brain,
  Code,
  Cloud,
  TrendingUp,
  Building2,
  ShoppingCart,
  Heart,
  Briefcase,
  GraduationCap,
  Car,
  Gamepad2,
  Utensils,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
// Removed NavigationMenu imports as it's now in Header component
import "./styles/animations.css"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  return (
    <div ref={containerRef}>
      {/* Header is now in app/layout.tsx */}

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6"
            >
              We work for your profit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-4"
            >
              We specialize in AI solutions, custom software development, and comprehensive technology solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
            >
              <Link href="/services">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto">
                  Explore Our Services
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
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <Image
              src="https://i.ibb.co/5gc10p3f/undraw-online-resume-qyys-2.png"
              alt="Technology Team Collaboration"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <ChevronDown className="w-6 h-6 text-white animate-bounce mx-auto" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-base md:text-lg text-muted-foreground"></p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-lg bg-card hover:bg-card/80 transition-all border"
              >
                <div className="mb-4 sm:mb-6">
                  <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/services">
                  <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-[#020817] via-[#1a1f2e] to-[#020817] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float-medium"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float-fast"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-float-slow"></div>

          {/* Animated Grid Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse-slow"></div>
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="border-r border-primary/10 animate-fade-in-out"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Moving Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5 animate-gradient-x"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text">Industries We Serve</h2>
            <p className="text-lg text-gray-400">Delivering innovative solutions across various sectors</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 sm:p-8 rounded-2xl bg-[#0a101f]/40 border border-gray-800/50 backdrop-blur-sm hover:bg-[#0a101f]/60 transition-all duration-300">
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1a1f2e] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <industry.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8 bg-card p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">About Omar Consults</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                We are a forward-thinking technology consulting firm specialized in Software Development, Digital
                Marketing, Artificial Intelligence (AI) Solutions, and Digital Transformation.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                We believe that every business, regardless of size, deserves access to world-class technology solutions
                that drive growth, efficiency, and innovation. Our team of experts combines deep technical knowledge
                with strategic business insight to deliver results that matter.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Our mission is to empower businesses by delivering cutting-edge solutions that address unique
                challenges, enhance operational efficiency, and foster innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://i.ibb.co/G399Vvj7/software-engineer-roadmap-e1736084062499.jpg"
                  alt="Omar Consults Team"
                  width={600}
                  height={400}
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-white dark:bg-card p-4 sm:p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Innovation First</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Cutting-edge solutions</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white dark:bg-card p-4 sm:p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Quality Assured</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Proven results</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
              Trusted Clients Around The World
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              We're proud to work with innovative companies across various industries
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* First Row */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 mb-10 md:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img src="/images/clients/jaan-logo.png" alt="JAAN" className="max-w-full max-h-full object-contain" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/images/clients/city-center-blog.png"
                  alt="City Center Blog"
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/images/clients/apollo-models-new.png"
                  alt="Apollo Models"
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/images/clients/gida-drinks.png"
                  alt="GIDA Drinks"
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/images/clients/carochi-clean.png"
                  alt="Carochi Foods and Beverages"
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/images/clients/pollo-24-new.png"
                  alt="Pollo 24 Trading Company"
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Let's discuss how our technology solutions can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer is now in app/layout.tsx */}
    </div>
  )
}

// Services data
const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Transform your business with cutting-edge AI solutions tailored to your specific needs.",
    icon: Brain,
    features: [
      "AI Readiness Assessment",
      "Custom AI Strategy Development",
      "Implementation Roadmap",
      "ROI Analysis & Projections",
    ],
  },
  {
    title: "Custom Software Development",
    description: "Build scalable and efficient software solutions that drive your business forward.",
    icon: Code,
    features: [
      "Web & Mobile Applications",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "Legacy System Modernization",
    ],
  },
  {
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing for enhanced scalability, security, and performance.",
    icon: Cloud,
    features: [
      "Cloud Migration Services",
      "Infrastructure Optimization",
      "Cloud Security Implementation",
      "24/7 Monitoring & Support",
    ],
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence and reach your target audience with data-driven marketing strategies.",
    icon: TrendingUp,
    features: [
      "SEO & SEM Optimization",
      "Social Media Marketing",
      "Content Strategy & Creation",
      "Analytics & Performance Reporting",
    ],
  },
]

// Industries data
const industries = [
  {
    name: "Technology",
    description: "Innovative solutions for tech companies and startups",
    icon: Building2,
  },
  {
    name: "E-commerce",
    description: "Digital transformation for online retail businesses",
    icon: ShoppingCart,
  },
  {
    name: "Healthcare",
    description: "Secure and compliant technology solutions for healthcare providers",
    icon: Heart,
  },
  {
    name: "Finance",
    description: "Robust financial technology solutions and consulting",
    icon: Briefcase,
  },
  {
    name: "Education",
    description: "EdTech solutions for modern learning environments",
    icon: GraduationCap,
  },
  {
    name: "Automotive",
    description: "Connected vehicle and mobility solutions",
    icon: Car,
  },
  {
    name: "Entertainment",
    description: "Digital platforms and content management systems",
    icon: Gamepad2,
  },
  {
    name: "Food & Beverage",
    description: "Restaurant management and food delivery solutions",
    icon: Utensils,
  },
]
