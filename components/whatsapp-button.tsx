"use client"

import Image from "next/image"
// Removed: import Link from "next/link"

export default function WhatsAppButton() {
  const phoneNumber = "+2349066414474" // Your WhatsApp number
  const prefilledMessage = encodeURIComponent("Hello, I got your number from Omarconsults.ng and I am interested in..")
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`

  return (
    <a // Changed from Link to a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] p-3 shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      <Image src="https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000" alt="WhatsApp" width={32} height={32} className="h-8 w-8" />
    </a> // Changed from Link to a
  )
}
