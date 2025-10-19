"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { caseStudies, getCaseStudyById } from "@/lib/case-studies-data"
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, Calendar, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useMemo } from "react"

export default function CaseStudyDetailPage() {
  const params = useParams()
  const id = params.id as string

  const study = useMemo(() => getCaseStudyById(id), [id])

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/case-studies">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Link href="/case-studies" className="inline-flex">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-4 px-4 py-2 text-xs sm:text-sm bg-primary/10 text-primary border-primary/20">
              {study.category}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {study.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">{study.description}</p>

            {/* Key Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Client</div>
                      <div className="font-semibold">{study.client}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                      <div className="font-semibold">{study.timeline}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Services</div>
                      <div className="font-semibold text-sm">{study.services.length} Services</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden h-64 sm:h-96"
            >
              <Image src={study.image || "/placeholder.svg"} alt={study.client} fill className="object-cover" />
            </motion.div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-red-500">■</span> The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{study.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-green-500">■</span> Our Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{study.solution}</p>
              </motion.div>
            </div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" /> Results Achieved
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {study.results.map((result: any, index: number) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardContent className="pt-6 text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{result.value}</div>
                      <div className="text-sm text-muted-foreground">{result.metric}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8 sm:p-12"
            >
              <div className="flex items-start gap-4 sm:gap-6 mb-6">
                <Image
                  src={study.testimonial.image || "/placeholder-user.jpg"}
                  alt={study.testimonial.author}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-lg">{study.testimonial.author}</h3>
                  <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{study.testimonial.company}</p>
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl text-foreground italic">"{study.testimonial.quote}"</blockquote>
            </motion.div>

            {/* Services & Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-4">Services Used</h3>
                <div className="flex flex-wrap gap-2">
                  {study.services.map((service: string, i: number) => (
                    <Badge key={i} className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag: string, i: number) => (
                    <Badge key={i} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready for Your Success Story?</h2>
              <p className="text-white/90 mb-8">Let's discuss how we can help transform your business</p>

              <Link href="/booking">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Related Case Studies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">Related Case Studies</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies
                  .filter((s) => s.id !== study.id && s.category === study.category)
                  .slice(0, 2)
                  .map((relatedStudy) => (
                    <Link key={relatedStudy.id} href={`/case-studies/${relatedStudy.id}`}>
                      <Card className="group hover:shadow-xl transition-all cursor-pointer h-full">
                        <CardContent className="pt-6">
                          <h3 className="font-bold group-hover:text-primary transition-colors mb-2">
                            {relatedStudy.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{relatedStudy.shortDescription}</p>
                          <div className="mt-4 flex items-center text-primary text-sm font-medium">
                            Read More <ArrowRight className="ml-2 w-4 h-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
