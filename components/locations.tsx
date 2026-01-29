"use client";

import { motion } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Image from "next/image";
export function Locations() {
  const locations = [
    { city: "Kerala", state: "NY", image: "/kerala.webp" },
    { city: "Bangalore", state: "CA", image: "/bangalore.webp" },
    { city: "Hyderabad", state: "IL", image: "/hyderabad.webp" },
    { city: "Delhi", state: "TX", image: "/delhi.webp" },
    { city: "Pune", state: "TX", image: "/pune.jpg" },
    { city: "Chennai", state: "TX", image: "/chennai.jpg" },
    { city: "Mumbai", state: "TX", image: "/mumbai.webp" },
    { city: "Ahmedabad", state: "TX", image: "/ahmd.jpg" }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
          <p className="text-gray-600">
            V-RUN is proud to serve customers across these major cities in India.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={location.image}
                alt={`${location.city}`}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                width={100}
                height={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{location.city}</span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-sm"
                >
                  Click to view our services in this location
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
