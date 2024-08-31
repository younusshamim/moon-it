import CategoryAndCourseWrapper from "@/app/pages/courses/category-and-course-wrapper/category-and-course-wrapper";
import PageHeading from "@/components/page-heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Courses'
}

const Courses = () => {
  return (
    <>
      <PageHeading label="কোর্স সমূহ" />
      <CategoryAndCourseWrapper />
    </>
  );
};

export default Courses;
