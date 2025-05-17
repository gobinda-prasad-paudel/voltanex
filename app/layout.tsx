import type React from "react"
import { siteConfig } from "@/lib/data"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <div id="chatbot-container">
              <Chatbot />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
