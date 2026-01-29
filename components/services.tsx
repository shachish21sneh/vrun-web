'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { WrenchIcon, MagnifyingGlassIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
export function Services() {
  const services = [
    {
      title: 'Installation',
      description: 'Professional sunroof installation with precision and care',
      icon: WrenchIcon,
      image: '/installation.webp'
    },
    {
      title: 'Maintenance',
      description: 'Regular maintenance to ensure optimal performance',
      icon: MagnifyingGlassIcon,
      image: '/maintainance.webp'
    },
    {
      title: 'Repair',
      description: 'Expert repair services for all sunroof issues',
      icon: SparklesIcon,
      image: '/repair.webp'
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 leading-relaxed">
            We address all sunroof-related concerns with precision ensuring smooth
            functionality and lasting performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-none shadow-lg min-h-80">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      width={392}
                      height={192}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <service.icon className="absolute bottom-4 right-4 w-8 h-8 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

