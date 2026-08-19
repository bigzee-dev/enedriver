import { COURSES } from "@/lib/content";
import { FaFileCircleCheck } from "react-icons/fa6";
import { TargetMarkets } from "@/lib/content";
import CourseCard from "../CourseCard";
import SectionHeading from "../SectionHeading";

export default function CourseList() {
  return (
    <>
      <section
        id="courses"
        className="scroll-mt-20 bg-surface pb-20 pt-12 sm:pb-24 sm:pt-12"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <SectionHeading
            eyebrow="Checkout our Courses"
            title="Training We Offer"
            intro="Four focused programs covering every licence category and specialist discipline — each delivered on your site, to your schedule."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-10">
            <p className="eyebrow font-sans text-base text-body font-medium dark:text-accent-400 border-b border-brand-700 pb-0.5">
              <FaFileCircleCheck className="mr-2 inline-block h-8 w-8 text-brand-900 dark:text-accent-400" />
              Our Courses are suitable for:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {TargetMarkets.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-hairline bg-surface-2 px-2.5 py-1 text-xs font-medium text-body"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="lane-line" aria-hidden />
    </>
  );
}
