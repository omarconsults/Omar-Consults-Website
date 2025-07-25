"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null) // This ref is not used for scrollYProgress in this component, but kept for consistency if needed.
  // const { scrollYProgress } = useScroll({ // Removed as it's not directly used for header animation here
  //   target: containerRef,
  //   offset: ["start start", "end start"],
  // })

  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null // Or a loading spinner
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
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
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">AI Strategy & Consulting</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Transform your business with cutting-edge AI solutions tailored to your needs
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Custom Software Development</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Build scalable and efficient software solutions
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Cloud Solutions</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Scalable and secure cloud infrastructure
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Digital Marketing</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Data-driven marketing strategies for growth
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a
                    href="https://bizcore.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    BizCore
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-2">
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
      </div>
    </header>
  )
}
