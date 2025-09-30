"use client"

import Image from "next/image"

export default function WhatsAppButton() {
  const phoneNumber = "+2349066414474"
  const prefilledMessage = encodeURIComponent("Hello, I got your number from Omarconsults.ng and I am interested in..")
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white rounded-full p-2 sm:p-3 shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
        alt="WhatsApp"
        width={32}
        height={32}
        className="w-6 h-6 sm:w-8 sm:h-8 invert"
      />
    </a>
  )
}
