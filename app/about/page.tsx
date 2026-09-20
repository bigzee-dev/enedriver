import type { Metadata } from "next";

import AboutHeader from "@/components/about/header";
import CorePillars from "@/components/about/CorePillars";
import Information from "@/components/about/Information";
import OurMission from "@/components/about/OurMission";
import OurVision from "@/components/about/OurVision";
import Accreditations from "@/components/about/accreditations";
import CtaBanner from "@/components/ctabanner";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About Us — ${COMPANY_NAME}`,
  description:
    "E&E Driver Training Consultancy is a Botswana-based driver and operator training company with over 20 years of instructor experience — BQA accredited, HRDC registered and 100% mobile.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main id="main" className="flex-1">
      <AboutHeader />
      <Information />
      <CorePillars />
      <OurVision />
      <OurMission />
      <Accreditations />
      <div className="bg-surface-2 pt-8 pb-12">
        <CtaBanner />
      </div>
    </main>
  );
}
