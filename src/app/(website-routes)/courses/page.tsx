"use client";

import Categories from "@/app/pages/courses/categories/categories";
import CategoryWiseCourses from "@/app/pages/courses/category-wise-course/category-wise-course";
import PageHeading from "@/components/page-heading";
import { useRef } from "react";

const Courses = () => {
  const courseRef = useRef({});

  return (
    <>
      <PageHeading label="কোর্স সমূহ" />
      <Categories courseRef={courseRef} />
      <CategoryWiseCourses courseRef={courseRef} />
    </>
  );
};

export default Courses;
