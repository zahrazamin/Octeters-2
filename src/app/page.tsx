import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ErpSection from "@/components/sections/ErpSection";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#161616", minHeight: "100vh", position: "relative" }}>
      <div className="hero-boundary-lines">
        <div className="hero-boundary-line hero-boundary-line--left" />
        <div className="hero-boundary-line hero-boundary-line--right" />
      </div>
      <div className="nav-bottom-line" />
      <AnnouncementBanner />
      <Navbar />
      <HeroSection />
      <ErpSection />
    </main>
  );
}
