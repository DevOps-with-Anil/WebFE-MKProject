"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { Menu, Newspaper, Trophy, Video, Info, MessageSquare, User, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { AuthDialog } from "@/components/auth-dialog"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navItems = [
  { name: "News", href: "/news", icon: Newspaper },
  { name: "Contests", href: "/contests", icon: Trophy },
  { name: "Videos", href: "/videos", icon: Video },
  { name: "About", href: "/about", icon: FolderOpen },
  { name: "Contact", href: "/contact", icon: MessageSquare },
]

const flashNews = [
  { text: "New Contest Live! Join Surah Al-Baqarah Challenge", href: "/contests/1" },
  { text: "Quran Recitation Competition - Register Now", href: "/contests/2" },
  { text: "Youth Tajweed Excellence Award - 8 Days Left", href: "/contests/3" },
  { text: "Community Leaders Announce New Green Initiative", href: "/news/1" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentFlash, setCurrentFlash] = useState(0)

  const nextFlash = useCallback(() => {
    setCurrentFlash((prev) => (prev + 1) % flashNews.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextFlash, 4000)
    return () => clearInterval(interval)
  }, [nextFlash])

  const scrollToNewsletter = () => {
    const el = document.getElementById("newsletter-section")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Flash News Ticker */}
      <div className="bg-gradient-to-r from-primary to-primary/90 py-1.5 text-center text-sm text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <span className="shrink-0 rounded bg-primary-foreground/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wide">
            Flash
          </span>
          <div className="relative h-5 flex-1 overflow-hidden">
            {flashNews.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 hover:underline underline-offset-2 ${
                  index === currentFlash
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Coran Challenge" 
            width={200} 
            height={60} 
            className="h-14 w-auto object-contain mix-blend-multiply"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <AuthDialog>
            <Button variant="ghost" size="sm">
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </AuthDialog>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            onClick={scrollToNewsletter}
          >
            Subscribe
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-4 pt-8">
                <div className="mb-4">
                  <Image 
                    src="/logo.png" 
                    alt="Coran Challenge" 
                    width={180} 
                    height={55} 
                    className="h-14 w-auto object-contain mix-blend-multiply"
                  />
                </div>
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  )
                })}
                <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                  <AuthDialog>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <User className="mr-2 h-4 w-4" />
                      Sign In
                    </Button>
                  </AuthDialog>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary/90"
                    onClick={() => {
                      setIsOpen(false)
                      setTimeout(scrollToNewsletter, 300)
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
