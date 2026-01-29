'use client'

import { motion } from 'framer-motion'

export function Stats() {
  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <section className="py-24 bg-[#0056A0]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

