import { PROMO_POINTS } from "@/lib/content";
import SectionHeading from "../SectionHeading";

export default function CoursesPromo() {
  return (
    <section
      id="why-train-with-us"
      className="scroll-mt-20 bg-surface-2 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Why train with us"
          title="Two decades of accredited training, delivered on your site"
          intro="We have spent 20 years putting drivers and machine operators through their paces across Botswana. Our instructors have built their careers in the cab and on site, and they assess to the same standard every single time."
        />

        {/*
          One stat band instead of a row of cards — the hairlines are the gap
          itself (gap-px over a light background), so no per-item borders.
        */}
        <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {PROMO_POINTS.map(({ id, stat, title, body }) => (
            <div key={id} className="bg-brand-900 p-6 sm:p-7 dark:bg-brand-950">
              <dt className="font-mono text-3xl leading-none font-medium tracking-tight text-accent-400 sm:text-4xl">
                {stat}
              </dt>
              <dd className="mt-4">
                <span className="block font-display text-lg font-bold text-white">
                  {title}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-brand-100">
                  {body}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
