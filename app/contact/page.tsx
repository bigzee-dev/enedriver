import type { Metadata } from "next";

import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/header";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us — ${COMPANY_NAME}`,
  description:
    "Get in touch with E&E Driver Training Consultancy for a quote or course schedule. Send an enquiry, message us on WhatsApp or email us — we train on your site, anywhere in Botswana.",
};

export default function Contact() {
  return (
    <main id="main" className="flex-1">
      <ContactHeader />
      <ContactForm />
    </main>
  );
}
