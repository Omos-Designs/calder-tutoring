"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Send, CheckCircle2, MapPin, Calendar } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to send")

      setSubmitted(true) // shows the Thank You card
      // Optionally reset formData here
      // setFormData({ firstName:"", lastName:"", email:"", phone:"", company:"", projectType:"", timeline:"", message:"" })
    } catch (err) {
      console.error(err)
      alert("Sorry, something went wrong sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-2">
                  <a
                    href="mailto:calder_jon@yahoo.com"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    calder_jon@yahoo.com
                  </a>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Online Sessions Worldwide via Google Meet</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

            <Card className="mt-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Schedule Directly</h3>
                  <p className="text-muted-foreground mb-4">
                    Skip the back-and-forth and book your free first session directly using my calendar.
                  </p>
                  <Button 
                    onClick={() => window.open("https://calendly.com/joncalder-caldertutoring/30min", "_blank")}
                    className="w-full"
                    data-testid="button-schedule-contact"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    View Available Times
                  </Button>
                </CardContent>
              </Card>

            <Card className="mt-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Response Time</h3>
                  <p className="text-muted-foreground">
                    I typically respond to all inquiries within 24 hours. For urgent matters, 
                    please schedule a meeting and email me directly.
                  </p>
                </CardContent>
              </Card>

          </div>

          {/* Right column: Form OR Thank-you */}
          {!submitted ? (
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Tutoring Subject *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => handleInputChange("subject", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Tutoring Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="calculus">Calculus</SelectItem>
                        <SelectItem value="geometry">Geometry</SelectItem>
                        <SelectItem value="pre-calc">Pre-Calculus</SelectItem>
                        <SelectItem value="algebra">Algebra</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Relevant Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Do you have a big test coming up? A specific topic you need help with? Let me know so I can prepare!"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-dashed">
              <CardHeader className="text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
                <CardTitle>Thank you!</CardTitle>
                <CardDescription>
                  Someone from Matter Analytics will be reaching out soon.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center" aria-live="polite">
                <p className="text-muted-foreground">
                  We’ve received your inquiry. If you’d like to send another,{" "}
                  <button
                    className="underline underline-offset-4 hover:opacity-80"
                    onClick={() => {
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        subject: "",
                        message: "",
                      })
                      setSubmitted(false)
                    }}
                  >
                    click here to submit a new request
                  </button>.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <div id="contact"className="min-h-screen bg-background">
      <main>
        <div className="bg-card py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get In Touch</h1>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ready to start your math journey? Send me a message or schedule a free first session to see how I can help you succeed.
            </p>
          </div>
        </div>
        <ContactForm />  
      </main>
    </div>
  )
}
