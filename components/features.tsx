"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  SparklesIcon,
  ClockIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

export function Features() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Premium Quality",
      description:
        "Only the highest quality materials and components for your vehicle",
    },
    {
      icon: SparklesIcon,
      title: "Expert Installation",
      description: "Professional installation by certified technicians",
    },
    {
      icon: ClockIcon,
      title: "Quick Service",
      description: "Fast and efficient service to get you back on the road",
    },
    {
      icon: WrenchIcon,
      title: "Lifetime Support",
      description: "Ongoing maintenance and support for your sunroof",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose <span className="text-[#0056A0]">V-RUN</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We provide comprehensive sunroof solutions with unmatched quality
            and service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 -z-10" />
              <div className="p-8 bg-gradient-to-t from-[#FFC300] to-[#fff] min-h-64 rounded-lg">
                <feature.icon className="w-12 h-12 mb-6" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
