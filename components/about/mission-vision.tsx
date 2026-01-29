"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mountain, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-[#fff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#0056A0] font-bold mb-4">MISSION & VISION</h2>
          <h3 className="text-3xl font-bold mb-2">Know What We Think Like</h3>
          <p className="text-gray-500">
            Learn more about our mission and vision here
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-6">
                  <Mountain className="w-16 h-16 text-[#0056A0]" />
                </div>
                <h3 className="text-xl font-bold mb-4">MISSION</h3>
                <p className="text-gray-600">
                  To make premium sunroof services accessible, safe, and
                  enjoyable for every car owner in India by delivering
                  exceptional quality, innovative solutions, and unmatched
                  customer service through our skilled team of professionals.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-6">
                  <BookOpen className="w-16 h-16 text-[#FFD700]" />
                </div>
                <h3 className="text-xl font-bold mb-4">VISION</h3>
                <p className="text-gray-600">
                  To become the most trusted sunroof services provider in India,
                  known for our quality, innovation, and customer satisfaction.
                  We aim to revolutionize the automotive enhancement industry by
                  setting new standards in service excellence and technological
                  advancement.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
