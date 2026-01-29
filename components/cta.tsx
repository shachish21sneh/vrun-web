"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0056A0] to-[#001A33] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative container mx-auto px-4 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Transform Your Drive?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have elevated their driving
          experience with our premium sunroof solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://play.google.com/store/apps/details?id=com.vrun"
            target="_blank"
          >
            <Button className="bg-[#FFD700] text-[#0056A0] hover:bg-[#FFD700]/90 text-lg px-8 py-6 rounded-full">
              Register Now
            </Button>
          </Link>
          <Link href="/contact-us" target="_blank">
            <Button
              variant="outline"
              className="border-white/20 text-lg px-8 py-6 rounded-full"
            >
              Contact Sales
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
