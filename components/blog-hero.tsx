"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog-data"

interface BlogHeroProps {
  post: BlogPost
}

export function BlogHero({ post }: BlogHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-[500px] rounded-2xl overflow-hidden mb-12"
    >
      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">{post.category}</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <p className="text-lg text-gray-200 mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <Button size="lg" className="group">
                Read Full Article
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
