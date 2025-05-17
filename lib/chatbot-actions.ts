"use server"

type OpenRouterResponse = {
  choices: {
    message: {
      content: string
    }
  }[]
  error?: {
    message: string
  }
}

export async function getChatbotResponse(message: string): Promise<string> {
  try {
    console.log("Starting OpenRouter API request")

    // Check if API key is available
    if (!process.env.OPENROUTER_API_KEY) {
      console.error("OpenRouter API key is missing")
      return "Configuration error: API key is missing. Please contact the administrator."
    }

    // Prepare the request to OpenRouter
    const requestBody = {
      model: "anthropic/claude-instant-v1", // Try an alternative model
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant for Voltanex, a company focused on embedded systems, electronics, and AI. Provide concise, accurate, and helpful responses. Keep answers brief and to the point.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    }

    console.log("Request body:", JSON.stringify(requestBody))

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://voltanex.com", // Replace with your actual domain
        "X-Title": "Voltanex Assistant",
      },
      body: JSON.stringify(requestBody),
    })

    console.log("Response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("OpenRouter API error:", errorText)

      try {
        const errorData = JSON.parse(errorText)
        return `API error: ${errorData.error?.message || response.statusText}`
      } catch (e) {
        return `API error: ${response.status} ${response.statusText}`
      }
    }

    const data = (await response.json()) as OpenRouterResponse
    console.log("OpenRouter API response received")

    // Extract the response text
    const responseText = data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response."
    return responseText
  } catch (error) {
    console.error("Error getting chatbot response:", error)
    return (
      "I'm having trouble connecting right now. Please try again later. (Error: " +
      (error instanceof Error ? error.message : String(error)) +
      ")"
    )
  }
}
