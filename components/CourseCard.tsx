import type { Course } from "@/lib/content";
import CourseArtwork from "./CourseArtwork";
import { ClockIcon, CheckIcon } from "./Icons";
import { WHATSAPP_LINK } from "@/lib/constants";
import Image from "next/image";

export default function CourseCard({ course }: { course: Course }) {
  const enquireLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    `Hello, I'd like to enquire about the "${course.title}" course.`,
  )}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-900/5">
      {/* Image on top, per the brief */}
      <div className="relative aspect-[16/8] w-full overflow-hidden">
        <Image
          alt="card image"
          src={course.img}
          fill
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-brand-990/70 px-3 py-1 font-mono text-xs font-medium text-white backdrop-blur-sm">
          Course {course.index}
        </span>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent-400 px-3 py-1 font-mono text-xs font-semibold text-brand-990">
          <ClockIcon className="h-3.5 w-3.5" />
          {course.duration}
        </span>

        <div className="flex items-end absolute inset-0 bg-gradient-to-b from-transparent via-neutral-700/40 to-neutral-900">
          <h3 className="w-full font-display text-xl font-bold text-white px-4  pb-6">
            {course.title}
          </h3>
        </div>
      </div>

      {/* Information */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
        <p className="mt-2 text-sm leading-relaxed text-body">
          Duration: <strong>{course.duration}</strong>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-body">
          {course.summary}
        </p>

        <div className="mt-5">
          <p className="eyebrow text-brand-700 dark:text-accent-400">
            What it covers
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
            {course.scope.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-body"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-900/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors bg-brand-900 hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-brand-50 dark:hover:bg-accent-400 dark:hover:text-brand-990"
          >
            Enquire about this course
          </a>
        </div>
      </div>
    </article>
  );
}
