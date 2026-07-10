import { COURSES } from "@/lib/content";
import type { Course } from "@/lib/content";
import { TargetMarkets } from "@/lib/content";
import CourseCard from "./CourseCard";
import SectionHeading from "./SectionHeading";

export default function Courses({ course }: { course: Course }) {
  return (
    <section
      id="courses"
      className="scroll-mt-20 bg-surface pb-20 pt-12 sm:pb-24 sm:pt-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Short courses"
          title="Accredited training programmes"
          intro="Four focused programmes covering every licence category and specialist discipline — each delivered on your site, to your schedule."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="mt-8">
          <p className="eyebrow font-display text-base text-body font-medium dark:text-accent-400 underline">
            Our Courses are suitable for:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {TargetMarkets.map((item) => (
              <span
                key={item}
                className="rounded-full border border-hairline bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
