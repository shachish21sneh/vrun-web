"use client";

import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Sunroof Care: Do&apos;s and Don&apos;ts
          </h2>
          <p className="text-gray-600">
            Learn the best practices for maintaining your sunroof and common
            mistakes to avoid.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="aspect-w-16 aspect-h-9 w-3/4 mx-auto"
        >
          <iframe
            src="https://www.youtube.com/embed/yIH88D3WAWA?si=7kN_kSVnIv5zE-yQ"
            title="Sunroof Care: Do's and Don'ts"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ height: "500px" }}
            className="w-full h-full rounded-lg"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
