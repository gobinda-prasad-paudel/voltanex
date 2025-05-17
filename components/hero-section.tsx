"use client"

import type React from "react"

import { siteConfig } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import CircuitAnimation from "@/components/circuit-animation"
import ScrollIndicator from "@/components/scroll-indicator"

export default function HeroSection() {
  const handleScrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 z-0">
        <CircuitAnimation />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:ml-12" // Added margin on desktop
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium"
            >
              Innovating the Future
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Pioneering <span className="text-blue-600">Embedded Systems</span> &{" "}
              <span className="text-blue-600">AI Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {siteConfig.description}. We blend cutting-edge hardware with intelligent software to create solutions
              that shape tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleScrollToSection("projects")}>
                Explore Our Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                onClick={handleScrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            {/* This is a placeholder for a 3D or complex illustration that would be here */}
            <div className="w-full h-[500px] relative rounded-lg overflow-hidden">
              {/* The circuit animation is the background */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetId="about" />
    </section>
  )
}
