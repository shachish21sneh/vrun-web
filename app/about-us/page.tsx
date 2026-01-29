import { Hero } from "@/components/about/hero";
import { AboutVRUN } from "@/components/about/about-vrun";
import { MissionVision } from "@/components/about/mission-vision";
import { Team } from "@/components/about/team";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/about/why-choose-us";
import { OurProcess } from "@/components/about/our-process";
import { Testimonials } from "@/components/testimonials";
import { Awards } from "@/components/about/awards";
import { ContactUs } from "@/components/about/contact-us";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutVRUN />
      <MissionVision />
      <Team />
      <WhyChooseUs />
      <Services />
      <OurProcess />
      <Testimonials />
      <Awards />
      <ContactUs />
    </div>
  );
}
