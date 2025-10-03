import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_Mt5dYGam_52CU1wDdAWFmWaBzwP6vYax1")

// In-memory storage for demo purposes
// In production, use a database
const bookings: any[] = []

export async function GET() {
  return NextResponse.json(bookings)
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const service = formData.get("service") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !service || !date || !time) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in all required fields",
        },
        { status: 400 },
      )
    }

    // Create booking object
    const booking = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "",
      company: company || "",
      service,
      preferredDate: date,
      preferredTime: time,
      message: message || "",
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    // Store booking
    bookings.push(booking)

    // Send email notifications
    try {
      // 1. Send notification to admin
      await resend.emails.send({
        from: "Omar Consults <bookings@omarconsults.ng>",
        to: "contact@omarconsults.ng",
        subject: `New Booking: ${service}`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <title>New Booking Notification</title>
              <!--[if mso]>
              <style type="text/css">
                body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
              </style>
              <![endif]-->
            </head>
            <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f7f8fa; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse; background-color: #f7f8fa;">
                <tr>
                  <td align="center" style="padding: 40px 20px;">
                    <!-- Main Container -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);">
                      
                      <!-- Header -->
                      <tr>
                        <td style="padding: 48px 40px 32px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); text-align: center;">
                          <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                            🎉 New Booking
                          </h1>
                          <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                            You have a new consultation request
                          </p>
                        </td>
                      </tr>
                      
                      <!-- Content -->
                      <tr>
                        <td style="padding: 40px;">
                          <!-- Intro -->
                          <p style="margin: 0 0 32px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                            A new client has requested a consultation. Review the details below and respond promptly.
                          </p>
                          
                          <!-- Booking Details Card -->
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse; margin: 0 0 32px 0; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                            <tr>
                              <td colspan="2" style="padding: 16px 20px; background-color: #f9fafb; border-bottom: 2px solid #e5e7eb;">
                                <strong style="color: #111827; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Client Information</strong>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 16px 20px; width: 40%; color: #6b7280; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f3f4f6;">
                                Booking ID
                              </td>
                              <td style="padding: 16px 20px; color: #111827; font-size: 14px; border-bottom: 1px solid #f3f4f6;">
                                #${booking.id}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 16px 20px; color: #6b7280; font-size: 14px; font-weight: 600; background-color: #f9fafb; border-bottom: 1px solid #f3f4f6;">
                                Name
                              </td>
                              <td style="padding: 16px 20px; color: #111827; font-size: 14px; font-weight: 600; background-color: #f9fafb; border-bottom: 1px solid #f3f4f6;">
                                ${name}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 16px 20px; color: #6b7280; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f3f4f6;">
                                Email
                              </td>
                              <td style="padding: 16px 20px; color: #111827; font-size: 14px; border-bottom: 1px solid #f3f4f6;">
                                <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-weight: 500;">${email}</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 16px 20px; color: #6b7280; font-size: 14px; font-weight: 600; background-color: #f9fafb; border-bottom: 1px solid #f3f4f6;">
                                Phone
                              </td>
                              <td style="padding: 16px 20px; color: #111827; font-size: 14px; background-color: #f9fafb; border-bottom: 1px solid #f3f4f6;">
                                ${phone ? `<a href="tel:${phone}" style="color: #667eea; text-decoration: none; font-weight: 500;">${phone}</a>` : '<span style="color: #9ca3af;">Not provided</span>'}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 16px 20px; color: #6b7280; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f3f4f6;">
                                Company
                              </td>
                              <td style="padding: 16px 20px; color: #111827; font-size: 14px; border-bottom: 1px solid #f3f4f6;">
                                ${company || '<span style="color: #9ca3af;">Not provided</span>'}
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding: 16px 20px; background-color: #f9fafb; border-bottom: 2px solid #e5e7eb; border-top: 2px solid #e5e7eb;">
                                <strong style="color: #111827; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Appointment Details</strong>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 16px 20px; color: #6b7280; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f3f4f6;">
                                Service
                              </td>
                              <td style="padding: 16px 20px; color: #111827; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f3f4f6;">
                                ${service}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 16px 20px; color: #6b7280; font-size: 14px; font-weight: 600; background-color: #f9fafb; border-bottom: 1px solid #f3f4f6;">
                                Preferred Date
                              </td>
                              <td style="padding: 16px 20px; color: #111827; font-size: 14px; background-color: #f9fafb; border-bottom: 1px solid #f3f4f6;">
                                ${new Date(date).toLocaleDateString("en-US", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 16px 20px; color: #6b7280; font-size: 14px; font-weight: 600;">
                                Preferred Time
                              </td>
                              <td style="padding: 16px 20px; color: #111827; font-size: 14px;">
                                ${time}
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Message Section -->
                          ${
                            message
                              ? `
                          <div style="margin: 0 0 32px 0; padding: 24px; background: linear-gradient(to right, #f0f4ff, #faf5ff); border-left: 4px solid #667eea; border-radius: 8px;">
                            <p style="margin: 0 0 12px 0; color: #667eea; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                              Client Message
                            </p>
                            <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
                              ${message}
                            </p>
                          </div>
                          `
                              : ""
                          }
                          
                          <!-- Action Button -->
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                            <tr>
                              <td style="border-radius: 8px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);">
                                <a href="mailto:${email}?subject=Re: Booking Confirmation - ${service}" style="display: inline-block; padding: 16px 40px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 16px; letter-spacing: 0.3px;">
                                  Reply to Client →
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <!-- Footer -->
                      <tr>
                        <td style="padding: 32px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
                          <p style="margin: 0; color: #6b7280; font-size: 13px; line-height: 1.6;">
                            This is an automated notification from your booking system.<br>
                            <strong>Omar Consults</strong> • Abuja, Nigeria
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
      })

      // 2. Send confirmation to client
      await resend.emails.send({
        from: "Omar Consults <bookings@omarconsults.ng>",
        to: email,
        subject: "Booking Confirmation - Omar Business Consulting",
        html: `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <title>Booking Confirmation</title>
              <!--[if mso]>
              <style type="text/css">
                body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
              </style>
              <![endif]-->
            </head>
            <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f7f8fa; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse; background-color: #f7f8fa;">
                <tr>
                  <td align="center" style="padding: 40px 20px;">
                    <!-- Main Container -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);">
                      
                      <!-- Header -->
                      <tr>
                        <td style="padding: 48px 40px 32px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); text-align: center;">
                          <div style="width: 64px; height: 64px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin: 0 0 20px 0;">
                            <span style="font-size: 32px;">✓</span>
                          </div>
                          <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                            Booking Confirmed!
                          </h1>
                          <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                            We've received your consultation request
                          </p>
                        </td>
                      </tr>
                      
                      <!-- Content -->
                      <tr>
                        <td style="padding: 40px;">
                          <!-- Greeting -->
                          <p style="margin: 0 0 8px 0; color: #374151; font-size: 18px; font-weight: 600;">
                            Hello ${name},
                          </p>
                          
                          <p style="margin: 0 0 32px 0; color: #6b7280; font-size: 16px; line-height: 1.6;">
                            Thank you for choosing Omar Business Consulting. Your booking request has been successfully received, and our team will review it shortly.
                          </p>
                          
                          <!-- Booking Summary Card -->
                          <div style="margin: 0 0 32px 0; padding: 28px; background: linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%); border-radius: 12px; border: 1px solid #e0e7ff;">
                            <h2 style="margin: 0 0 24px 0; color: #667eea; font-size: 20px; font-weight: 700;">
                              Your Booking Summary
                            </h2>
                            
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
                              <tr>
                                <td style="padding: 14px 0; color: #6b7280; font-size: 14px; font-weight: 600; border-bottom: 1px solid rgba(102, 126, 234, 0.15);">
                                  Service
                                </td>
                                <td style="padding: 14px 0; color: #111827; font-size: 14px; font-weight: 600; text-align: right; border-bottom: 1px solid rgba(102, 126, 234, 0.15);">
                                  ${service}
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 14px 0; color: #6b7280; font-size: 14px; font-weight: 600; border-bottom: 1px solid rgba(102, 126, 234, 0.15);">
                                  Preferred Date
                                </td>
                                <td style="padding: 14px 0; color: #111827; font-size: 14px; text-align: right; border-bottom: 1px solid rgba(102, 126, 234, 0.15);">
                                  ${new Date(date).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 14px 0; color: #6b7280; font-size: 14px; font-weight: 600; border-bottom: 1px solid rgba(102, 126, 234, 0.15);">
                                  Preferred Time
                                </td>
                                <td style="padding: 14px 0; color: #111827; font-size: 14px; text-align: right; border-bottom: 1px solid rgba(102, 126, 234, 0.15);">
                                  ${time}
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 14px 0; color: #6b7280; font-size: 14px; font-weight: 600;">
                                  Booking Reference
                                </td>
                                <td style="padding: 14px 0; color: #111827; font-size: 14px; text-align: right; font-family: 'Courier New', monospace;">
                                  #${booking.id}
                                </td>
                              </tr>
                            </table>
                          </div>
                          
                          <!-- What's Next Section -->
                          <div style="margin: 0 0 32px 0; padding: 24px; background-color: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px;">
                            <h3 style="margin: 0 0 16px 0; color: #065f46; font-size: 18px; font-weight: 700;">
                              What Happens Next?
                            </h3>
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                              <tr>
                                <td style="padding: 10px 0; vertical-align: top;">
                                  <span style="display: inline-block; width: 24px; height: 24px; background-color: #10b981; color: white; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold; margin-right: 12px;">1</span>
                                </td>
                                <td style="padding: 10px 0; color: #065f46; font-size: 15px; line-height: 1.6;">
                                  Our team will review your request and check availability
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 10px 0; vertical-align: top;">
                                  <span style="display: inline-block; width: 24px; height: 24px; background-color: #10b981; color: white; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold; margin-right: 12px;">2</span>
                                </td>
                                <td style="padding: 10px 0; color: #065f46; font-size: 15px; line-height: 1.6;">
                                  You'll receive a confirmation call/email within 24 hours
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 10px 0; vertical-align: top;">
                                  <span style="display: inline-block; width: 24px; height: 24px; background-color: #10b981; color: white; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold; margin-right: 12px;">3</span>
                                </td>
                                <td style="padding: 10px 0; color: #065f46; font-size: 15px; line-height: 1.6;">
                                  We'll send you a calendar invite with meeting details
                                </td>
                              </tr>
                            </table>
                          </div>
                          
                          <!-- Contact Section -->
                          <div style="margin: 0 0 24px 0; padding: 28px; background-color: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb; text-align: center;">
                            <p style="margin: 0 0 20px 0; color: #111827; font-size: 16px; font-weight: 600;">
                              Need to Make Changes?
                            </p>
                            <p style="margin: 0 0 24px 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                              Contact us anytime if you need to reschedule or have questions
                            </p>
                            
                            <!-- Contact Buttons -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                              <tr>
                                <td style="padding: 0 8px;">
                                  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                      <td style="border-radius: 8px; background-color: #667eea;">
                                        <a href="mailto:contact@omarconsults.ng" style="display: inline-block; padding: 14px 24px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px;">
                                          📧 Email Us
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td style="padding: 0 8px;">
                                  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                      <td style="border-radius: 8px; background-color: #25D366;">
                                        <a href="https://wa.me/2348138835633" style="display: inline-block; padding: 14px 24px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px;">
                                          💬 WhatsApp
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </div>
                          
                          <!-- Signature -->
                          <p style="margin: 0; color: #6b7280; font-size: 15px; line-height: 1.6;">
                            We look forward to working with you!<br>
                            <strong style="color: #111827;">The Omar Consults Team</strong>
                          </p>
                        </td>
                      </tr>
                      
                      <!-- Footer -->
                      <tr>
                        <td style="padding: 32px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
                          <p style="margin: 0 0 12px 0; color: #111827; font-size: 16px; font-weight: 700;">
                            Omar Business Consulting
                          </p>
                          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
                            Your Partner in Business Growth & Strategy
                          </p>
                          <p style="margin: 0; color: #9ca3af; font-size: 13px;">
                            Abuja, Nigeria • <a href="https://omarconsults.ng" style="color: #667eea; text-decoration: none;">omarconsults.ng</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
      })
    } catch (emailError) {
      console.error("Email notification failed:", emailError)
      // Continue even if email fails - don't break the booking
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking submitted successfully! We'll contact you within 24 hours.",
        booking,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Booking creation failed:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit booking. Please try again.",
      },
      { status: 500 },
    )
  }
}
