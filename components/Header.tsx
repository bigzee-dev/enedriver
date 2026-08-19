"use client";

import { useState } from "react";
import Logo from "./Logo";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { WHATSAPP_MESSAGE_LINK, FACEBOOK_URL } from "@/lib/constants";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "Services", href: "/#services" },
  { label: "Who we train", href: "/#industries" },
  { label: "Why us", href: "/#why-us" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "WhatsApp", href: WHATSAPP_MESSAGE_LINK, Icon: IoLogoWhatsapp },
  { label: "Facebook", href: FACEBOOK_URL, Icon: FaFacebookF },
];

/** Circular icon button used for the social links in the bar and mobile menu. */
const socialClasses =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-brand-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-800 hover:bg-brand-800 hover:text-white hover:shadow-sm dark:text-brand-100 dark:hover:border-accent-400 dark:hover:bg-accent-400 dark:hover:text-brand-990";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-surface/85 backdrop-blur-md">
      {/* Logo and actions share equal flex basis so the nav stays optically centred. */}
      <div className="mx-auto flex py-1.5 max-w-7xl items-center justify-between px-4 sm:px-2">
        <div className="flex flex-1 items-center">
          <Link href="/" className="flex items-center" aria-label="Back to top">
            <Logo />
          </Link>
        </div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-base font-medium text-body transition-colors hover:text-brand-900 dark:hover:text-brand-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={socialClasses}
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden />
              </a>
            ))}
          </div>

          <span className="hidden h-6 w-px bg-hairline sm:block" aria-hidden />

          <Link
            href="/contact"
            className="font-sans hidden items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800 sm:inline-flex dark:bg-accent-400 dark:text-brand-990 dark:hover:bg-accent-600"
          >
            Enquire Now
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-heading lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-hairline transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <nav
          className="flex flex-col gap-1 px-5 py-4 sm:px-8"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-base font-medium text-body transition-colors hover:bg-surface-2 hover:text-heading"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-4 py-2.5 text-sm font-semibold text-white sm:hidden"
          >
            Enquire now
          </Link>

          <div className="mt-3 flex gap-2 border-t border-hairline px-2 pt-4 sm:hidden">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onClick={() => setOpen(false)}
                className={socialClasses}
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
