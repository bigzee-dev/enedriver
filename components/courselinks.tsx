import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { ArrowRightIcon } from "./Icons";

const features = ["Proudly serving Maun and businesses across Botswana"];

export default function CourseLinks() {
  return (
    <section className="relative w-full">
      <Image
        src="/71715.jpg"
        alt="Zima Packaging — quality products since 2013"
        fill
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 z-0 bg-black/50" />
      <div className="relative z-10 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-4 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              {/* Heading */}
              <SectionHeading
                eyebrow="Short courses"
                title="Our Training Programmes"
                intro="Four focused programmes covering every licence category and specialist discipline — each delivered on your site, to your schedule."
                tone="inverted"
              />
            </div>

            <div className="mb-4 lg:col-span-4 lg:mb-0 lg:text-right">
              <div className="flex items-baseline justify-end gap-2 text-accent-400">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="font-display text-2xl leading-none">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-display tracking-editorial mt-3 flex justify-end text-3xl font-medium text-neutral-400">
                <span className="font-mono">4.9</span>
                <span className="text-ink-500"> / 5</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-8">
          <div className="overflow-hidden rounded-xl border border-neutral-500">
            <div className="grid grid-cols-1">
              {/* ── Right — Image ── */}
              <div className="relative  flex min-h-[320px] items-center justify-center bg-black/20  lg:min-h-0">
                {/* Gradient overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent lg:from-black/20" />
                {/* Stats row */}
                <div className="grid grid-cols-2 gap-4 py-5">
                  {COURSES.map((course) => (
                    <div
                      key={course.id}
                      className="relative flex h-full justify-center items-center rounded-sm border border-neutral-400 bg-neutral-700/60 px-5 py-4 text-center backdrop-blur-md first:pl-0 last:pr-0"
                    >
                      {/* Fixed at the top of every card so the numbers line up
                          regardless of how many lines the title wraps to. */}
                      <span className="absolute top-0 left-0 flex h-6 w-6 shrink-0 items-center justify-center rounded-tl-sm rounded-br-sm bg-white/60 font-mono text-sm font-semibold text-brand-990">
                        {course.index}
                      </span>
                      <p
                        className={`font-sans mt-1 text-base  text-neutral-200`}
                      >
                        {course.title}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Floating brand stamp */}
                {/* <div className="absolute bottom-6 right-6 border border-neutral-700/60 bg-black/70 p-5 backdrop-blur-sm">
                  <p className="font-content text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                    Established
                  </p>
                  <p className={`${lora.className} mt-1 text-4xl font-semibold text-red-600`}>
                    2013
                  </p>
                  <div className="mt-2 h-px bg-gradient-to-r from-blue-700 via-red-600 to-yellow-500" />
                  <p className="mt-2 font-content text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Maun, Botswana
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/courses"
              className="border border-neutral-400 inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800 uppercase"
            >
              Learn more about our courses
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
