import Image from "next/image";

import { OUR_MISSION } from "@/lib/content";

/**
 * The mission statement. A two-column split — copy left, photography right —
 * with the dashed centre-line running the gutter so the two halves read as one
 * road rather than two stacked blocks. The offset accent frame behind the photo
 * gives the band depth after the flat dark pillars above it.
 */
export default function OurMission() {
  const [lead, ...paragraphs] = OUR_MISSION;

  return (
    <section id="our-mission" className="scroll-mt-20 py-12 sm:py-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Copy */}
          <div className="space-y-6">
            <div className="mt-3 flex items-center gap-4">
              <h2 className="font-display text-3xl font-semibold tracking-wide sm:text-4xl">
                Our Mission
              </h2>
            </div>

            <p className="text-base leading-relaxed text-ink-800 ">{lead}</p>
          </div>

          {/* Photography */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden ">
              <Image
                src="/mission.jpg"
                alt="A safety officer in a high-visibility vest overseeing an excavator and haul truck on a worksite"
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
