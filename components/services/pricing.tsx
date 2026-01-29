"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Silver",
      label: "Basic",
      price: "999",
      period: "year",
      labelColor: "bg-orange-100 text-orange-700",
      features: [
        "2 annual maintenance sessions",
        "Basic car wash included",
        "Standard support response time",
      ],
    },
    {
      name: "Gold",
      label: "POPULAR",
      price: "4,999",
      period: "year",
      labelColor: "bg-[#0056A0] text-white",
      popular: true,
      features: [
        "4 annual maintenance sessions",
        "Premium car wash included",
        "Priority support response",
        "Free minor repairs",
      ],
    },
    {
      name: "Platinum",
      label: "Premium",
      price: "9,999",
      period: "year",
      labelColor: "bg-green-100 text-green-700",
      features: [
        "6 annual maintenance sessions",
        "Luxury car wash included",
        "24/7 VIP support",
        "Free repairs and replacements",
        "Exclusive member benefits",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Quality <span className="text-[#0056A0]">Service</span> Without
            Compromise
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the perfect plan for your vehicle. Enhance your driving
            experience with our comprehensive sunroof maintenance packages.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105 ${
                plan.popular ? "ring-2 ring-[#0056A0]" : ""
              }`}
            >
              {/* Plan Label */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${plan.labelColor}`}
                >
                  {plan.label}
                </span>
                {plan.popular && <Crown className="w-6 h-6 text-[#FFD700]" />}
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">₹</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="ml-2 text-gray-500">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-[#0056A0] hover:bg-[#0056A0]/90 text-white"
                    : "bg-white text-gray-600 border-1 border-gray-200 hover:bg-[#0056A0] hover:text-white"
                }`}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
