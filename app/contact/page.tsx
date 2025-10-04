import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:contact@omarconsults.ng"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          contact@omarconsults.ng
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+2349066414474"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +234 906 641-4474
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">GRA Benin City, Edo, Nigeria</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM GMT
                          <br />
                          Saturday - Sunday: By Appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ready to Get Started?</CardTitle>
                  <CardDescription>Schedule a consultation or reach out directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link
                    href="/booking"
                    className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-lg px-6 py-4 text-center font-semibold"
                  >
                    Book a Consultation
                  </Link>
                  <a
                    href="mailto:contact@omarconsults.ng"
                    className="block w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors rounded-lg px-6 py-4 text-center font-semibold"
                  >
                    Send an Email
                  </a>
                  <a
                    href="https://wa.me/2349066414474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 text-white hover:bg-green-700 transition-colors rounded-lg px-6 py-4 text-center font-semibold"
                  >
                    WhatsApp Us
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">1.</span>
                      <span>We'll respond to your inquiry within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">2.</span>
                      <span>Schedule a free initial consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">3.</span>
                      <span>Discuss your needs and receive a custom proposal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">4.</span>
                      <span>Begin your transformation journey with us</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How quickly can we get started?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We can typically schedule an initial consultation within 1-2 business days and begin project work
                    within a week, depending on your specific needs and our current capacity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is your pricing structure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our pricing is customized based on your specific needs and project scope. We offer both
                    project-based and retainer options. Contact us for a detailed quote.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you work with businesses of all sizes?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We work with startups, small businesses, and enterprises. Our solutions are tailored to fit
                    your size, budget, and growth goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
