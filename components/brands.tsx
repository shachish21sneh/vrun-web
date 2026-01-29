"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useGetCarBrandsQuery } from "@/toolkit/carBrands/carBrands.api";
import { Loader } from "./ui/Loader";

export function Brands() {
  const { data: carBrands, isLoading, error } = useGetCarBrandsQuery();

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFC300] to-[#fff]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Trusted by Leading Brands
        </h2>

        {isLoading && (
          <div className="mb-8">
            <Loader color="bg-yellow-500" size={3} spacing={2} count={3} />
          </div>
        )}

        {error && (
          <div className="text-center mb-8">
            <p className="text-red-500">Failed to load brands.</p>
          </div>
        )}

        {carBrands && carBrands.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {carBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <Image
                  src={brand.icon || `/placeholder-brand.png`}
                  alt={brand.display_name}
                  className="h-12 object-contain transition-opacity duration-300"
                  width={300}
                  height={300}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
