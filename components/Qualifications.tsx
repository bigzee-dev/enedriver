import Image from "next/image";
import { ACCREDITATIONS } from "@/lib/content";

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

export default function Qualifications() {
  return (
    <section id="qualifications" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-hairline lg:grid-cols-[5fr_7fr]">
          {/* ── Left — accrediting bodies on the dark panel ── */}
          <div className="flex items-center justify-center bg-brand-950 p-8 sm:p-10">
            <ul className="grid w-full max-w-sm gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:max-w-xs">
              {ACCREDITATIONS.map(
                ({ id, name, logo, width, height, logoOnDark }) => (
                  <li
                    key={id}
                    className={`flex h-30 items-center justify-center rounded-xl border p-5 ${
                      logoOnDark
                        ? "border-white/15 bg-white/5"
                        : "border-white/15 bg-white"
                    }`}
                  >
                    <Image
                      src={logo}
                      alt={name}
                      width={width}
                      height={height}
                      className="h-full w-auto object-contain"
                    />
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* ── Right — the statement, vertically centred ── */}
          <div className="flex flex-col justify-center bg-surface-2 p-8 sm:p-12">
            <BotswanaFlag className="h-7 w-11" />
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-wide sm:text-4xl">
              We deliver training and consultancy you can trust.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-body">
              E&amp;E Driver Training and Consultancy is registered with the
              Human Resource Development Council (HRDC) and accredited by the
              Botswana Qualifications Authority (BQA). We offer driver training
              courses, consultancy and services across the transportation
              sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
