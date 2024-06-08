import PageHeading from "@/components/page-heading";
import Categories from "@/app/pages/courses/categories/categories";
import CategoryWiseCourses from "@/app/pages/courses/category-wise-course/category-wise-course";

const Courses = () => {
  return (
    <>
      <PageHeading label="কোর্স সমূহ" />
      <Categories />
      <CategoryWiseCourses />
    </>
  );
};

export default Courses;
