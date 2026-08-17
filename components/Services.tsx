import Image from "next/image";
import { SERVICES } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our services"
          title="Beyond the classroom"
          intro="Alongside accredited training we keep fleets moving — supplying drivers, moving vehicles and clearing the administration that slows operators down."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ id, title, summary, img }) => (
            <article
              key={id}
              className="group relative min-h-[26rem] overflow-hidden rounded-2xl border border-hairline"
            >
              <Image
                src={img}
                alt={title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Transparent at the top, deepening to near-black at the bottom
                  so the copy stays legible over any photograph. */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90"
              />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span aria-hidden className="lane-line mb-4 block w-12" />
                <h3 className="font-display text-xl font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100">
                  {summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
