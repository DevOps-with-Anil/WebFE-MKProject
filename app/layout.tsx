import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Coran Challenge - News, Contests & Videos',
  description: 'Your destination for Quran learning news, engaging contests, and inspiring video content.',
  generator: 'v0.app',
  icons: {
    icon: [ ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Coran Challenge - News, Contests & Videos',
    description: 'Your destination for Quran learning news, engaging contests, and inspiring video content.',
    images: ['/images/challenges-thumbnail.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coran Challenge - News, Contests & Videos',
    description: 'Your destination for Quran learning news, engaging contests, and inspiring video content.',
    images: ['/images/challenges-thumbnail.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
