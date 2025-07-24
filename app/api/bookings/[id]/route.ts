import { NextResponse } from "next/server"

// Re-declare in-memory storage for consistency across API routes
// In a real application, this would be a shared database connection
interface Booking {
  id: string
  name: string
  email: string
  company?: string
  phone: string
  service: string
  date: string
  time: string
  message?: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  created_at: string
}

// This is a simplified representation. In a real app, you'd import your database client.
// For this demo, we'll assume `bookings` is accessible or fetched from a mock DB.
// In a real scenario, you'd likely have a database client instance here.
// For the purpose of this isolated API route, we'll simulate finding the booking.
// NOTE: This in-memory array is NOT shared between requests or API routes in a real Next.js app.
// It's purely for demonstrating the structure.
const bookings: Booking[] = [
  {
    id: "bkg_1",
    name: "John Doe",
    email: "john.doe@example.com",
    company: "Acme Corp",
    phone: "123-456-7890",
    service: "ai-consulting",
    date: "2025-08-01",
    time: "10:00",
    message: "Interested in AI strategy for supply chain optimization.",
    status: "pending",
    created_at: new Date().toISOString(),
  },
  {
    id: "bkg_2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    company: "",
    phone: "098-765-4321",
    service: "software-development",
    date: "2025-07-28",
    time: "14:00",
    message: "Need a custom CRM solution.",
    status: "confirmed",
    created_at: new Date(Date.now() - 86400000).toISOString(), // Yesterday
  },
]

// PATCH /api/bookings/[id] - Update booking status
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const bookingId = params.id
    const { status: newStatus } = await request.json()

    if (!newStatus || !["pending", "confirmed", "completed", "cancelled"].includes(newStatus)) {
      return NextResponse.json({ error: "Invalid status provided" }, { status: 400 })
    }

    // In a real app, you'd update your database here
    const bookingIndex = bookings.findIndex((b) => b.id === bookingId)

    if (bookingIndex === -1) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 })
    }

    bookings[bookingIndex] = { ...bookings[bookingIndex], status: newStatus }
    const updatedBooking = bookings[bookingIndex]

    console.log(`API Route: Booking ${bookingId} status updated to ${newStatus}.`)
    return NextResponse.json({ success: true, booking: updatedBooking }, { status: 200 })
  } catch (error) {
    console.error("API Route: Error updating booking status:", error)
    return NextResponse.json({ error: "Failed to update booking status" }, { status: 500 })
  }
}
