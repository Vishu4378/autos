"use client";
import Navbar from "@/components/homepage/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import TrustedBy from "@/components/homepage/TrustedBy";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import HowItWorks from "@/components/homepage/HowItWorks";
import IntegrationsSection from "@/components/homepage/IntegrationsSection";
import CTASection from "@/components/homepage/CTASection";
import Footer from "@/components/homepage/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <HowItWorks />
      <IntegrationsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
