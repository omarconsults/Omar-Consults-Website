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
    const body = await request.json()

    // Create booking object
    const booking = {
      id: Date.now().toString(),
      ...body,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    // Store booking
    bookings.push(booking)

    // Send email notifications
    try {
      // 1. Send notification to admin
      await resend.emails.send({
        from: "Omar Consults <contact@omarconsults.ng>",
        to: "mcgrin1@gmail.com",
        subject: `New Booking: ${body.service}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Booking Notification</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 40px 0;">
                    <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                       Header 
                      <tr>
                        <td style="padding: 40px 40px 20px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                          <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">New Booking Received! 🎉</h1>
                        </td>
                      </tr>
                      
                       Content 
                      <tr>
                        <td style="padding: 40px;">
                          <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.5;">
                            You have received a new consultation booking. Here are the details:
                          </p>
                          
                           Booking Details 
                          <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                            <tr>
                              <td style="padding: 15px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
                                <strong style="color: #667eea;">Booking ID:</strong>
                              </td>
                              <td style="padding: 15px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
                                ${booking.id}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px; background-color: #ffffff; border-bottom: 1px solid #e9ecef;">
                                <strong style="color: #667eea;">Client Name:</strong>
                              </td>
                              <td style="padding: 15px; background-color: #ffffff; border-bottom: 1px solid #e9ecef;">
                                ${body.name}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
                                <strong style="color: #667eea;">Email:</strong>
                              </td>
                              <td style="padding: 15px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
                                <a href="mailto:${body.email}" style="color: #667eea; text-decoration: none;">${body.email}</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px; background-color: #ffffff; border-bottom: 1px solid #e9ecef;">
                                <strong style="color: #667eea;">Phone:</strong>
                              </td>
                              <td style="padding: 15px; background-color: #ffffff; border-bottom: 1px solid #e9ecef;">
                                <a href="tel:${body.phone}" style="color: #667eea; text-decoration: none;">${body.phone}</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
                                <strong style="color: #667eea;">Company:</strong>
                              </td>
                              <td style="padding: 15px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
                                ${body.company || "Not provided"}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px; background-color: #ffffff; border-bottom: 1px solid #e9ecef;">
                                <strong style="color: #667eea;">Service:</strong>
                              </td>
                              <td style="padding: 15px; background-color: #ffffff; border-bottom: 1px solid #e9ecef;">
                                ${body.service}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
                                <strong style="color: #667eea;">Preferred Date:</strong>
                              </td>
                              <td style="padding: 15px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
                                ${new Date(body.preferredDate).toLocaleDateString("en-US", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px; background-color: #ffffff; border-bottom: 1px solid #e9ecef;">
                                <strong style="color: #667eea;">Preferred Time:</strong>
                              </td>
                              <td style="padding: 15px; background-color: #ffffff; border-bottom: 1px solid #e9ecef;">
                                ${body.preferredTime}
                              </td>
                            </tr>
                          </table>
                          
                           Message 
                          ${
                            body.message
                              ? `
                          <div style="margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #667eea; border-radius: 4px;">
                            <strong style="color: #667eea; display: block; margin-bottom: 10px;">Message:</strong>
                            <p style="margin: 0; color: #333333; line-height: 1.6;">
                              ${body.message}
                            </p>
                          </div>
                          `
                              : ""
                          }
                          
                           Action Button 
                          <table role="presentation" style="margin: 30px 0;">
                            <tr>
                              <td style="border-radius: 6px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                                <a href="mailto:${body.email}" style="display: inline-block; padding: 14px 30px; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 16px;">
                                  Reply to Client
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                       Footer 
                      <tr>
                        <td style="padding: 30px 40px; background-color: #f8f9fa; border-top: 1px solid #e9ecef;">
                          <p style="margin: 0; color: #6c757d; font-size: 14px; text-align: center;">
                            This is an automated notification from your website booking system.
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
        from: "Omar Consults <contact@omarconsults.ng>",
        to: body.email,
        subject: "Booking Confirmation - Omar Business Consulting",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Booking Confirmation</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 40px 0;">
                    <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                       Header 
                      <tr>
                        <td style="padding: 40px 40px 20px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                          <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Booking Confirmed! ✓</h1>
                        </td>
                      </tr>
                      
                       Content 
                      <tr>
                        <td style="padding: 40px;">
                          <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.5;">
                            Dear ${body.name},
                          </p>
                          
                          <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.5;">
                            Thank you for booking a consultation with Omar Business Consulting. We have received your request and will get back to you shortly.
                          </p>
                          
                           Booking Summary 
                          <div style="margin: 30px 0; padding: 25px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef;">
                            <h2 style="margin: 0 0 20px 0; color: #667eea; font-size: 20px;">Your Booking Details</h2>
                            
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                              <tr>
                                <td style="padding: 10px 0; color: #6c757d; font-size: 14px;">
                                  <strong>Service:</strong>
                                </td>
                                <td style="padding: 10px 0; color: #333333; font-size: 14px; text-align: right;">
                                  ${body.service}
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 10px 0; color: #6c757d; font-size: 14px; border-top: 1px solid #e9ecef;">
                                  <strong>Preferred Date:</strong>
                                </td>
                                <td style="padding: 10px 0; color: #333333; font-size: 14px; text-align: right; border-top: 1px solid #e9ecef;">
                                  ${new Date(body.preferredDate).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 10px 0; color: #6c757d; font-size: 14px; border-top: 1px solid #e9ecef;">
                                  <strong>Preferred Time:</strong>
                                </td>
                                <td style="padding: 10px 0; color: #333333; font-size: 14px; text-align: right; border-top: 1px solid #e9ecef;">
                                  ${body.preferredTime}
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 10px 0; color: #6c757d; font-size: 14px; border-top: 1px solid #e9ecef;">
                                  <strong>Booking ID:</strong>
                                </td>
                                <td style="padding: 10px 0; color: #333333; font-size: 14px; text-align: right; border-top: 1px solid #e9ecef;">
                                  #${booking.id}
                                </td>
                              </tr>
                            </table>
                          </div>
                          
                           What's Next 
                          <div style="margin: 30px 0; padding: 20px; background-color: #e7f3ff; border-left: 4px solid #667eea; border-radius: 4px;">
                            <h3 style="margin: 0 0 15px 0; color: #667eea; font-size: 18px;">What happens next?</h3>
                            <ul style="margin: 0; padding-left: 20px; color: #333333; line-height: 1.8;">
                              <li>Our team will review your booking request</li>
                              <li>We'll contact you within 24 hours to confirm the appointment</li>
                              <li>You'll receive a calendar invite with meeting details</li>
                            </ul>
                          </div>
                          
                           Contact Info 
                          <div style="margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-radius: 8px; text-align: center;">
                            <p style="margin: 0 0 15px 0; color: #333333; font-size: 14px;">
                              <strong>Need to make changes or have questions?</strong>
                            </p>
                            <p style="margin: 0 0 15px 0; color: #6c757d; font-size: 14px;">
                              Email: <a href="mailto:contact@omarconsults.ng" style="color: #667eea; text-decoration: none;">contact@omarconsults.ng</a>
                            </p>
                            <table role="presentation" style="margin: 0 auto;">
                              <tr>
                                <td style="border-radius: 6px; background-color: #25D366;">
                                  <a href="https://wa.me/2348138835633" style="display: inline-block; padding: 12px 25px; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 14px;">
                                    💬 Chat on WhatsApp
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                      
                       Footer 
                      <tr>
                        <td style="padding: 30px 40px; background-color: #f8f9fa; border-top: 1px solid #e9ecef; text-align: center;">
                          <p style="margin: 0 0 10px 0; color: #333333; font-size: 16px; font-weight: bold;">
                            Omar Business Consulting
                          </p>
                          <p style="margin: 0; color: #6c757d; font-size: 14px;">
                            Your partner in business growth and strategy
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
        message: "Booking created successfully",
        booking,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Booking creation failed:", error)
    return NextResponse.json({ success: false, message: "Failed to create booking" }, { status: 500 })
  }
}
