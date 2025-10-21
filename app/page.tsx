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
  Sparkles,
  Zap,
  Target,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CampaignsSection } from "@/components/campaigns-section"
import "./styles/animations.css"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-16 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-6"
            >
              <Badge className="px-4 py-2 text-xs sm:text-sm bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Technology That Transforms Business
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight"
            >
              We work for your{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                profit
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-10 px-2 sm:px-4 leading-relaxed max-w-3xl mx-auto"
            >
              We specialize in AI solutions, custom software development, and comprehensive technology solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4"
            >
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/booking" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-2 border-white hover:bg-white hover:text-black w-full sm:w-auto bg-transparent text-sm sm:text-base transition-all"
                >
                  Book Consultation
                </Button>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">300+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">98%</div>
                <div className="text-xs sm:text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400">Support Available</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ y }}
            className="relative max-w-5xl mx-auto px-4"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/design-mode/undraw-online-resume-qyys-2.png"
                alt="Technology Team Collaboration"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/60 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#020817] via-background to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 px-4 py-2 text-xs sm:text-sm bg-primary/10 text-primary border-primary/20">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Our Expertise
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to drive your business forward
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Campaigns Section */}
      <CampaignsSection />

      {/* Industries Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#020817] via-[#1a1f2e] to-[#020817] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float-medium"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float-fast"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-float-slow"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 px-4 py-2 text-xs sm:text-sm bg-white/10 text-white border-white/20">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Our Reach
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                Industries We Serve
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Delivering innovative solutions across various sectors
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.name} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#020817] via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1"
            >
              <div>
                <Badge className="mb-4 px-4 py-2 text-xs sm:text-sm">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Who We Are
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  About Omar Consults
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    We are a forward-thinking technology consulting firm specialized in Software Development, Digital
                    Marketing, Artificial Intelligence (AI) Solutions, and Digital Transformation.
                  </p>
                </div>

                <div className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    We believe that every business, regardless of size, deserves access to world-class technology
                    solutions that drive growth, efficiency, and innovation. Our team of experts combines deep technical
                    knowledge with strategic business insight to deliver results that matter.
                  </p>
                </div>

                <div className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    Our mission is to empower businesses by delivering cutting-edge solutions that address unique
                    challenges, enhance operational efficiency, and foster innovation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 p-4 sm:p-6 rounded-xl border border-primary/20">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-primary">5+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-primary/10 p-4 sm:p-6 rounded-xl border border-blue-500/20">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-blue-400">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  src="/images/design-mode/software-engineer-roadmap-e1736084062499.jpg"
                  alt="Omar Consults Team"
                  width={600}
                  height={400}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Floating achievement cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white dark:bg-card p-4 sm:p-6 rounded-2xl shadow-2xl border border-border max-w-[200px] sm:max-w-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">Innovation First</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Cutting-edge</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white dark:bg-card p-4 sm:p-6 rounded-2xl shadow-2xl border border-border max-w-[200px] sm:max-w-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#1a1f2e] to-[#0a101f] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary relative z-10 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">Quality Assured</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Proven results</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#020817] via-[#0a0f1e] to-[#020817] relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 px-4 py-2 text-xs sm:text-sm bg-white/10 text-white border-white/20">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Our Partners
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                Trusted Clients Around The World
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400">
                We're proud to work with innovative companies across various industries
              </p>
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* First Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 mb-8 sm:mb-12 md:mb-16">
              {[
                { src: "/images/clients/jaan-logo.png", alt: "JAAN" },
                { src: "/images/clients/city-center-blog.png", alt: "City Center Blog" },
                { src: "/images/clients/apollo-models-new.png", alt: "Apollo Models" },
              ].map((client, index) => (
                <motion.div
                  key={client.alt}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center transition-all duration-300 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative bg-white dark:bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-primary/30 transition-all duration-300 w-full h-full flex items-center justify-center">
                    <img
                      src={client.src || "/placeholder.svg"}
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24">
              {[
                { src: "/images/clients/gida-drinks.png", alt: "GIDA Drinks" },
                { src: "/images/clients/carochi-clean.png", alt: "Carochi Foods and Beverages" },
                { src: "/images/clients/pollo-24-new.png", alt: "Pollo 24 Trading Company" },
              ].map((client, index) => (
                <motion.div
                  key={client.alt}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center transition-all duration-300 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative bg-white dark:bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-primary/30 transition-all duration-300 w-full h-full flex items-center justify-center">
                    <img
                      src={client.src || "/placeholder.svg"}
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 px-4 py-2 text-xs sm:text-sm bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Let's Get Started
            </Badge>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our technology solutions can help you achieve your business goals
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all group"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary text-sm sm:text-base transition-all"
                >
                  View Our Services
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base">No Commitment</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base">Quick Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Service Card Component
function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/30 transition-all duration-300 border border-border hover:border-primary/50 h-full shadow-lg hover:shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

        <div className="relative z-10">
          <div className="mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
            </div>
          </div>

          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {service.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start text-xs sm:text-sm">
                <ArrowRight className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>

          <Link href="/services">
            <Button variant="ghost" className="group/btn hover:bg-primary/10 transition-all text-xs sm:text-sm w-full">
              Learn More
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// Industry Card Component
function IndustryCard({ industry, index }: { industry: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="relative p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#0a101f]/60 to-[#0a101f]/30 border border-gray-800/50 backdrop-blur-sm hover:bg-[#0a101f]/80 transition-all duration-300 h-full hover:border-primary/50 shadow-lg hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

        <div className="relative z-10">
          <div className="mb-3 sm:mb-4 md:mb-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#1a1f2e] to-[#0a101f] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <industry.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary relative z-10 group-hover:text-white transition-colors" />
            </div>
          </div>

          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 lg:mb-3 text-white group-hover:text-primary transition-colors">
            {industry.name}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors leading-tight">
            {industry.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// Services data - now includes 5 services (showing only 4 on homepage)
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
