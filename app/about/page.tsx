"use client"

import { Users, Award, Target, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
// Removed NavigationMenu imports as it's now in Header component

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header is now in app/layout.tsx */}

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">About Omar Consults</h1>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Empowering businesses with innovative technology solutions since our inception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Omar Consults was founded with a simple yet powerful vision: to bridge the gap between cutting-edge
                technology and business success. We recognized that many businesses struggle to leverage technology
                effectively, not because they lack ambition, but because they need the right guidance and expertise.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                Starting as a small consulting firm we&#39;ve grown into a trusted partner for businesses across Nigeria and beyond. Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to our clients&#39; success.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                Today, we're proud to be at the forefront of digital transformation, helping businesses harness the
                power of AI, cloud computing, and modern software development to achieve their goals.
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
                  src="/images/design-mode/software-engineer-roadmap-e1736084062499.jpg"
                  alt="Omar Consults Team"
                  width={600}
                  height={400}
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Foundation</h2>
            <p className="text-base md:text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foundation.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 sm:p-8 rounded-2xl border text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-base md:text-lg text-gray-300">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Why Choose Omar Consults?</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              What sets us apart in the technology consulting landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 sm:p-6 bg-card rounded-lg border"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <advantage.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{advantage.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 sm:mb-8">
              Let's discuss how we can help transform your business with technology
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Book Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Contact Us
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

const foundation = [
  {
    title: "Our Mission",
    description:
      "To empower businesses by delivering cutting-edge technology solutions that address unique challenges, enhance operational efficiency, and foster innovation.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To be the leading technology consulting firm in Africa, recognized for our expertise, innovation, and commitment to client success.",
    icon: Award,
  },
  {
    title: "Our Values",
    description:
      "Excellence, integrity, innovation, and client-centricity guide every decision we make and every solution we deliver.",
    icon: Heart,
  },
]

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
]

const advantages = [
  {
    title: "Expert Team",
    description: "Our team consists of certified professionals with extensive experience in their respective fields.",
    icon: Users,
  },
  {
    title: "Proven Track Record",
    description: "We have successfully delivered over 500 projects across various industries and business sizes.",
    icon: Award,
  },
  {
    title: "Client-Centric Approach",
    description: "We prioritize understanding your unique needs and delivering solutions that exceed expectations.",
    icon: Heart,
  },
  {
    title: "Cutting-Edge Technology",
    description: "We stay ahead of technology trends to provide you with the most innovative and effective solutions.",
    icon: Target,
  },
]
