"use client"

import React from "react"

import { useState } from "react"
import { Mail, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section id="newsletter-section" className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Stay in the Loop
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Subscribe to our newsletter and never miss an update on news, events, contests, and community highlights.
          </p>
          
          {isSubscribed ? (
            <div className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-secondary/20 p-4 text-secondary">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 sm:w-80"
                required
              />
              <Button type="submit" size="lg" className="h-12">
                Subscribe Now
              </Button>
            </form>
          )}
          
          <p className="mt-4 text-sm text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
