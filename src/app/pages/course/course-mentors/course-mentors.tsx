import MentorCard from "@/app/shared/mentor-card/mentor-card";
import Container from "@/components/container";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { variant1, } from "@/lib/animations/variants";
import { MentorType } from "@/types/mentor";

const CourseMentors = ({ mentors }: { mentors: MentorType[] }) => {
  return (
    <div className="bg-primary dark:bg-background2">
      <Container className="py-20">
        <h2 className="text-4xl text-white font-extrabold text-center mb-6">
          কোর্স ইনস্ট্রাক্টর
        </h2>

        <ScrollAnimation variants={variant1}>
          <div className="flex gap-3 sm:gap-8 justify-center items-stretch">
            {mentors.map((mentor, index) => (
              <div className="w-full h-auto sm:w-[250px]" key={mentor.name + index}>
                <MentorCard mentor={mentor} />
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default CourseMentors;
