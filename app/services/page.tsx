"use client"

import { ArrowRight, CheckCircle, Brain, Code, Cloud, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/omar-logo.png"
                alt="Omar Consults"
                width={200}
                height={70}
                className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 transition-all duration-300 filter brightness-110 contrast-125"
                priority
              />
            </Link>
            <NavigationMenu>
              <NavigationMenuList className="flex-col sm:flex-row">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/booking" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Book Consultation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/booking" className="hidden sm:block">
              <Button size="sm" className="text-xs md:text-sm">
                Book Consultation
              </Button>
            </Link>
            <Link href="/booking" className="sm:hidden">
              <Button size="sm" className="text-xs px-2">
                Book
              </Button>
            </Link>
          </div>
        </div>
      </header>

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

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <Image
                src="/images/omar-logo.png"
                alt="Omar Consults"
                width={160}
                height={50}
                className="h-8 w-auto mx-auto md:mx-0 filter brightness-110"
              />
              <p className="text-sm text-muted-foreground">
                Empowering businesses with innovative technology solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">Benin City, Nigeria</li>
                <li>
                  <Link
                    href="mailto:contact@omarconsults.ng"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    contact@omarconsults.ng
                  </Link>
                </li>
                <li>
                  <Link href="tel:+2349066414474" className="text-sm text-muted-foreground hover:text-primary">
                    +234 906 641 4474
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Omar Consults. All rights reserved.</p>
          </div>
        </div>
      </footer>
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
