"use client"

import { useEffect } from "react"

export default function ChatbotInitializer() {
  useEffect(() => {
    // Force a re-render of the chatbot component
    const chatbotContainer = document.getElementById("chatbot-container")
    if (chatbotContainer) {
      const currentDisplay = window.getComputedStyle(chatbotContainer).display
      chatbotContainer.style.display = "none"
      setTimeout(() => {
        chatbotContainer.style.display = currentDisplay
      }, 100)
    }

    // Log to confirm the initializer is running
    console.log("Chatbot initializer running")
  }, [])

  return null
}
