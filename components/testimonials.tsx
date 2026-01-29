"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { QuoteIcon } from "lucide-react";
import { testimonialsApi } from "@/toolkit/testimonials/testimonials.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} className="w-5 h-5 text-[#FFD700]" />
      ))}
      {hasHalfStar && (
        <div className="relative w-5 h-5">
          <StarIconOutline className="absolute w-5 h-5 text-[#FFD700]" />
          <div className="absolute w-[50%] overflow-hidden">
            <StarIcon className="w-5 h-5 text-[#FFD700]" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarIconOutline
          key={`empty-${i}`}
          className="w-5 h-5 text-[#FFD700]"
        />
      ))}
    </>
  );
};

export function Testimonials() {
  const {
    data: testimonials,
    isLoading,
    error,
  } = testimonialsApi.useGetTestimonialsQuery();

  if (isLoading) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          Loading testimonials...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center text-red-500">
          Failed to load testimonials
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">
            Don&apos;t just take our word for it - hear from our satisfied
            customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-white">
                <CardContent className="p-8">
                  <QuoteIcon className="w-10 h-10 text-[#FFD700] mb-6" />
                  <div className="flex mb-4">
                    <RatingStars rating={testimonial.rating} />
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    {testimonial.review}
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#FFD700] text-white">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.designation} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
