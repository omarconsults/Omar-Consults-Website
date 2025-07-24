import { NextResponse } from "next/server"

// In-memory storage for demonstration purposes.
// In a real application, this would be replaced with a database.
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

// Initialize with some dummy data for testing
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

// GET /api/bookings - Fetch all bookings
export async function GET() {
  try {
    console.log("API Route: Fetching all bookings.")
    // In a real app, you'd fetch from your database here
    return NextResponse.json(bookings, { status: 200 })
  } catch (error) {
    console.error("API Route: Error fetching bookings:", error)
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
  }
}

// POST /api/bookings - Create a new booking
export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = (formData.get("company") as string) || ""
    const phone = (formData.get("phone") as string) || ""
    const service = formData.get("service") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const message = (formData.get("message") as string) || ""

    // Basic validation
    if (!name || !email || !service || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const newBooking: Booking = {
      id: crypto.randomUUID(), // Generate a unique ID
      name,
      email,
      company,
      phone,
      service,
      date,
      time,
      message,
      status: "pending", // Default status for new bookings
      created_at: new Date().toISOString(),
    }

    bookings.push(newBooking) // Add to in-memory array
    console.log("API Route: New booking created:", newBooking)

    return NextResponse.json(
      {
        success: true,
        message: "Your consultation request has been received!",
        booking: newBooking,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("API Route: Error creating booking:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
