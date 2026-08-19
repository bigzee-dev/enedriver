import type { Course } from "@/lib/content";

import { CheckIcon } from "./Icons";
import { BsFillClockFill } from "react-icons/bs";

import { WHATSAPP_LINK } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

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

        <div className="flex items-end absolute inset-0 bg-gradient-to-b from-transparent via-neutral-700/40 to-neutral-900">
          <h3 className="w-full font-display text-xl font-bold text-white px-4  pb-6">
            {course.title}
          </h3>
        </div>
      </div>

      {/* Information */}
      <div className="flex flex-1 flex-col px-6 pb-4 pt-2">
        <p className="mt-2 text-sm leading-relaxed text-white bg-green-700 rounded-2xl px-1.5 py-0.5 inline-flex items-center gap-2 max-w-max">
          <BsFillClockFill className="h-4 w-4 text-yellow-300" />{" "}
          <strong>{course.duration}</strong>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-body">
          {course.summary}
        </p>

        <div className="mt-4">
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

        <div className="mt-auto pt-4">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-900/20 px-5 py-3 text-sm font-semibold text-white transition-colors bg-brand-900 hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-brand-50 dark:hover:bg-accent-400 dark:hover:text-brand-990"
          >
            Enquire about this course
          </Link>
        </div>
      </div>
    </article>
  );
}
