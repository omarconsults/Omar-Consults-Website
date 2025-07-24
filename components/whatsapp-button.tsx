"use client" // Added this directive

import Link from "next/link"
import { MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function WhatsAppButton() {
  // Replace with your actual WhatsApp number, including country code
  const whatsappNumber = "2349066414474"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              size="icon"
              className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1DA851] focus-visible:ring-[#25D366]"
            >
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <MessageCircle className="h-8 w-8" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Chat on WhatsApp</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
