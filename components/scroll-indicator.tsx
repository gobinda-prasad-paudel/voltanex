"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

interface ScrollIndicatorProps {
  targetId?: string
}

export default function ScrollIndicator({ targetId = "about" }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator after scrolling down a bit
      if (window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? [0, 10, 0] : 0,
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        opacity: { duration: 0.3 },
      }}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Scroll</span>
        <div className="w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm flex items-center justify-center border border-white/50 dark:border-gray-700/50 shadow-lg">
          <ChevronDown className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        </div>
      </div>
    </motion.div>
  )
}
