"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { navigationLinks, siteConfig } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href")
    if (href && href.startsWith("/#")) {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        })
        if (isMenuOpen) setIsMenuOpen(false)
      }
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center">
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={link.href.startsWith("/#") ? handleLinkClick : undefined}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button className="bg-blue-600 hover:bg-blue-700 ml-2">
              <Link href="/#contact" onClick={handleLinkClick}>
                Get in Touch
              </Link>
            </Button>
          </nav>
        )}

        {/* Mobile Menu Button and Theme Toggle */}
        {isMobile && (
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="flex flex-col py-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={link.href.startsWith("/#") ? handleLinkClick : undefined}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 py-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>
                <Link href="/#contact" onClick={handleLinkClick}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
