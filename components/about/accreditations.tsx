import Image from "next/image";
import { ACCREDITATIONS } from "@/lib/content";

export default function Accreditations() {
  return (
    <section
      id="qualifications"
      className="bg-surface-2 scroll-mt-20 py-16 sm:py-16 border-t border-neutral-300"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-4">
        <div className="grid overflow-hidden  lg:grid-cols-[6fr_6fr] gap-10">
          {/* ── Left — accrediting bodies on the dark panel ── */}
          <div className="rounded-2xl flex items-center justify-center bg-brand-950 p-8 sm:p-10 sm:py-16">
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
          <div className="flex flex-col justify-center  p-2 sm:p-4">
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-wide sm:text-4xl">
              Accreditations
            </h2>
            <p className="mt-5  text-base leading-relaxed text-body">
              E&E Driver Training Consultancy is accredited by the Botswana
              Qualifications Authority (BQA), the organisation responsible for
              making sure education and training providers in Botswana meet the
              required standards. We are also registered with the Human Resource
              Development Council (HRDC), which supports workplace training and
              skills development in Botswana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
