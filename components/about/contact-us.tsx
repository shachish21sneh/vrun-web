"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export function ContactUs() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}contact/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Thank you for reaching out!",
        description:
          "We've received your message and will get back to you shortly.",
      });
      setFormData({ full_name: "", phone: "", email: "", message: "" });
    } catch {
      toast({
        title: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0056A0] to-[#001A33]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#FFD700] font-semibold mb-2">CONTACT V-RUN</h2>
            <h3 className="text-4xl font-bold mb-4 text-white">
              Get in touch with our team
            </h3>
            <p className="text-white mb-12">
              Get in touch with us for any questions or queries you may have.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-[#FFD700] mb-2">Email Address</h4>
                <p className="text-xl text-white">support@vruncars.com</p>
              </div>

              <div>
                <h4 className="text-[#FFD700] mb-2">Phone Number</h4>
                <p className="text-xl text-white">+91 8826915571</p>
              </div>

              {/* <div>
                <h4 className="text-[#FFD700] mb-2">Address</h4>
                <p className="text-xl text-white">
                658A,BLOCK-I, Jaitpur Nala Road
                  <br />
                  Jaitpur, New Delhi, South East Delhi 110044
                </p>
              </div> */}
            </div>

            <div className="mt-8 h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9382754779644!2d72.8562!3d19.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzM0LjIiTiA3MsKwNTEnMjIuMyJF!5e0!3m2!1sen!2sin!4v1640887201185!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Query Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: `linear-gradient(205deg,
                rgb(7 52 91) 0%,
                rgba(18, 39, 56, 0.9) 50%,
                rgba(6, 34, 58, 0.8) 100%
              )`,
            }}
          >
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">QUERY FORM</h3>
              <p className="text-white/90 mb-8">
                Please fill up this form so that we can help you with our
                maximum potential
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  className="bg-white/90 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 hover:bg-white focus:bg-white transition-colors"
                />

                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="bg-white/90 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 hover:bg-white focus:bg-white transition-colors"
                />

                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="bg-white/90 backdrop-blur-sm border-0 h-12 text-gray-900 placeholder:text-gray-500 hover:bg-white focus:bg-white transition-colors"
                />

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let us know your message ..."
                  className="bg-white/90 backdrop-blur-sm border-0 min-h-[150px] text-gray-900 placeholder:text-gray-500 hover:bg-white focus:bg-white transition-colors"
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0056A0] font-semibold h-12"
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
