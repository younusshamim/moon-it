import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import MentorCard from "@/app/shared/mentor-card/mentor-card";
import { MentorType } from "@/lib/types/mentor";

const CourseMentors = ({ mentors }: { mentors: MentorType[] }) => {
  return (
    <div className="bg-primary dark:bg-background2">
      <Container className="py-20">
        <h2 className="text-4xl text-white font-extrabold text-center mb-6">
          কোর্স ইনস্ট্রাক্টর
        </h2>

        <div className="flex gap-8 justify-center">
          {mentors.map((mentor, index) => (
            <div className="w-[250px]" key={mentor.name + index}>
              <MentorCard mentor={mentor} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CourseMentors;
