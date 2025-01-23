import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import courseCurriculumData, { CourseSectionType } from "./data";
import CourseSection from "./course-section";

const CourseCurriculum: React.FC = () => {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-4xl text-foreground-dark font-extrabold  text-center mb-4">
          কোর্স <GradientText>কারিকুলাম</GradientText>
        </h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {courseCurriculumData.map(
            (section: CourseSectionType, index: number) => (
              <CourseSection
                key={index}
                section={section}
                sectionIndex={index}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default CourseCurriculum;
