import CategoryAndCourseWrapper from "@/app/pages/courses/category-and-course-wrapper/category-and-course-wrapper";
import PageHeading from "@/components/page-heading";

const Courses = () => {
  return (
    <>
      <PageHeading label="কোর্স সমূহ" />
      <CategoryAndCourseWrapper />
    </>
  );
};

export default Courses;
