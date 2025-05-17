"use client"

import { useEffect, useRef } from "react"

export default function CircuitAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Track mouse position
    let mouseX = 0
    let mouseY = 0
    const mouseRadius = 200 // Increased radius of influence around mouse

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Circuit node class
    class Node {
      x: number
      y: number
      originalX: number
      originalY: number
      connections: Node[]
      size: number
      pulseSize: number
      pulseOpacity: number
      isPulsing: boolean
      pulseSpeed: number
      color: string
      velocityX: number
      velocityY: number

      constructor(x: number, y: number) {
        this.x = x
        this.originalX = x
        this.y = y
        this.originalY = y
        this.connections = []
        this.size = 1.5 + Math.random() * 2 // Slightly smaller nodes to accommodate more
        this.pulseSize = 0
        this.pulseOpacity = 0
        this.isPulsing = false
        this.pulseSpeed = 0.5 + Math.random() * 1
        this.color = `rgb(37, 99, 235)`
        this.velocityX = 0
        this.velocityY = 0
      }

      connect(node: Node) {
        if (!this.connections.includes(node)) {
          this.connections.push(node)
        }
      }

      startPulse() {
        if (!this.isPulsing) {
          this.isPulsing = true
          this.pulseSize = 0
          this.pulseOpacity = 1
        }
      }

      update() {
        // Mouse interaction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          // Move away from mouse with increased force and responsiveness
          const force = (mouseRadius - distance) / mouseRadius
          this.velocityX -= (dx / distance) * force * 1.2 // Increased force multiplier
          this.velocityY -= (dy / distance) * force * 1.2
        }

        // Return to original position with increased speed
        this.velocityX += (this.originalX - this.x) * 0.03 // Increased return force
        this.velocityY += (this.originalY - this.y) * 0.03

        // Apply friction
        this.velocityX *= 0.92 // Slightly less friction for more responsive movement
        this.velocityY *= 0.92

        // Update position
        this.x += this.velocityX
        this.y += this.velocityY

        // Pulse animation
        if (this.isPulsing) {
          this.pulseSize += this.pulseSpeed
          this.pulseOpacity -= 0.02

          if (this.pulseOpacity <= 0) {
            this.isPulsing = false
            this.pulseSize = 0
            this.pulseOpacity = 0
          }

          // Propagate pulse to connections when pulse is halfway
          if (this.pulseSize > 15 && this.pulseOpacity > 0.5) {
            this.connections.forEach((node) => {
              if (Math.random() > 0.7) {
                // Only some connections get the pulse
                node.startPulse()
              }
            })
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw node
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        // Draw pulse
        if (this.isPulsing) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.pulseSize, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(37, 99, 235, ${this.pulseOpacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Draw connections
        this.connections.forEach((node) => {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.strokeStyle = "rgba(37, 99, 235, 0.3)"
          ctx.lineWidth = 1
          ctx.stroke()
        })
      }
    }

    // Create nodes - increased node count by 50%
    const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 10000) // Reduced divisor to increase node count
    const nodes: Node[] = []

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      nodes.push(new Node(x, y))
    }

    // Connect nodes
    nodes.forEach((node) => {
      const connectionsCount = 2 + Math.floor(Math.random() * 3)

      // Find closest nodes
      const sortedNodes = [...nodes]
        .filter((n) => n !== node)
        .sort((a, b) => {
          const distA = Math.hypot(a.x - node.x, a.y - node.y)
          const distB = Math.hypot(b.x - node.x, b.y - node.y)
          return distA - distB
        })

      // Connect to closest nodes
      for (let i = 0; i < Math.min(connectionsCount, sortedNodes.length); i++) {
        node.connect(sortedNodes[i])
      }
    })

    // Start random pulses
    const startRandomPulses = () => {
      const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
      randomNode.startPulse()
      setTimeout(startRandomPulses, 1000 + Math.random() * 2000)
    }

    // Start a few initial pulses
    for (let i = 0; i < 5; i++) {
      // Increased initial pulses
      setTimeout(() => {
        nodes[Math.floor(Math.random() * nodes.length)].startPulse()
      }, i * 500)
    }

    setTimeout(startRandomPulses, 2000)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node) => {
        node.update()
        node.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }} />
}
