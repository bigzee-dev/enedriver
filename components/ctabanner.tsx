import Image from "next/image";

export default function CtaBanner() {
  return (
    <div className="max-w-6xl mx-auto reveal relative overflow-hidden rounded-3xl p-10 md:p-14 bg-accent-600">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cta-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20 0 L40 20 L20 40 L0 20 Z"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <Image
          src="/traffic-cone.png"
          alt="Traffic cone"
          width={80}
          height={80}
          className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 object-contain"
        />
        <div className="flex-1">
          <h3 className="font-display text-3xl md:text-4xl font-extrabold text-[#0A0A0A]/90">
            Ready to start your
            <br />
            Training?
          </h3>
          <p className="mt-3 text-[#0A0A0A]/70 text-base font-medium italic">
            Checkout our range of courses. From light vehicles to extra
            heavy-duty trucks and earth-moving machines — one accredited partner
            for the whole fleet.
          </p>
        </div>
        <a
          href="#courses"
          className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-[#0A0A0A]/90 text-white/80 font-display font-bold text-base rounded-full hover:bg-[#1A1A1A] transition-colors duration-300"
        >
          View Courses
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
