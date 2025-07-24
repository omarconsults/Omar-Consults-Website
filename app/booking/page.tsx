"use client"

import { useState } from "react"
import { Calendar, Clock, CheckCircle } from "lucide-react"
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

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState("")
  // const [isSubmitting, setIsSubmitting] = useState(false) // Remove this line
  // const [submitResult, setSubmitResult] = useState<{ // Remove this line
  //   success: boolean
  //   message?: string
  //   error?: string
  // } | null>(null) // Remove this line

  // Remove the entire handleSubmit function block
  // const handleSubmit = async (formData: FormData) => {
  //   setIsSubmitting(true)
  //   setSubmitResult(null)
  //
  //   // Add selected service to form data
  //   formData.set("service", selectedService)
  //
  //   try {
  //     // Send data to your custom backend API route
  //     const response = await fetch("/api/bookings", {
  //       method: "POST",
  //       body: formData,
  //     })
  //
  //     const result = await response.json()
  //
  //     if (response.ok && result.success) {
  //       setSubmitResult({ success: true, message: result.message })
  //       // Reset form on success
  //       const form = document.getElementById("booking-form") as HTMLFormElement
  //       form?.reset()
  //       setSelectedService("")
  //     } else {
  //       setSubmitResult({ success: false, error: result.error || "Failed to submit booking." })
  //     }
  //   } catch (error) {
  //     console.error("Client-side error submitting booking:", error)
  //     setSubmitResult({
  //       success: false,
  //       error: "An unexpected error occurred. Please try again.",
  //     })
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

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
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
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
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Book Consultation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/services" className="hidden sm:block">
              <Button size="sm" className="text-xs md:text-sm">
                Our Services
              </Button>
            </Link>
            <Link href="/services" className="sm:hidden">
              <Button size="sm" className="text-xs px-2">
                Services
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
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">Book a Consultation</h1>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Schedule a free consultation to discuss your project and explore how we can help your business grow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              {/* Booking Benefits */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6 sm:space-y-8"
                >
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">What to Expect</h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                      Our consultation process is designed to understand your needs and provide valuable insights.
                    </p>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg mb-1">{benefit.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/50 p-5 sm:p-6 rounded-lg">
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Free Consultation</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                      Our initial consultation is completely free with no obligations.
                    </p>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Duration: 30-60 minutes</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-card p-6 sm:p-8 rounded-2xl border"
                >
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Schedule Your Consultation</h2>

                  {/* Success/Error Messages */}
                  {/* Remove this entire block:
                  {submitResult && (
                    <div
                      className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg flex items-start space-x-3 ${
                        submitResult.success
                          ? "bg-green-50 border border-green-200 text-green-800"
                          : "bg-red-50 border border-red-200 text-red-800"
                      }`}
                    >
                      {submitResult.success ? (
                        <CheckCircle className="w-5 h-5 mt-0.5 text-green-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 mt-0.5 text-red-600" />
                      )}
                      <div>
                        <p className="font-medium text-sm sm:text-base">
                          {submitResult.success ? "Success!" : "Error"}
                        </p>
                        <p className="text-xs sm:text-sm">{submitResult.message || submitResult.error}</p>
                      </div>
                    </div>
                  )}
                  */}

                  <form id="booking-form" name="booking-form" data-netlify="true" className="space-y-4 sm:space-y-6">
                    {/* Hidden Netlify honeypot field for spam prevention */}
                    <input type="hidden" name="form-name" value="booking-form" />
                    <p className="hidden">
                      <label>
                        Don’t fill this out if you’re human: <input name="bot-field" />
                      </label>
                    </p>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-2 sm:mb-3">
                        What service are you interested in? *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setSelectedService(service.id)}
                            className={`p-3 sm:p-4 border rounded-lg text-left transition-colors ${
                              selectedService === service.id
                                ? "border-primary bg-primary/5"
                                : "border-input hover:border-primary/50"
                            }`}
                          >
                            <div className="font-medium text-sm sm:text-base">{service.name}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">{service.description}</div>
                          </button>
                        ))}
                      </div>
                      {!selectedService && <p className="text-xs text-red-500 mt-2">Please select a service</p>}
                    </div>

                    {/* Date Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm sm:text-base"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm sm:text-base"
                          required
                        >
                          <option value="">Select a time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm sm:text-base"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm sm:text-base"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm sm:text-base"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm sm:text-base"
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Tell us about your project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none text-sm sm:text-base"
                        placeholder="Briefly describe your project, goals, and any specific requirements..."
                      />
                    </div>

                    {/* Hidden input to capture selected service for Netlify */}
                    <input type="hidden" name="service" value={selectedService} />

                    <Button type="submit" size="lg" className="w-full" disabled={!selectedService}>
                      Schedule Consultation
                      <Calendar className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs sm:text-sm text-muted-foreground text-center">
                      By scheduling a consultation, you agree to our terms of service and privacy policy.
                    </p>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Common questions about our consultation process
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-5 sm:p-6 rounded-lg border"
                >
                  <h3 className="font-semibold text-base sm:text-lg mb-2">{faq.question}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
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
                <li className="text-sm text-muted-foreground">28, Ugbor GRA, Benin City, Nigeria</li>
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
    id: "ai-consulting",
    name: "AI Strategy & Consulting",
    description: "Transform your business with AI solutions",
  },
  {
    id: "software-development",
    name: "Custom Software Development",
    description: "Build scalable applications",
  },
  {
    id: "cloud-solutions",
    name: "Cloud Solutions",
    description: "Migrate and optimize in the cloud",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description: "Grow your online presence",
  },
]

const benefits = [
  {
    title: "Expert Analysis",
    description: "Get insights from experienced technology consultants",
  },
  {
    title: "Custom Solutions",
    description: "Receive recommendations tailored to your specific needs",
  },
  {
    title: "Clear Roadmap",
    description: "Walk away with a clear plan for your technology initiatives",
  },
  {
    title: "No Commitment",
    description: "Free consultation with no strings attached",
  },
]

const faqs = [
  {
    question: "How long is the consultation?",
    answer:
      "Our consultations typically last 30-60 minutes, depending on the complexity of your project and questions.",
  },
  {
    question: "Is the consultation really free?",
    answer: "Yes, our initial consultation is completely free with no hidden costs or obligations.",
  },
  {
    question: "What should I prepare for the consultation?",
    answer:
      "Come prepared with information about your current technology setup, business goals, and any specific challenges you're facing.",
  },
  {
    question: "Can we do the consultation remotely?",
    answer: "We offer both in-person and virtual consultations via video call to accommodate your preferences.",
  },
  {
    question: "What happens after the consultation?",
    answer:
      "We'll provide you with a summary of our discussion and recommendations. If you decide to move forward, we'll create a detailed proposal.",
  },
]
