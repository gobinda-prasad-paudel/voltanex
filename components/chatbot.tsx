"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X, Minimize2, Maximize2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

// Simple predefined responses for the chatbot
const predefinedResponses = [
  "Thanks for your question! Voltanex specializes in embedded systems, electronics, and AI solutions.",
  "We'd be happy to discuss how our expertise can help with your project. Please provide more details.",
  "Our team has extensive experience in developing custom hardware and software solutions.",
  "Voltanex was founded with the mission to create innovative solutions that bridge hardware and AI.",
  "We work with clients across various industries including healthcare, automotive, and smart home technology.",
  "Our research team is constantly exploring new technologies to stay at the cutting edge.",
  "Feel free to contact us through our contact form for more detailed information about our services.",
  "We offer consultation services to help you determine the best approach for your technical challenges.",
  "Voltanex has successfully delivered projects ranging from IoT devices to complex AI systems.",
  "We're passionate about creating technology that makes a positive impact on society.",
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I'm the Voltanex Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // // Make the chatbot visible by default on larger screens
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (window.innerWidth > 768) {
  //       setIsOpen(true)
  //     }
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Get a random predefined response
      const botResponse = predefinedResponses[Math.floor(Math.random() * predefinedResponses.length)]

      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error sending message to chatbot:", error)

      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "500px",
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Card className="w-80 md:w-96 overflow-hidden shadow-xl border-blue-200 dark:border-blue-800">
              {/* Chat header */}
              <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2 border-2 border-white/20">
                    <AvatarFallback className="bg-blue-700 text-white">VB</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">Voltanex Assistant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-white hover:bg-blue-700"
                    onClick={toggleMinimize}
                  >
                    {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-white hover:bg-blue-700"
                    onClick={toggleChat}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Chat messages */}
              {!isMinimized && (
                <div className="flex flex-col h-[400px]">
                  <div className="flex-1 p-3 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.sender === "bot" && (
                          <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                            <AvatarFallback className="bg-blue-600 text-white">VB</AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.sender === "user"
                              ? "bg-blue-600 text-white"
                              : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                        {message.sender === "user" && (
                          <Avatar className="h-8 w-8 ml-2 mt-1 flex-shrink-0">
                            <AvatarFallback className="bg-green-600 text-white">ME</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start mb-3">
                        <Avatar className="h-8 w-8 mr-2 mt-1">
                          <AvatarFallback className="bg-blue-600 text-white">VB</AvatarFallback>
                        </Avatar>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex space-x-2">
                            <div
                              className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                              style={{ animationDelay: "600ms" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Chat input */}
                  <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <div className="flex items-center">
                      <Input
                        type="text"
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="flex-1 mr-2"
                        disabled={isLoading}
                      />
                      <Button
                        size="icon"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isLoading}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat button - increased z-index and size for better visibility */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="shadow-2xl">
        <Button
          onClick={toggleChat}
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      </motion.div>
    </div>
  )
}
