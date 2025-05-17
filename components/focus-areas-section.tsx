"use client"

import { focusAreas } from "@/lib/data"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Check, CircuitBoardIcon as Circuit, Cpu, Leaf } from "lucide-react"

export default function FocusAreasSection() {
  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className={className} />
      case "Circuit":
        return <Circuit className={className} />
      case "Brain":
        return <Brain className={className} />
      default:
        return <Cpu className={className} />
    }
  }

  // Function to get the appropriate color class based on the color name
  const getColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "text-blue-600 bg-blue-100 dark:bg-blue-900/30"
      case "green":
        return "text-green-600 bg-green-100 dark:bg-green-900/30"
      case "purple":
        return "text-purple-600 bg-purple-100 dark:bg-purple-900/30"
      default:
        return "text-blue-600 bg-blue-100 dark:bg-blue-900/30"
    }
  }

  return (
    <section id="focus-areas" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Areas We <span className="text-blue-600">Focus</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We develop cutting-edge technologies in these key areas to create solutions that benefit both the
            environment and society.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${getColorClass(
                        area.color,
                      )}`}
                    >
                      {renderIcon(area.icon, "w-6 h-6")}
                    </div>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">{area.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <div className="mb-4">
                    <div className="flex items-start mb-2">
                      <Leaf className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                      <h4 className="font-medium text-gray-900 dark:text-white">Environmental & Social Impact</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 ml-7">{area.impact}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {area.examples.map((example, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-600 dark:text-gray-300">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
