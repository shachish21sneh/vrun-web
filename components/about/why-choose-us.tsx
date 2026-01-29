"use client";

import { motion } from "framer-motion";
import {
  Users,
  Headset,
  Shield,
  PenToolIcon as Tool,
  Clock,
  Award,
} from "lucide-react";

export function WhyChooseUs() {
  const mainFeatures = [
    {
      icon: Award,
      title: "Premium Quality Service",
      description:
        "Access to a distinguished network of certified technicians and premium quality materials, ensuring top-tier sunroof solutions available 24/7 at competitive rates.",
    },
    {
      icon: Tool,
      title: "Complete Sunroof Solutions",
      description:
        "One-stop platform for all your sunroof needs, including installation, maintenance, repairs, and professional consultations.",
    },
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Run & managed by a team of professionals with 10+ years of experience in automotive services",
    },
    {
      icon: Headset,
      title: "24/7 Support",
      description:
        "Complimentary consultations & support services for all your sunroof-related queries",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description:
        "Efficient service delivery with minimal wait times and maximum convenience",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Certified and best quality components sourced from leading manufacturers",
    },
  ];

  return (
    <section className="py-24 bg-[#FFD700]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">WHY US</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              V-RUN is your trusted sunroof partner that helps you experience
              the best automotive care in the comfort of your schedule. We
              understand your needs and ensure the highest standard of
              personalized service at your convenience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center h-[300px]"
              >
                <feature.icon className="w-16 h-16 text-[#0056A0] mb-6 flex-shrink-0" />
                <div className="text-center flex-grow">
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center h-[250px] w-full"
              >
                <feature.icon className="w-12 h-12 text-[#0056A0] mb-4 flex-shrink-0" />
                <div className="text-center flex-grow">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
