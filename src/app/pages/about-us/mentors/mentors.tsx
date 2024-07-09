import Container from "@/components/container";
import mentorList from "@/data/mentor-list";
import React from "react";
import MentorCard from "../../../shared/mentor-card/mentor-card";
import Chairman from "../chairman/chairman";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { variant4 } from "@/lib/animations/variants";

const Mentors = () => {
  return (
    <div className="bg-primary dark:bg-background2">
      <Chairman />

      <Container className="py-20">
        <h2 className="text-4xl text-white font-extrabold text-center mb-6">
          ইন্ডাস্ট্রি এক্সপার্ট ইনস্ট্রাক্টর
        </h2>

        <div className="grid grid-cols-5 gap-8">
          {mentorList.map((mentor, index) => (
            <MentorCard mentor={mentor} key={mentor.name + index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Mentors;
