"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { caseStudies } from "@/lib/case-studies-data"
import { ArrowRight, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CaseStudiesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="mb-4 px-4 py-2 text-xs sm:text-sm bg-primary/10 text-primary border-primary/20">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Success Stories
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Case Studies & Success Stories
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Discover how we've helped businesses transform, scale, and achieve remarkable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={ref} className="py-12 sm:py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-primary via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Ready for Your Success Story?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10">
              Let's work together to transform your business and achieve remarkable results
            </p>

            <Link href="/booking">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 group">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function CaseStudyCard({ study, index, isInView }: { study: any; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/case-studies/${study.id}`}>
        <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 h-full overflow-hidden cursor-pointer">
          {/* Image Section */}
          <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
            <Image
              src={study.image || "/placeholder.svg"}
              alt={study.client}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary/90 text-white border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                {study.category}
              </Badge>
            </div>
          </div>

          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors">
              {study.title}
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">{study.shortDescription}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-4">
              {study.results.slice(0, 2).map((result: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-primary mb-1">{result.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{result.metric}</div>
                </div>
              ))}
            </div>

            {/* Testimonial Preview */}
            <div className="bg-muted/50 p-4 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic mb-3">
                "{study.testimonial.quote.substring(0, 80)}..."
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={study.testimonial.image || "/placeholder-user.jpg"}
                  alt={study.testimonial.author}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-xs">
                  <div className="font-semibold">{study.testimonial.author}</div>
                  <div className="text-muted-foreground">{study.testimonial.role}</div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {study.tags.slice(0, 3).map((tag: string, i: number) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* CTA */}
            <Button variant="ghost" className="w-full group/btn">
              Read Full Case Study
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
