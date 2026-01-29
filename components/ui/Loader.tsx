"use client";

import { motion } from "framer-motion";

interface LoaderProps {
  color?: string;
  size?: number;
  spacing?: number;
  count?: number;
}

export function Loader({
  color = "bg-yellow-500",
  size = 3,
  spacing = 2,
  count = 3,
}: LoaderProps) {
  return (
    <div className="flex justify-center items-center">
      <div className={`flex space-x-${spacing}`}>
        {Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-${size} h-${size} ${color} rounded-full`}
            animate={{
              y: ["0%", "-50%", "0%"],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
