import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm w-fit">
              <Image src="/images/omar-logo.png" alt="Omar Consults" width={150} height={50} className="h-10 w-auto" />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Empowering businesses with innovative technology solutions
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Link
                href="https://web.facebook.com/omarbfconsults"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted/50 p-2.5 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://x.com/omarbfconsults"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted/50 p-2.5 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/omarconsultsng/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted/50 p-2.5 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/omar-consults/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted/50 p-2.5 hover:bg-[#0077b5] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-xs sm:text-sm text-muted-foreground">Email: info@omarconsults.ng</li>
              <li className="text-xs sm:text-sm text-muted-foreground">Phone: +234 XXX XXX XXXX</li>
              <li className="text-xs sm:text-sm text-muted-foreground">Location: Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Omar Consults. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
