"use client"

import type React from "react"

import { donationOptions } from "@/lib/data"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Lock } from "lucide-react"
import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { CardElement, useStripe, useElements, AddressElement } from "@stripe/react-stripe-js"
import { useToast } from "@/hooks/use-toast"

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder")

// Checkout Form Component
function CheckoutForm({ amount }: { amount: number }) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [message, setMessage] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    try {
      // In a real implementation, you would create a payment intent on your server
      // and then confirm it here. For this demo, we'll simulate a successful payment.

      // Validate the card element
      const cardElement = elements.getElement(CardElement)
      if (!cardElement) {
        throw new Error("Card element not found")
      }

      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Show success message
      toast({
        title: "Payment Successful!",
        description: `Thank you for your donation of $${amount.toFixed(2)}`,
      })

      setMessage("Thank you for your donation!")
    } catch (error) {
      console.error(error)
      setMessage("An error occurred while processing your payment. Please try again.")
      toast({
        title: "Payment Failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card Information</label>
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md p-3">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Billing Address</label>
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md p-3">
            <AddressElement
              options={{
                mode: "billing",
                fields: {
                  phone: "never",
                },
                validation: {
                  postal_code: {
                    required: "auto",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Lock className="w-4 h-4 mr-1" />
          Secure payment
        </div>
        <div className="font-semibold text-lg">${amount.toFixed(2)}</div>
      </div>

      {message && (
        <div className={`text-center font-medium ${message.includes("error") ? "text-red-600" : "text-green-600"}`}>
          {message}
        </div>
      )}

      <Button type="submit" disabled={!stripe || isProcessing} className="w-full bg-blue-600 hover:bg-blue-700">
        {isProcessing ? "Processing..." : "Complete Donation"}
      </Button>
    </form>
  )
}

export default function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  const handleProceedToPayment = () => {
    const amount = selectedAmount || (customAmount ? Number.parseFloat(customAmount) : 0)
    if (amount <= 0) return
    setShowPaymentForm(true)
  }

  const finalAmount = selectedAmount || (customAmount ? Number.parseFloat(customAmount) : 0)

  // Stripe Elements options with mode parameter to fix the runtime error
  const stripeElementsOptions = {
    mode: "payment" as const,
    amount: finalAmount * 100, // Convert to cents
    currency: "usd",
    appearance: { theme: "stripe" as const },
  }

  return (
    <section id="donate" className="py-20 bg-blue-50 dark:bg-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-red-500 mr-2" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Support Our <span className="text-blue-600">Research</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your donations help us continue our research and development in embedded systems, electronics, and AI. Every
            contribution makes a difference.
          </p>
        </motion.div>

        {!showPaymentForm ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {donationOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`h-full cursor-pointer transition-all duration-200 ${
                      selectedAmount === option.amount ? "border-blue-600 shadow-md" : "hover:border-blue-300"
                    }`}
                    onClick={() => setSelectedAmount(option.amount)}
                  >
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-2xl font-bold text-blue-600">${option.amount}</CardTitle>
                      <p className="text-lg font-medium text-gray-900 dark:text-white">{option.description}</p>
                    </CardHeader>
                    <CardContent className="text-center pb-4">
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{option.perks}</p>
                    </CardContent>
                    <CardFooter className="pt-0 justify-center">
                      <Button
                        variant={selectedAmount === option.amount ? "default" : "outline"}
                        className={selectedAmount === option.amount ? "bg-blue-600" : "border-blue-600 text-blue-600"}
                        onClick={() => setSelectedAmount(option.amount)}
                      >
                        Select
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Make a Donation</h3>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Selected Amount
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 text-lg mr-2">$</span>
                  <input
                    type="text"
                    value={selectedAmount !== null ? selectedAmount.toString() : customAmount}
                    onChange={(e) => {
                      setSelectedAmount(null)
                      setCustomAmount(e.target.value.replace(/[^0-9.]/g, ""))
                    }}
                    className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={handleProceedToPayment}
                disabled={finalAmount <= 0}
              >
                Proceed to Payment
              </Button>

              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
                All donations are tax-deductible. You will receive a receipt for your records.
              </p>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
              Complete Your Donation
            </h3>

            <Elements stripe={stripePromise} options={stripeElementsOptions}>
              <CheckoutForm amount={finalAmount} />
            </Elements>

            <Button variant="ghost" className="mt-4 w-full text-gray-500" onClick={() => setShowPaymentForm(false)}>
              Back to donation options
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
