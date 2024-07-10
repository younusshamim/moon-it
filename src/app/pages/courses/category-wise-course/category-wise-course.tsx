import React from "react";
import Container from "@/components/container";
import categories from "@/data/categories";
import courseList from "@/data/course-list";
import CourseCard from "../../home/courses/course-card";

const CategoryWiseCourses = () => {
  return (
    <Container className="pt-10 pb-20 flex flex-col gap-16">
      {categories.map((category, index) => {
        const courses = courseList.filter(
          (item) => item.category === category.name
        );

        return (
          <div
            key={category.label + index}
            className="bg-card shadow-sm p-5 xl:p-10 rounded-card"
          >
            <h1 className="text-4xl text-foreground-dark font-extrabold mb-5 pt-3 xl:pt-0">
              {category.label}
            </h1>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-x-5 gap-y-6">
              {courses.map((course, index) => {
                return <CourseCard course={course} key={course.name + index} />;
              })}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default CategoryWiseCourses;
