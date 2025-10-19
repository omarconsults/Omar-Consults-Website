"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-white px-2 py-1 rounded">
              <Image src="/images/omar-logo.png" alt="Omar Consults" width={140} height={40} className="h-8 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/services">
                    <div>
                      <div className="font-semibold">Web and Software Development</div>
                      <p className="text-xs text-muted-foreground">Custom web and mobile applications</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services">
                    <div>
                      <div className="font-semibold">AI Solutions</div>
                      <p className="text-xs text-muted-foreground">Machine learning & automation</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services">
                    <div>
                      <div className="font-semibold">Cloud Solutions</div>
                      <p className="text-xs text-muted-foreground">Infrastructure & migration</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services">
                    <div>
                      <div className="font-semibold">Business & Tax Advisory</div>
                      <p className="text-xs text-muted-foreground">Tax compliance & financial management</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services">
                    <div>
                      <div className="font-semibold">Digital Marketing</div>
                      <p className="text-xs text-muted-foreground">SEO, content & campaigns</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>

            <Link href="/tools-resources" className="text-sm font-medium transition-colors hover:text-primary">
              Tools & Resources
            </Link>

            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>

            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/booking">
              <Button className="bg-primary hover:bg-primary/90">Book a Call</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/tools-resources"
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tools & Resources
            </Link>
            <Link
              href="/blog"
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90">Book a Call</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
