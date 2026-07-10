import { BadgeIcon, ShieldCheckIcon, PinIcon, ClockIcon } from "./Icons";

const ITEMS = [
  {
    icon: BadgeIcon,
    title: "BQA Accredited",
    detail: "Botswana Qualifications Authority",
  },
  {
    icon: ShieldCheckIcon,
    title: "HRDC Registered",
    detail: "Human Resource Development Council",
  },
  {
    icon: PinIcon,
    title: "Mobile & on-site",
    detail: "We train at your premises",
  },
  {
    icon: ClockIcon,
    title: "20+ years",
    detail: "Government & industry experience",
  },
];

export default function AccreditationBar() {
  return (
    <div className="border-y border-ink-200/60 bg-cream-100/50 py-5 dark:border-ink-800/70 dark:bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-5 text-[12px] uppercase tracking-[0.3em] text-ink-500 dark:text-ink-300">
          <span className="block sm:hidden font-mono shrink-0">About ⟶</span>
          <span className="hidden sm:block font-mono shrink-0">About us ⟶</span>
          <div className="mask-fade-x overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
              {[...Array(2)].flatMap((_, dup) =>
                [
                  "BQA Accredited",
                  "HRDC Registered",
                  "+20 Years Experience",
                  "Mobile & On-site Training",
                ].map((name) => (
                  <span
                    key={`${dup}-${name}`}
                    className="font-display text-xl font-medium tracking-tight text-ink-500 dark:text-ink-300"
                  >
                    {name}
                  </span>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
