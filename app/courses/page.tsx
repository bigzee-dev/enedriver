import type { Metadata } from "next";

import CourseList from "@/components/courses/CourseList";
import CoursesPromo from "@/components/courses/CoursesPromo";
import CourseHeader from "@/components/courses/header";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Driver Training Courses — ${COMPANY_NAME}`,
  description:
    "BQA accredited short courses in advanced defensive driving, emergency & VIP vehicle operation, commercial vehicle handover and earth-moving machine operation — three days each, delivered on your site anywhere in Botswana.",
  alternates: { canonical: "/courses" },
};

export default function Courses() {
  return (
    <>
      <CourseHeader />
      <CourseList />
      <CoursesPromo />
    </>
  );
}
