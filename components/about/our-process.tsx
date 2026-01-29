"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function OurProcess() {
  const steps = [
    {
      number: "01",
      title: "Select Your Service",
      description:
        "Browse through our range of premium sunroof services and select the one that best fits your needs.",
      image: "/process1.webp",
    },
    {
      number: "02",
      title: "Schedule",
      description:
        "Choose a convenient time slot for your service. Our team works around your schedule.",
      image: "/process2.webp",
    },
    {
      number: "03",
      title: "Expert Fitting",
      description:
        "Our certified technicians perform the installation with precision and care.",
      image: "/process3.webp",
    },
    {
      number: "04",
      title: "Quality Assurance",
      description:
        "Rigorous quality checks ensure your sunroof meets our high standards.",
      image: "/process4.webp",
    },
    {
      number: "05",
      title: "Customer Feedback",
      description:
        "Share your experience and help us maintain our service excellence.",
      image: "/process5.webp",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFD700] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-4">How We Work</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures a seamless experience from start to
            finish
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px w-0.5 bg-gray-200 h-full" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-4"
            >
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 rounded-full bg-[#0056A0] border-4 border-white shadow-lg z-10" />
              </div>

              <div
                className={`md:w-5/12 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-[#0056A0]">
                          {step.title}
                        </h3>
                        <span className="text-3xl font-bold text-[#FFD700]">
                          {step.number}
                        </span>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
