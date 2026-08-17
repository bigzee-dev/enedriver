import Hero from "@/components/Hero";
import AccreditationBar from "@/components/AccreditationBar";
import WhatWeDo from "@/components/whatwedo";
import CourseLinks from "@/components/courselinks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CtaBanner from "@/components/ctabanner";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <main id="main" className="flex-1">
        <Hero />
        <AccreditationBar />
        <WhatWeDo />
        <CourseLinks />
        <WhyChooseUs />
        <Services />
        <Industries />
        <CtaBanner />
        <Process />
        <ContactCTA />
        <FAQ />
      </main>
    </>
  );
}
