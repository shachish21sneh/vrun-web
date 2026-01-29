import { Hero } from "@/components/services/hero";
import { ServiceDescriptions } from "@/components/services/service-descriptions";
import { Pricing } from "@/components/services/pricing";
import { Brands } from "@/components/brands";
import { Locations } from "@/components/locations";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CallToAction } from "@/components/cta";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ServiceDescriptions />
      <Pricing />
      <Brands />
      <Locations />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>
  );
}
