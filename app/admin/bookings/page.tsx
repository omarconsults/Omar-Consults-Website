"use client"

import type React from "react"
import { AlertCircle } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { Calendar, Clock, Mail, Phone, Building, MessageSquare, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

// Simple password protection
const ADMIN_PASSWORD = "Ubbh47&0" // Change this to a secure password

export default function AdminBookingsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password")
    }
  }

  const loadBookings = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/bookings")
      const result = await response.json()

      if (!response.ok) {
        console.error("Error fetching bookings:", result.error)
        setError(`Failed to load bookings: ${result.error}`)
      } else {
        setBookings(result || [])
      }
    } catch (err) {
      console.error("Unexpected error fetching bookings:", err)
      setError("An unexpected error occurred while fetching bookings.")
    } finally {
      setLoading(false)
    }
  }, [])

  const handleUpdateStatus = async (bookingId: string, currentStatus: string) => {
    const newStatus = currentStatus === "pending" ? "confirmed" : "pending" // Toggle status for example
    const confirmUpdate = window.confirm(`Are you sure you want to change status to '${newStatus}' for this booking?`)
    if (!confirmUpdate) return

    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })
      const result = await response.json()

      if (response.ok && result.success) {
        loadBookings() // Refetch all bookings to ensure consistency
      } else {
        alert(result.error || "Failed to update booking status.")
      }
    } catch (err) {
      console.error("Error calling update booking status API:", err)
      alert("An error occurred while trying to update the booking status.")
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadBookings()
    }
  }, [isAuthenticated, loadBookings])

  const getServiceName = (serviceId: string) => {
    const services: Record<string, string> = {
      "ai-consulting": "AI Strategy & Consulting",
      "software-development": "Custom Software Development",
      "cloud-solutions": "Cloud Solutions",
      "digital-marketing": "Digital Marketing",
    }
    return services[serviceId] || serviceId
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full mx-auto p-6 sm:p-8 bg-card rounded-lg border">
          <div className="text-center mb-6 sm:mb-8">
            <Image
              src="/images/omar-logo.png"
              alt="Omar Consults"
              width={200}
              height={70}
              className="h-10 sm:h-12 w-auto mx-auto mb-3 sm:mb-4"
            />
            <h1 className="text-xl sm:text-2xl font-bold">Admin Access</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Enter password to view bookings</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm sm:text-base"
                placeholder="Enter admin password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Access Dashboard
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Image
                src="/images/omar-logo.png"
                alt="Omar Consults"
                width={160}
                height={50}
                className="h-7 sm:h-8 w-auto"
              />
              <h1 className="text-lg sm:text-xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  Back to Website
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={() => setIsAuthenticated(false)}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Consultation Bookings</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Manage and track consultation requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-card p-5 sm:p-6 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
                <p className="text-xl sm:text-2xl font-bold">{bookings.length}</p>
              </div>
              <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
          </div>
          <div className="bg-card p-5 sm:p-6 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-xl sm:text-2xl font-bold">{bookings.filter((b) => b.status === "pending").length}</p>
              </div>
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-card p-5 sm:p-6 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Confirmed</p>
                <p className="text-xl sm:text-2xl font-bold">
                  {bookings.filter((b) => b.status === "confirmed").length}
                </p>
              </div>
              <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
            </div>
          </div>
          <div className="bg-card p-5 sm:p-6 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                {/* This would require more complex date filtering from your custom backend */}
                <p className="text-xl sm:text-2xl font-bold">N/A</p>
              </div>
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Bookings List */}
        {loading ? (
          <div className="text-center py-8 sm:py-12">
            <p className="text-muted-foreground">Loading bookings...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8 sm:py-12 text-red-500">
            <AlertCircle className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <p>{error}</p>
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <Calendar className="w-14 h-14 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold mb-2">No bookings yet</h3>
            <p className="text-sm sm:text-base text-muted-foreground">New consultation requests will appear here</p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-card p-5 sm:p-6 rounded-lg border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">{booking.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Submitted {new Date(booking.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium mt-2 sm:mt-0 ${getStatusColor(booking.status)}`}
                  >
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{booking.email}</span>
                  </div>
                  {booking.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{booking.phone}</span>
                    </div>
                  )}
                  {booking.company && (
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{booking.company}</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Service</p>
                    <p className="text-sm">{getServiceName(booking.service)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Date</p>
                    <p className="text-sm">{new Date(booking.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Time</p>
                    <p className="text-sm">{booking.time}</p>
                  </div>
                </div>

                {booking.message && (
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-start space-x-2">
                      <MessageSquare className="w-4 h-4 text-muted-foreground mt-1" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Message</p>
                        <p className="text-sm mt-1">{booking.message}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <Button size="sm" variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Client
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Client
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleUpdateStatus(booking.id, booking.status)}
                    disabled={booking.status === "confirmed"} // Disable if already confirmed
                  >
                    {booking.status === "pending" ? "Mark as Confirmed" : "Confirmed"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
