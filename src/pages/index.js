import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DownloadApp from "@/components/DownloadApp";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import GovernmentPartners from "@/components/GovernmentPartners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
       <main className="pt-20">
        <Hero />
      <AboutSection />
      <WhyChooseUs/>
       <Features />
       <HowItWorks />
       <DownloadApp />
       <FAQ />
       <ContactUs />
       <GovernmentPartners />
      </main>
        <Footer />
    
    </> 
  );
}