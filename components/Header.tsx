"use client";

import { useState } from "react";
import Logo from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { WHATSAPP_MESSAGE_LINK } from "@/lib/constants";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Courses", href: "#courses" },
  { label: "Why us", href: "#why-us" },
  { label: "Who we train", href: "#industries" },
  { label: "How it works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-5 sm:px-2">
        <Link
          href="#top"
          className="flex items-center"
          aria-label="Back to top"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body transition-colors hover:text-brand-900 dark:hover:text-brand-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800 sm:inline-flex dark:bg-accent-400 dark:text-brand-990 dark:hover:bg-accent-600"
          >
            Enquire now
          </a>

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
          open ? "max-h-96" : "max-h-0"
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
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-4 py-2.5 text-sm font-semibold text-white sm:hidden"
          >
            Enquire now
          </a>
        </nav>
      </div>
    </header>
  );
}
