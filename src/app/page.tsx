import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ErpSection from "@/components/sections/ErpSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import StreamlineSection from "@/components/sections/StreamlineSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#161616", minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <AnnouncementBanner />
      <Navbar />
      <HeroSection />
      <ErpSection />
      <ServicesSection />
      <ReviewsSection />
      <StreamlineSection />
      <CaseStudiesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
