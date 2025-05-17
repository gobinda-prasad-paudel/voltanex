"use client"

import { teamPositions } from "@/lib/data"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function JoinTeamSection() {
  return (
    <section id="join" className="py-20 bg-blue-50 dark:bg-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Join Our <span className="text-blue-600">Team</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're looking for talented individuals who are passionate about embedded systems, electronics, and AI to
            join our growing team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamPositions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{position.title}</CardTitle>
                    <Badge className="bg-blue-600">{position.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-1" /> {position.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{position.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Don't see a position that matches your skills? We're always looking for talented individuals.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="https://forms.gle/voltanexApplicationForm" target="_blank">
              Submit General Application
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
