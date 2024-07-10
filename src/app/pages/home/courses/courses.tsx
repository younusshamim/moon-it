"use client";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import PrimaryButton from "@/components/primary-button";
import categories from "@/data/categories";
import courseList from "@/data/course-list";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import CourseCard from "./course-card";
import Link from "next/link";
import TabsAnimation from "@/lib/animations/tabs-animation";
import Tabs from "@/components/tabs";
import getOptions from "@/lib/utils/get-options";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | number>(categories[0].name);
  const courses = courseList.filter(
    (course) => course.category === selectedCategory
  );
  const tabOptions = getOptions(categories, "label", "name");

  return (
    <div className="bg-card border-b border-border">
      <Container className="py-20">
        <h2 className="text-4xl text-foreground-dark font-extrabold  text-center mb-[6px]">
          অসাধারন <GradientText>কোর্স সমূহ</GradientText>
        </h2>
        <p className="font-semibold mb-10 text-center">
          প্রতিটি কোর্সের সিলেবাস ব্যাসিক টু এডভান্স লেভেল পর্যন্ত সাজানো
          হয়েছে।
        </p>

        <Tabs
          tabOptions={tabOptions}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />

        <TabsAnimation selected={selectedCategory}>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-x-5 gap-y-6">
            {courses.map((course, index) => {
              return <CourseCard course={course} key={course.name + index} />;
            })}
          </div>
        </TabsAnimation>

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
