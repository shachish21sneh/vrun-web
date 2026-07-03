import { Hero } from "@/components/hero";
import { Introduction } from "@/components/introduction";
import { Features } from "@/components/features";
import { Services } from "@/components/services";
import { VideoSection } from "@/components/video-section";
import { Stats } from "@/components/stats";
import { PopularArticles } from "@/components/popular-articles";
import { Testimonials } from "@/components/testimonials";
import { Brands } from "@/components/brands";
import { Locations } from "@/components/locations";
import { FAQ } from "@/components/faq";
import { CallToAction } from "@/components/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent h-[500px] -z-10" />
        <Introduction />
        <Features />
        <Services />
        <VideoSection />
        <Stats />
        <Testimonials />
        <Brands />
        <Locations />
		{/* <PopularArticles /> */}
		<FAQ />
        <CallToAction />
      </div>
    </div>
  );
}
