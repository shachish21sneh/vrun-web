"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/about-banner.webp"
          alt="Luxury car with sunroof"
          className="w-full h-full object-cover"
          width={2048}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-block">
            <span className="inline-block bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-white mb-6">
              ✨ Premium Sunroof Solutions
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ lineHeight: 1.2 }}
          >
            Bringing the Sky
            <span className="text-[#FFD700]"> Closer </span> to You, Every Drive
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Experience style and comfort with V-RUN’s premium sunroof solutions,
            trusted by thousands for quality and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://play.google.com/store/apps/details?id=com.vrun"
              target="_blank"
            >
              <Button className="bg-[#FFD700] text-[#0056A0] hover:bg-[#FFD700]/90 text-lg px-8 py-6 rounded-full">
                Register Now
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                variant="outline"
                className="border-white/20 text-lg px-8 py-6 rounded-full backdrop-blur-md"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
