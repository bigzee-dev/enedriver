import CourseList from "@/components/courses/CourseList";
import CoursesPromo from "@/components/courses/CoursesPromo";
import CourseHeader from "@/components/courses/header";

export default function Courses() {
  return (
    <>
      <CourseHeader />
      <CourseList />
      <CoursesPromo />
    </>
  );
}
