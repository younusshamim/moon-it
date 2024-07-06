import Container from "@/components/container";
import CourseDetails from "@/app/pages/course/course-details/course-details";
import CourseMentors from "@/app/pages/course/course-mentors/course-mentors";
import ServicesSection from "@/app/shared/services-section/services-section";
import courseList from "@/data/course-list";
import mentorList from "@/data/mentor-list";
import Shape1 from "@/components/shapes/shape1"

const Course = ({ params }: { params: { id: string; } }) => {
  const id = parseInt(params.id);
  const targetCourse = courseList.find((course) => course.id === id);
  const mentors = mentorList.filter((mentor) =>
    targetCourse?.metorIds.includes(mentor.id)
  );

  if (!targetCourse) {
    return <p>Course not found</p>;
  }

  return (
    <>
      <CourseDetails course={targetCourse} />

      <Container className="pt-10 pb-20">
        <ServicesSection servicesData={targetCourse?.services} />
      </Container>

      <CourseMentors mentors={mentors} />
    </>
  );
};

export default Course;
