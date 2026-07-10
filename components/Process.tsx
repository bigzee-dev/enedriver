import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Enquire",
    body: "Send us your fleet size, licence categories and goals over WhatsApp, email or a call.",
  },
  {
    n: "02",
    title: "Scope & schedule",
    body: "We assess your needs, recommend the right courses and agree dates that suit your operation.",
  },
  {
    n: "03",
    title: "On-site training",
    body: "Our instructors come to your premises and train your team on your own vehicles and plant.",
  },
  {
    n: "04",
    title: "Assess & certify",
    body: "Drivers are assessed and certified, giving you audit-ready records of competency.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How engagement works"
          title="From first enquiry to certified drivers"
          intro="A straightforward, four-step process designed to fit around your operational schedule."
        />

        <ol className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {STEPS.map((step, i) => (
            <li key={step.n} className="relative">
              {/* connecting road line between steps (desktop) */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-14 right-0 top-6 hidden h-1 lg:block"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to right, var(--color-accent-400) 0 12px, transparent 12px 22px)",
                  }}
                />
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-900 font-mono text-lg font-medium text-accent-400 dark:bg-surface-3">
                {step.n}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-heading">
                {step.title}
              </h3>
              <p className="mt-2 pr-4 text-sm leading-relaxed text-body">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
