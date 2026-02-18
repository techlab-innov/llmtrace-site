import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problems from "@/components/landing/Problems";
import HowItWorks from "@/components/landing/HowItWorks";
import Capabilities from "@/components/landing/Capabilities";
import DashboardPreview from "@/components/landing/DashboardPreview";
import QuickStart from "@/components/landing/QuickStart";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      <Hero />
      <Problems />
      <HowItWorks />
      <Capabilities />
      <DashboardPreview />
      <QuickStart />
      <Footer />
    </div>
  );
};

export default Index;
