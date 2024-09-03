import CourseDetails from "@/app/pages/course/course-details/course-details";
import CourseMentors from "@/app/pages/course/course-mentors/course-mentors";
import ServicesSection from "@/app/shared/services-section/services-section";
import Container from "@/components/container";
import courseList from "@/data/course-list";
import mentorList from "@/data/mentor-list";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PropsTypes = {
  params: { id: string; }
}

export async function generateStaticParams() {
  return courseList.map((course) => ({ params: { id: course.id.toString() } }));
}

export async function generateMetadata({ params }: PropsTypes): Promise<Metadata> {
  const id = parseInt(params.id);
  const targetCourse = courseList.find((course) => course.id === id);
  return {
    title: targetCourse?.name,
    description: `${targetCourse?.description1} ${targetCourse?.description2}`,
    openGraph: {
      images: {
        url: targetCourse?.image || "",
        width: 1200,
        height: 630,
        alt: targetCourse?.name,
      }
    }
  }
}

const Course = ({ params }: PropsTypes) => {
  const id = parseInt(params.id);
  const targetCourse = courseList.find((course) => course.id === id);
  const mentors = mentorList.filter((mentor) =>
    targetCourse?.metorIds.includes(mentor.id)
  );

  if (!targetCourse) {
    return notFound();
  }

  return (
    <>
      <CourseDetails course={targetCourse} />

      <Container className="pt-10 pb-20">
        <ServicesSection servicesData={targetCourse?.services} />
      </Container>

      {mentors.length > 0 && <CourseMentors mentors={mentors} />}
    </>
  );
};

export default Course;
