import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="inline-block bg-white px-3 py-1.5 rounded-lg shadow-sm mx-auto sm:mx-0">
              <Image
                src="/images/omar-logo.png"
                alt="Omar Consults"
                width={160}
                height={50}
                className="h-6 sm:h-8 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Empowering businesses with innovative technology solutions
            </p>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              <Link
                href="https://web.facebook.com/omarbfconsults"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 bg-muted/50 hover:bg-primary rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </Link>
              <Link
                href="http://x.com/Omarconsults"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 bg-muted/50 hover:bg-primary rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Twitter/X"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/omarconsults/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 bg-muted/50 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 11.7-29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/omarconsults"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 bg-muted/50 hover:bg-[#0077b5] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/tools-resources"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Tools & Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Business & Tax Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li className="text-xs sm:text-sm text-muted-foreground">Benin City, Nigeria</li>
              <li>
                <Link
                  href="mailto:contact@omarconsults.ng"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  contact@omarconsults.ng
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+2349066414474"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +234 906 641 4474
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t text-center text-xs sm:text-sm text-muted-foreground space-y-2">
  <p>&copy; {new Date().getFullYear()} Omar Consults. All rights reserved.</p>
  <p>POWERED BY <a href="https://www.omarconsults.ng/about" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">INNOVATION</a></p>
</div>
      </div>
    </footer>
  )
}
