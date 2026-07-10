import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AccreditationBar from "@/components/AccreditationBar";
import WhatWeDo from "@/components/whatwedo";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import CtaBanner from "@/components/ctabanner";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <AccreditationBar />
        <WhatWeDo />
        <Courses />
        <WhyChooseUs />
        <Industries />
        <CtaBanner />
        <Process />
        <ContactCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
