"use client";

import { motion } from "framer-motion";

export function Team() {
  const teamMembers = [
    {
      name: "UC",
      role: "CEO",
      image: "/ceo.jpg",
      bio: "A visionary leader with over 15 years in the automotive industry",
    },
    {
      name: "RM",
      role: "COO",
      image: "/technical.jpg",
      bio: "Expert in streamlining processes and enhancing customer satisfaction",
    },
    {
      name: "NA",
      role: "CMO",
      image: "/customer.jpg",
      bio: "Dedicated to creating exceptional service experiences",
    },
    {
      name: "VP",
      role: "Mentor",
      image: "/mentor.jpg",
      bio: "Navigator to scale Sunroof and related Services in South Asia",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#0056A0] text-lg font-semibold mb-2">
            OUR TEAM
          </h2>
          <h3 className="text-3xl font-bold mb-4">A Strong Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the experts behind V-RUN&apos;s success. Our leadership team
            brings together decades of experience in automotive innovation and
            customer service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#122738]/50 via-[#122738]/50 to-transparent opacity-90" />
                <div className="absolute top-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-[#FFD700] mb-1">
                    {member.role}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-lg text-white mb-2">{member.name}</p>
                  <p className="text-white/90 text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
