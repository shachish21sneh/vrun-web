"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { faqApi } from "@/toolkit/faqs/faqs.api";

export function FAQ() {
  const { data: faqs, isLoading, error } = faqApi.useGetFAQsQuery();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (isLoading) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <p>Loading FAQs...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4 text-center text-red-600">
          <p>Failed to load FAQs. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our sunroof services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs?.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.title}</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600">{faq.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
