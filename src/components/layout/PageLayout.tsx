import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main style={{ backgroundColor: "#161616", minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <AnnouncementBanner />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
