"use client"

import { siteConfig } from "@/lib/data"
import { motion } from "framer-motion"
import { Award, Calendar, Cpu, Lightbulb } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-blue-600">Voltanex</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a research and development organization dedicated to pushing the boundaries of embedded systems,
            electronics, and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Founder</h3>
            <p className="text-gray-600 dark:text-gray-300">{siteConfig.founder}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Founded</h3>
            <p className="text-gray-600 dark:text-gray-300">{siteConfig.foundedDate}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center md:col-span-2 lg:col-span-1"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Focus</h3>
            <p className="text-gray-600 dark:text-gray-300">{siteConfig.focus}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
        >
          <div className="flex items-center mb-4">
            <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            At Voltanex, we are committed to developing innovative solutions that bridge the gap between hardware and
            artificial intelligence. Our mission is to create embedded systems that are not only efficient and reliable
            but also intelligent and adaptive.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            We believe in the power of technology to solve real-world problems and improve lives. Through continuous
            research and development, we strive to push the boundaries of what's possible in the fields of embedded
            systems, electronics, and AI.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
