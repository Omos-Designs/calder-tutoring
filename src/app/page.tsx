import Image from "next/image";
import { Hero } from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import ContactPage from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Pricing />
      <ContactPage />
      <Footer />
    </div>
  );
}
