import type { IconType } from "react-icons";
import {
  FaAward,
  FaBuilding,
  FaChalkboardUser,
  FaHelmetSafety,
  FaIndustry,
  FaLandmark,
  FaLocationDot,
  FaRegClock,
} from "react-icons/fa6";

import {
  EXPERIENCE_YEARS,
  PROMO_POINTS,
  PROMO_SECTORS,
  type PromoPoint,
  type PromoSector,
} from "@/lib/content";
import SectionHeading from "../SectionHeading";

/** Icons live with the presentation layer; copy stays in `lib/content.ts`. */
const POINT_ICONS: Record<PromoPoint["id"], IconType> = {
  accredited: FaAward,
  "on-site": FaLocationDot,
  trainers: FaChalkboardUser,
  "short-courses": FaRegClock,
};

const SECTOR_ICONS: Record<PromoSector["id"], IconType> = {
  commercial: FaBuilding,
  government: FaLandmark,
  mining: FaHelmetSafety,
  industrial: FaIndustry,
};

export default function CoursesPromo() {
  return (
    <>
      <section
        id="why-train-with-us"
        className="scroll-mt-20 bg-surface-2 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <SectionHeading
            eyebrow="Why train with us"
            title="Two decades of accredited training, delivered on your site"
            intro="We have spent 20 years putting drivers and machine operators through their paces across Botswana."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Headline stat — the experience claim carries the section. */}
            <div className="relative overflow-hidden rounded-2xl bg-brand-900 p-8 sm:col-span-2 sm:p-10 dark:bg-brand-950">
              <span aria-hidden className="absolute inset-y-0 left-0" />
              <div className="pl-4 sm:pl-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-6xl leading-none font-medium text-accent-400 sm:text-7xl">
                    {EXPERIENCE_YEARS}
                  </span>
                  <span className="eyebrow text-brand-100">years</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white sm:text-2xl">
                  In the industry
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-brand-100">
                  Two decades training drivers and operators for fleets,
                  government departments and mines — the courses below are built
                  on every one of those years.
                </p>
              </div>
            </div>

            {PROMO_POINTS.map(({ id, title, body }) => {
              const Icon = POINT_ICONS[id];

              return (
                <div
                  key={id}
                  className="rounded-2xl border border-hairline bg-surface p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-900/5 text-brand-700 dark:bg-white/5 dark:text-accent-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-heading">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
