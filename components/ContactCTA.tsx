import { WhatsAppIcon, MailIcon, PinIcon } from "./Icons";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

import {
  WHATSAPP_MESSAGE_LINK,
  WHATSAPP_NUMBER,
  EMAIL_LINK,
  EMAIL_ADDRESS,
  LOCATION_ADDRESS,
  FACEBOOK_URL,
} from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-brand-950 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow text-accent-400">Book your training</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to train your team?
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-brand-100">
              Tell us about your fleet and we&apos;ll recommend the right
              programme. The fastest way to reach us is WhatsApp — we come to
              you, wherever you operate.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_MESSAGE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-brand-990 transition-colors hover:bg-accent-600"
              >
                <IoLogoWhatsapp className="h-6 w-6" />
                Chat on WhatsApp
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                <FaFacebook className="h-6 w-6" />
                @enedrivertraining
              </a>
            </div>
          </div>

          <dl className="grid gap-4 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-400/15 text-accent-400 border border-accent-400 ">
                <FaPhoneAlt className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-sm text-brand-100">WhatsApp / Call</dt>
                <dd className="font-display text-lg font-bold text-white">
                  <span className="hover:text-accent-400">
                    {WHATSAPP_NUMBER}
                  </span>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-400/15 text-accent-400 border border-accent-400 ">
                <MdMarkEmailRead className="h-6 w-6" />
              </span>
              <div>
                <dt className="text-sm text-brand-100">Email</dt>
                <dd className="font-display text-lg font-bold text-white break-all">
                  <span>{EMAIL_ADDRESS}</span>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4 ">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-400/15 text-accent-400 border border-accent-400 ">
                <FaLocationDot className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-sm text-brand-100">Based in</dt>
                <dd className="font-display text-lg font-bold text-white">
                  {LOCATION_ADDRESS}
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
