"use client"

import { teamMembers } from "@/lib/data"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function TeamSection() {
  return (
    <section id="team" className={ teamMembers.length === 1 ? "container py-20 bg-white dark:bg-gray-900" : "py-20 bg-white dark:bg-gray-900" }  >
      <div className="container  mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="text-blue-600">Team</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals behind Voltanex who are passionate about pushing the boundaries of technology.
          </p>
        </motion.div>

       <div
  className={
    teamMembers.length === 1
      ? "flex justify-center items-center w-3/12"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"

      
  }
>

          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 group relative">
                {/* Enhanced gradient background with animation */}
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-105 transition-transform duration-500"></div>

                  {/* Animated glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-400/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                  {/* Avatar with enhanced hover effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Pulsing circle behind avatar on hover */}
                      <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/30 scale-0 group-hover:scale-125 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

                      <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-800 shadow-lg transform group-hover:scale-110 transition-all duration-500 z-10 relative">
                        <AvatarImage src={member.image || `/placeholder.svg?height=128&width=128`} alt={member.name} />
                        <AvatarFallback className="text-2xl bg-blue-100 text-blue-600">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>

                <CardHeader className="text-center pt-10 pb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {member.bio}
                  </p>
                </CardContent>

                <CardFooter className="flex justify-center space-x-4 pt-0 pb-6">
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-110"
                    >
                      <Twitter className="w-5 h-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
