import { FaLocationDot, FaCheck } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

import {
  EMAIL_ADDRESS,
  EMAIL_LINK,
  LOCATION_ADDRESS,
  WHATSAPP_MESSAGE_LINK,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { CONTACT_ASSURANCES } from "@/lib/content";

/** The three ways to reach us, rendered as a row of chips under the heading. */
const CHANNELS = [
  {
    label: "WhatsApp / Call",
    value: WHATSAPP_NUMBER,
    href: WHATSAPP_MESSAGE_LINK,
    external: true,
    Icon: IoLogoWhatsapp,
  },
  {
    label: "Email",
    value: EMAIL_ADDRESS,
    href: EMAIL_LINK,
    external: false,
    Icon: MdMarkEmailRead,
  },
  {
    label: "Based in",
    value: LOCATION_ADDRESS,
    href: null,
    external: false,
    Icon: FaLocationDot,
  },
];

export default function ContactHeader() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      {/* Ambient brand glow — keeps the flat dark band from reading as a slab. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 h-60 w-96 rounded-full bg-brand-700/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-60 w-80 rounded-full bg-accent-400/10 blur-3xl"
      />
      {/* Signature centre-line, run vertically down the gutter. */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-6 hidden opacity-40 lg:block"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-16">
        <span className="eyebrow text-accent-400">Contact us</span>

        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
          Let&apos;s get your team behind the wheel
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
          Tell us your fleet size, the licence categories you run and when you
          need training or our services — we&apos;ll come back with a
          recommended programme, a schedule and a quote.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {CHANNELS.map(({ label, value, href, external, Icon }) => {
            const body = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-400 bg-accent-400/15 text-accent-400">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-brand-100">{label}</span>
                  <span className="block truncate font-display text-sm font-bold text-white">
                    {value}
                  </span>
                </span>
              </>
            );

            const shell =
              "flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm";

            return href ? (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`${shell} transition-colors hover:border-accent-400/50 hover:bg-white/10`}
              >
                {body}
              </a>
            ) : (
              <div key={label} className={shell}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
