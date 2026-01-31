"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, Newspaper, Trophy, Video, Info, MessageSquare, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
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
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: MessageSquare },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-primary to-primary/90 py-2 text-center text-sm text-primary-foreground">
        <span className="font-medium">New Contest Live!</span>{" "}
        <Link href="/contests" className="underline underline-offset-2 hover:no-underline">
          Join Surah Al-Baqarah Challenge
        </Link>
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
          <Button variant="ghost" size="sm">
            <User className="mr-2 h-4 w-4" />
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
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
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90">
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
