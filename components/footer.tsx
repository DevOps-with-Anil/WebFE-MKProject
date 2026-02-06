import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail } from "lucide-react"
import { PartnersSection } from "@/components/home/partners-section"

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = {
  explore: [
    { name: "News", href: "/news" },
    { name: "Contests", href: "/contests" },
    { name: "Videos", href: "/videos" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Owner's Voice", href: "/owners-voice" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "DMCA / Copyright", href: "/dmca" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "X (Twitter)", icon: XIcon, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-muted/30">
      <PartnersSection />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Coran Challenge" 
                width={200} 
                height={60} 
                className="h-14 w-auto object-contain mix-blend-multiply"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Your destination for Quran learning news, engaging contests, and inspiring video content. 
              Join thousands of learners on their journey to master the Quran.
            </p>
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold text-foreground">Subscribe to Newsletter</h4>
              <form className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="max-w-[240px]"
                />
                <Button type="submit" size="sm" className="bg-gradient-to-r from-primary to-primary/90">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            © 2026 Coran Challenge. Developed by{" "}
            <span className="font-semibold text-foreground">IMPETROSYS</span>
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
