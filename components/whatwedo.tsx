// const features = [
//   {
//     label: (
//       <>
//         Virtualisation:<span className="font-medium">KVM</span>
//       </>
//     ),
//   },
//   { label: "1 IPv4 & 1 IPv6" },
//   { label: "1 Free Backup Slot" },
//   {
//     label: (
//       <>
//         Port:<span className="font-medium">1 GBit/s</span>
//       </>
//     ),
//   },
//   { label: "NVME SSD" },
//   { label: "SSH & Root Access" },
//   { label: "Modern Control Panel" },
//   { label: "Instantly Deployed" },
//   { label: "24/7 Support" },
//   { label: "Scalable Resources" },
// ];

const specs = [
  {
    label: "Defensive Driver Training",
    value: "BQA-aligned techniques to anticipate and avoid road hazards",
  },
  {
    label: "Fleet Safety Management",
    value: "Consultancy to help companies reduce risk and ensure compliance",
  },
  {
    label: "Professional Driver Development",
    value: "Up-skilling for heavy plant, 4x4, and specialized transport",
  },
  {
    label: "Compliance Audits",
    value: "Ensuring your team meets national road safety standards",
  },
];

export default function WhatWeDo() {
  return (
    <div className="w-full ">
      <section className="bg-background px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-2">
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <h1 className="flex gap-4 items-center font-display text-3xl font-bold text-brand-900 ">
                <span
                  aria-hidden
                  className="hidden h-8 w-1 shrink-0 rounded bg-accent-400 sm:block"
                />
                What We Do
              </h1>
              <p className="text-base leading-relaxed text-body">
                At <strong>E&E Driver Training Consultancy</strong>, for the
                past 20 years we have helped individuals and businesses improve
                their driving skills, promote safer roads, and build more
                efficient fleets.
              </p>
              <p className="text-base leading-relaxed text-body">
                As a BQA (Botswana Qualifications Authority) Accredited
                institution, we deliver high-quality training that meets
                nationally recognised standards. Although we are based in
                Gaborone, we provide training nationwide by coming to your
                location.
              </p>
            </div>

            {/* Right Specs Card */}
            <div className="w-full rounded-2xl border border-gray-600 bg-yellow-600/5 dark:bg-surface p-6 shadow-lg lg:flex-1">
              <h3 className="mb-2 font-display text-xl font-semibold ">
                Our Core Services
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="min-w-[160px] dark:bg-surface-2 rounded-2xl border border-gray-600 bg-neutral-100 p-5 shadow-lg"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wide text-brand-900 dark:text-brand-300">
                        {spec.label}
                      </span>
                    </div>
                    <p className={` text-sm leading-relaxed text-body  `}>
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
