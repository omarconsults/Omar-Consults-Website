"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { campaigns } from "@/lib/campaigns-data"
import { ArrowRight, TrendingUp, Target, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CampaignsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 px-4 py-2 text-xs sm:text-sm bg-primary/10 text-primary border-primary/20">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Active Campaigns
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Our Marketing Campaigns
            </h2>
          </motion.div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {campaigns.map((campaign, index) => (
            <CampaignCard key={campaign.id} campaign={campaign} index={index} isInView={isInView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link href="/case-studies">
            <Button variant="outline" className="mr-4 bg-transparent">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/booking">
            <Button size="lg" className="group">
              Join Our Next Campaign
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function CampaignCard({ campaign, index, isInView }: { campaign: any; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 h-full overflow-hidden">
        {/* Campaign Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <Image
            src={campaign.image || "/placeholder.svg"}
            alt={campaign.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-500/90 text-white border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              {campaign.status === "active" ? "Active" : campaign.status === "upcoming" ? "Coming Soon" : "Completed"}
            </Badge>
          </div>

          {/* Category */}
          <div className="absolute bottom-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-black">
              {campaign.category}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors">
            {campaign.title}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">{campaign.description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {campaign.metrics.map((metric: any, i: number) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <TrendingUp className="w-4 h-4 text-primary mr-1" />
                  <div className="text-lg sm:text-xl font-bold text-primary">{metric.value}</div>
                </div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {campaign.tags.map((tag: string, i: number) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2 flex-col sm:flex-row">
            {campaign.caseStudyId && (
              <Link href={`/case-studies/${campaign.caseStudyId}`} className="flex-1">
                <Button variant="outline" className="w-full group/btn bg-transparent">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
            <Link href="/booking" className="flex-1">
              <Button className="w-full group/btn">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
