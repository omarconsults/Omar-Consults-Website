"use client"

import Image from "next/image"

export default function WhatsAppButton() {
  // Changed to default export
  const phoneNumber = "+2349066414474" // Your WhatsApp number
  const prefilledMessage = encodeURIComponent("Hello, I got your number from Omarconsults.ng and I am interested in..")
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <Image src="/images/whatsapp-logo.png" alt="WhatsApp Logo" width={32} height={32} className="w-8 h-8" />
    </a>
  )
}
