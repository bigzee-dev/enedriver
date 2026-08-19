import Logo from "./Logo";
import { WhatsAppIcon, FacebookIcon } from "./Icons";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import {
  COMPANY_NAME,
  WHATSAPP_MESSAGE_LINK,
  WHATSAPP_NUMBER,
  FACEBOOK_URL,
  EMAIL_LINK,
  EMAIL_ADDRESS,
  LOCATION_ADDRESS,
} from "@/lib/constants";
import Link from "next/link";

const NAV = [
  { label: "Courses", href: "/courses" },
  { label: "Services", href: "/#services" },
  { label: "Who we train", href: "/#industries" },
  { label: "Why us", href: "/#why-us" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-2 pt-16">
      <div className="lane-line" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              BQA accredited and HRDC registered driver and plant-operator
              training, delivered on-site across Botswana by instructors with
              over 20 years of experience.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={WHATSAPP_MESSAGE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-brand-800 transition-colors hover:bg-brand-900 hover:text-white dark:text-brand-100"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-brand-800 transition-colors hover:bg-brand-900 hover:text-white dark:text-brand-100"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-heading">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-heading"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-heading">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <FaWhatsapp className="mt-0.5 h-5 w-5 shrink-0 text-brand-700 dark:text-accent-400" />
                <a
                  href={WHATSAPP_MESSAGE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-heading"
                >
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IoMailOutline className="mt-0.5 h-5 w-5 shrink-0 text-brand-700 dark:text-accent-400" />
                <a
                  href={EMAIL_LINK}
                  className="break-all transition-colors hover:text-heading"
                >
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IoLocationOutline className="mt-0.5 h-5 w-5 shrink-0 text-brand-700 dark:text-accent-400" />
                <span>{LOCATION_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {2026} {COMPANY_NAME}. All rights reserved.
          </p>
          <p>BQA Accredited · HRDC Registered</p>
        </div>
      </div>
    </footer>
  );
}
