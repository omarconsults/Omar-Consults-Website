import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Omar Consults - Technology Solutions & Digital Transformation",
    template: "%s | Omar Consults",
  },
  description:
    "Leading technology consulting firm specializing in AI solutions, custom software development, cloud services, and digital marketing. Transform your business with cutting-edge technology.",
  keywords: [
    "technology consulting",
    "AI solutions",
    "software development",
    "cloud solutions",
    "digital marketing",
    "Nigeria",
    "business transformation",
  ],
  authors: [{ name: "Omar Consults" }],
  creator: "Omar Consults",
  publisher: "Omar Consults",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://omarconsults.ng"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omarconsults.ng",
    title: "Omar Consults - Technology Solutions & Digital Transformation",
    description:
      "Transform your business with cutting-edge AI solutions, custom software development, and comprehensive technology services.",
    siteName: "Omar Consults",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Consults - Technology Solutions",
    description: "Transform your business with cutting-edge technology solutions",
    creator: "@Omarconsults",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JCL6F3187L" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JCL6F3187L');
            `,
          }}
        />

        {/* Brevo Tracker */}
        <Script src="https://cdn.brevo.com/js/sdk-loader.js" async strategy="afterInteractive" />
        <Script
          id="brevo-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.Brevo = window.Brevo || [];
              Brevo.push([
                "init",
                {
                  client_key: "iti035a7xx1t9qwuqdb2d6kh"
                }
              ]);
            `,
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
