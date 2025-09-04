"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message?: string
    error?: string
  } | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsSubmitting(true)
    setSubmitResult(null)

    const formData = new FormData(event.currentTarget)
    formData.set("service", selectedService)

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitResult({ success: true, message: result.message })
        const form = document.getElementById("booking-form") as HTMLFormElement
        form?.reset()
        setSelectedService("")
      } else {
        setSubmitResult({ success: false, error: result.error || "Failed to submit booking." })
      }
    } catch (error) {
      console.error("Client-side error submitting booking:", error)
      setSubmitResult({
        success: false,
        error: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Book a Consultation
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 px-2">
              Schedule a free consultation to discuss your project and explore how we can help your business grow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 sm:py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              {/* Booking Benefits */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4 sm:space-y-6 md:space-y-8"
                >
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">What to Expect</h2>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                      Our consultation process is designed to understand your needs and provide valuable insights.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1">{benefit.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/50 p-3 sm:p-4 md:p-6 rounded-lg">
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Free Consultation</h3>
                    <p className="text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                      Our initial consultation is completely free with no obligations.
                    </p>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>Duration: 30-60 minutes</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-card p-4 sm:p-6 md:p-8 rounded-2xl border"
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">
                    Schedule Your Consultation
                  </h2>

                  {/* Success/Error Messages */}
                  {submitResult && (
                    <div
                      className={`mb-3 sm:mb-4 md:mb-6 p-3 sm:p-4 rounded-lg flex items-start space-x-2 sm:space-x-3 ${
                        submitResult.success
                          ? "bg-green-50 border border-green-200 text-green-800"
                          : "bg-red-50 border border-red-200 text-red-800"
                      }`}
                    >
                      {submitResult.success ? (
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-green-600 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-red-600 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium text-xs sm:text-sm md:text-base">
                          {submitResult.success ? "Success!" : "Error"}
                        </p>
                        <p className="text-xs sm:text-sm">{submitResult.message || submitResult.error}</p>
                      </div>
                    </div>
                  )}

                  <form id="booking-form" onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                        What service are you interested in? *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setSelectedService(service.id)}
                            className={`p-2 sm:p-3 md:p-4 border rounded-lg text-left transition-colors ${
                              selectedService === service.id
                                ? "border-primary bg-primary/5"
                                : "border-input hover:border-primary/50"
                            }`}
                          >
                            <div className="font-medium text-xs sm:text-sm md:text-base">{service.name}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground leading-tight">
                              {service.description}
                            </div>
                          </button>
                        ))}
                      </div>
                      {!selectedService && <p className="text-xs text-red-500 mt-1 sm:mt-2">Please select a service</p>}
                    </div>

                    {/* Date Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                      <div>
                        <label htmlFor="date" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-xs sm:text-sm md:text-base"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          className="w-full px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-xs sm:text-sm md:text-base"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-xs sm:text-sm md:text-base"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-xs sm:text-sm md:text-base"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                      <div>
                        <label htmlFor="company" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-xs sm:text-sm md:text-base"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-xs sm:text-sm md:text-base"
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                        Tell us about your project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none text-xs sm:text-sm md:text-base"
                        placeholder="Briefly describe your project, goals, and any specific requirements..."
                      />
                    </div>

                    {/* Hidden input to capture selected service */}
                    <input type="hidden" name="service" value={selectedService} />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-sm sm:text-base"
                      disabled={!selectedService || isSubmitting}
                    >
                      {isSubmitting ? "Scheduling..." : "Schedule Consultation"}
                      <Calendar className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>

                    <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
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
      <section className="py-8 sm:py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Common questions about our consultation process
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-3 sm:p-4 md:p-6 rounded-lg border"
                >
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{faq.question}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
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
