"use server"

import nodemailer from "nodemailer"
import { siteConfig } from "./data"

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com", // Use environment variable in production
        pass: process.env.EMAIL_PASSWORD || "your-app-password", // Use environment variable in production
      },
    })

    // Setup email data
    const mailOptions = {
      from: `"${formData.name}" <${formData.email}>`,
      to: siteConfig.contactEmail, // apple@gmail.com from siteConfig
      subject: `Contact Form: ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        
        Message:
        ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Message from Voltanex Website</h2>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${formData.name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${formData.email}</p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${formData.subject}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px;">
            <h3 style="margin-top: 0; color: #374151;">Message:</h3>
            <p style="white-space: pre-line;">${formData.message}</p>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This email was sent from the contact form on the Voltanex website.</p>
        </div>
      `,
    }

    // For development, log the email instead of sending
    console.log("Email would be sent with:", mailOptions)

    // In production, uncomment this to actually send the email
    // When EMAIL_USER and EMAIL_PASSWORD environment variables are set
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      await transporter.sendMail(mailOptions)
      console.log("Email sent successfully to", siteConfig.contactEmail)
    } else {
      console.log("Email credentials not provided. Email not sent.")
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}

export async function createStripeCheckoutSession(amount: number) {
  try {
    // In a real implementation, you would create a Stripe checkout session here
    // and return the session ID to redirect the user to the checkout page

    // For development purposes, we'll just return a mock session ID
    return { sessionId: "mock_session_id" }
  } catch (error) {
    console.error("Error creating Stripe session:", error)
    throw new Error("Failed to create payment session")
  }
}
