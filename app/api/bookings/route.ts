import { type NextRequest, NextResponse } from "next/server"

// Mock database - replace with actual database
const bookings = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    service: "Business Strategy Consultation",
    date: "2024-02-15",
    time: "10:00",
    message: "Looking to expand my retail business and need strategic guidance.",
    status: "pending",
    createdAt: "2024-01-20T10:00:00Z",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    phone: "+1 (555) 987-6543",
    service: "Financial Planning",
    date: "2024-02-18",
    time: "14:30",
    message: "Need help with financial restructuring for my startup.",
    status: "confirmed",
    createdAt: "2024-01-22T14:30:00Z",
  },
]

export async function GET() {
  try {
    return NextResponse.json(bookings)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newBooking = {
      id: Date.now().toString(),
      ...body,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    bookings.push(newBooking)

    return NextResponse.json(newBooking, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
