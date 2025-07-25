"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function WhatsAppButton() {
  const phoneNumber = "2348033000000" // Replace with Omar's actual WhatsApp number
  const prefilledMessage = encodeURIComponent("Hello, I got your number from Omarconsults.ng and I am interested in..")
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`

  return (
    <Button asChild className="fixed bottom-4 right-4 z-50 rounded-full p-3 shadow-lg" variant="default" size="icon">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Image
          src="/whatsapp-logo.svg" // Assuming you have a WhatsApp logo SVG in your public folder
          alt="WhatsApp"
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </Button>
  )
}
