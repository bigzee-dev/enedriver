export default function AboutHeader() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
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

        {/* Decorative polygon — bottom right */}
        <polygon
          points="92%,75% 95%,68% 98%,75% 95%,82%"
          fill="none"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.2"
        />

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
      {/* Ambient brand glow — keeps the flat dark band from reading as a slab. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 h-60 w-96 rounded-full bg-brand-700/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-60 w-80 rounded-full bg-accent-400/10 blur-3xl"
      />

      <div className="flex justify-center relative mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-16">
        <h1 className="font-display text-4xl font-bold text-white sm:text-6xl">
          About Us
        </h1>
      </div>
    </section>
  );
}
