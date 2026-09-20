import Image from "next/image";

import { OUR_VISION } from "@/lib/content";

/**
 * The vision statement — the mirror of OurMission: photography left, copy
 * right. Source order stays copy-then-photo so the small-screen stack still
 * leads with the heading.
 */
export default function OurVision() {
  return (
    <section id="our-vision" className="scroll-mt-20 py-16 sm:py-16 sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Copy */}
          <div className="order-1 space-y-6 lg:order-2">
            <div className="mt-3 flex items-center gap-4">
              <h2 className="font-display text-3xl font-semibold tracking-wide sm:text-4xl">
                Our Vision
              </h2>
            </div>

            {OUR_VISION.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-body"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Photography */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/vision.jpg"
                alt="An aerial view of a row of commercial fleet vehicles lined up in late afternoon light"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
