import { ArrowRightIcon } from "./Icons";
import { WHATSAPP_MESSAGE_LINK, CITY, COUNTRY } from "@/lib/constants";
import Image from "next/image";

const ACCREDITATIONS = ["BQA Accredited", "HRDC Registered"];

// Botswana flag colours
const BW_BLUE = "#75AADB";
const BW_BLACK = "#000000";

function BotswanaFlag({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        overflow: "hidden",
        borderRadius: 6,
        boxShadow: "0 4px 18px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ height: "35%", background: BW_BLUE }} />
      <div style={{ height: "5%", background: "#fff" }} />
      <div style={{ height: "20%", background: BW_BLACK }} />
      <div style={{ height: "5%", background: "#fff" }} />
      <div style={{ height: "35%", background: BW_BLUE }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-990 text-white"
    >
      {/* SVG background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="hosting-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#33bff2"
              fillOpacity="0.12"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hosting-dots)" />

        {/* Large background circles — right side, behind image */}
        <circle cx="78%" cy="50%" r="340" fill="#005878" fillOpacity="0.30" />
        <circle cx="78%" cy="50%" r="230" fill="#005878" fillOpacity="0.28" />
        <circle cx="78%" cy="50%" r="130" fill="#33bff2" fillOpacity="0.05" />

        {/* Diagonal accent lines */}
        <div className="hidden md:block">
          <line
            x1="38%"
            y1="0"
            x2="58%"
            y2="100%"
            stroke="#33bff2"
            strokeWidth="1"
            strokeOpacity="0.07"
          />
          <line
            x1="48%"
            y1="0"
            x2="68%"
            y2="100%"
            stroke="#33bff2"
            strokeWidth="1"
            strokeOpacity="0.05"
          />
          <line
            x1="28%"
            y1="0"
            x2="48%"
            y2="100%"
            stroke="#33bff2"
            strokeWidth="1"
            strokeOpacity="0.05"
          />
        </div>

        {/* Decorative polygon — bottom right */}
        <polygon
          points="92%,75% 95%,68% 98%,75% 95%,82%"
          fill="none"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.2"
        />

        {/* Floating accent dots */}
        {/* <circle cx="20%" cy="82%" r="4" fill="#33bff2" fillOpacity="0.25" />
        <circle cx="72%" cy="18%" r="3" fill="#33bff2" fillOpacity="0.3" />
        <circle cx="58%" cy="88%" r="5" fill="#005878" fillOpacity="0.6" />
        <circle cx="14%" cy="42%" r="2.5" fill="#33bff2" fillOpacity="0.2" />
        <circle cx="88%" cy="88%" r="6" fill="#33bff2" fillOpacity="0.08" />
        <circle cx="3%" cy="65%" r="3" fill="#33bff2" fillOpacity="0.15" /> */}

        {/* Horizontal rule lines */}
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="100%"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.15"
        />
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.1"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl gap-y-12 gap-x-12 px-5 py-20 sm:px-2 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 text-white/70">
            <BotswanaFlag className="h-7 w-11" /> · On-site nationwide ·{" "}
            {COUNTRY}
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-white/80 sm:text-5xl lg:text-6xl">
            Accredited driver training,{" "}
            <span className="text-brand-600">brought to your site.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
            We prepare fleets, operators and drivers for government, parastatal
            and industry standards — with instructors who bring over 20 years on
            the road. We come to you, anywhere in {COUNTRY}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-brand-990 transition-colors hover:bg-accent-600"
            >
              Contact us
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 bg-brand-900 rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              View courses
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>

          {/* <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            {ACCREDITATIONS.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-100"
              >
                <span className="h-2 w-2 rounded-full bg-accent-400" />
                {item}
              </span>
            ))}
          </div> */}
        </div>

        {/* Credential panel */}
        <div className="relative">
          <div className="rounded-2xl  bg-slate-400/50 p-2 backdrop-blur-sm ">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/enehero.png"
                alt="hero image"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-[#33bff2]/30" />
            <div className="absolute -left-2 -top-2 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-[#33bff2]/20" />
            {/* <p className="eyebrow text-accent-400">By the numbers</p>
            <dl className="mt-6 grid grid-cols-2 gap-6">
              {[
                { value: "20+", label: "Years of instructor experience" },
                { value: "6", label: "Licence categories covered" },
                { value: "4", label: "Specialist course programmes" },
                { value: "100%", label: "Delivered on your premises" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-4xl font-medium text-accent-400">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug text-brand-100">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl> */}
            {/* <div className="mt-7 lane-line" aria-hidden />
            <p className="mt-5 text-sm leading-relaxed text-brand-100">
              From light vehicles to extra heavy-duty combinations and
              earth-moving plant — one accredited partner for the whole fleet.
            </p> */}
          </div>
        </div>
      </div>

      <div className="lane-line" aria-hidden />
    </section>
  );
}
