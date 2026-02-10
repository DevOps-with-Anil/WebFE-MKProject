"use client"

import React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Community Way", "Suite 100", "Community City, CC 12345"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["Main: (555) 123-4567", "Events: (555) 123-4568"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@communityhub.com", "events@communityhub.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon-Fri: 9:00 AM - 5:00 PM", "Sat: 10:00 AM - 2:00 PM"],
  },
]

const faqItems = [
  {
    question: "How do I submit news or event information?",
    answer: "You can submit news tips or event information through our contact form by selecting 'Submit News/Event' as the subject, or email us directly at news@communityhub.com.",
  },
  {
    question: "How can I participate in contests?",
    answer: "Visit our Contests page to see all active and upcoming contests. Each contest has specific entry requirements and submission forms.",
  },
  {
    question: "Do you accept volunteers?",
    answer: "Yes! We're always looking for volunteers. Please reach out through the contact form or attend one of our community events to learn more.",
  },
  {
    question: "How do I advertise with CommunityHub?",
    answer: "For advertising inquiries, please select 'Advertising/Partnership' in the contact form or email advertising@communityhub.com.",
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-8 md:py-10">
          <div className="container mx-auto px-4">
            <Badge variant="outline" className="mb-4">Contact</Badge>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Have a question, suggestion, or story to share? We would love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="border-b border-border bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <Card key={info.title} className="border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">{info.title}</h3>
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-8 md:py-10">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                        <CheckCircle2 className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground">Message Sent!</h3>
                      <p className="mt-2 text-muted-foreground">
                        Thank you for reaching out. We will get back to you within 1-2 business days.
                      </p>
                      <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input 
                              id="name" 
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="phone">Phone (Optional)</Label>
                            <Input 
                              id="phone" 
                              type="tel" 
                              placeholder="Your phone number"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="subject">Subject *</Label>
                            <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="news">Submit News/Event</SelectItem>
                                <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                                <SelectItem value="advertising">Advertising/Partnership</SelectItem>
                                <SelectItem value="feedback">Feedback/Suggestion</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="message">Message *</Label>
                          <Textarea 
                            id="message" 
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={6}
                            required
                          />
                        </div>
                        
                        <Button type="submit" className="w-full" size="lg">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Map Placeholder */}
              <div className="flex flex-col">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Find Us</h2>
                <Card className="flex-1 overflow-hidden border-0 shadow-lg">
                  <div className="flex h-full items-center justify-center bg-muted">
                    <div className="text-center p-8">
                      <MapPin className="mx-auto h-16 w-16 text-muted-foreground/30" />
                      <p className="mt-4 text-lg font-semibold text-muted-foreground">
                        123 Community Way
                      </p>
                      <p className="text-muted-foreground">
                        Community City, CC 12345
                      </p>
                      <Button variant="outline" className="mt-4 bg-transparent">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/30 py-10 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <Badge variant="outline" className="mb-4">FAQ</Badge>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger className="text-base font-semibold text-card-foreground hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
