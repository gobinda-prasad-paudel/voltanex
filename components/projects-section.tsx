"use client"

import { projects } from "@/lib/data"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our innovative research and development projects in embedded systems, electronics, and artificial
            intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/projects/${project.id}`} className="block h-full">
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || `/placeholder.svg?height=200&width=400`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-blue-600">{project.status}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-blue-600 border-blue-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <span className="text-blue-600 hover:text-blue-700 font-medium">Learn more →</span>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
