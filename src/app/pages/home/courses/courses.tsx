"use client";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import PrimaryButton from "@/components/primary-button";
import categories from "@/data/categories";
import courseList from "@/data/course-list";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Categories from "./categories";
import CourseCard from "./course-card";
import Link from "next/link";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const courses = courseList.filter(
    (course) => course.category === selectedCategory
  );

  return (
    <div className="bg-card">
      <Container className="py-20">
        <h2 className="text-4xl text-foreground-dark font-extrabold  text-center mb-[6px]">
          অসাধারন <GradientText>কোর্স সমূহ</GradientText>
        </h2>
        <p className="font-semibold mb-6 text-center">
          প্রতিটি কোর্সের সিলেবাস ব্যাসিক টু এডভান্স লেভেল পর্যন্ত সাজানো
          হয়েছে।
        </p>

        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        <div className="grid grid-cols-4 gap-x-5 gap-y-6">
          {courses.map((course, index) => {
            return <CourseCard course={course} key={course.name + index} />;
          })}
        </div>

        <Link href="/courses">
          <PrimaryButton
            size="lg"
            className="mx-auto mt-10"
            iconRight={<FaArrowRight />}
          >
            সব কোর্স দেখুন
          </PrimaryButton>
        </Link>
      </Container>
    </div>
  );
};

export default Courses;