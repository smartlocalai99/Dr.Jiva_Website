import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
       <main className="pt-20">
        <Hero />
      <AboutSection />
      <WhyChooseUs/>
       <Features />
       <HowItWorks />
       <Testimonials />
       <FAQ />
       <ContactUs />
      </main>
        <Footer />
    
    </> 
  );
}