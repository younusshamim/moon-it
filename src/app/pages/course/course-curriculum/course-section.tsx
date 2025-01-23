import React from "react";
import { Accordion } from "@/components/ui/accordion";
import CourseModule from "./course-module";
import { CourseSectionType } from "./data";
import { GraduationCap } from "lucide-react";

interface CourseSectionProps {
  section: CourseSectionType;
  sectionIndex: number;
}

const CourseSection: React.FC<CourseSectionProps> = React.memo(
  ({ section, sectionIndex }) => {
    return (
      <section className="bg-card border rounded-lg p-6 space-y-6 shadow-lg transition-all duration-300 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-center text-foreground flex items-center justify-center">
          <GraduationCap className="mr-3 h-9 w-9 text-secondary" />
          {section.title}
        </h3>
        <Accordion type="multiple" className="w-full space-y-4">
          {section.modules.map((module, modIndex) => (
            <CourseModule
              key={`module-${sectionIndex}-${modIndex}`}
              module={module}
              sectionIndex={sectionIndex}
              moduleIndex={modIndex}
            />
          ))}
        </Accordion>
      </section>
    );
  }
);

CourseSection.displayName = "CourseSection";

export default CourseSection;
