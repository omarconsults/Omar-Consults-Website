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
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const booking = bookings.find((b) => b.id === params.id)

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 })
    }

    return NextResponse.json(booking)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch booking" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const bookingIndex = bookings.findIndex((b) => b.id === params.id)

    if (bookingIndex === -1) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 })
    }

    bookings[bookingIndex] = { ...bookings[bookingIndex], ...body }

    return NextResponse.json(bookings[bookingIndex])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update booking" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const bookingIndex = bookings.findIndex((b) => b.id === params.id)

    if (bookingIndex === -1) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 })
    }

    bookings.splice(bookingIndex, 1)

    return NextResponse.json({ message: "Booking deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete booking" }, { status: 500 })
  }
}
