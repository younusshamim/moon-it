import React from "react";
import { Accordion } from "@/components/ui/accordion";
import CourseModule from "./CourseModule";
import { CourseSectionType } from "./data";

interface CourseSectionProps {
  section: CourseSectionType;
  sectionIndex: number;
}

const CourseSection: React.FC<CourseSectionProps> = React.memo(
  ({ section, sectionIndex }) => {
    return (
      <section className="bg-card border rounded-lg p-6 space-y-6">
        <h3 className="text-2xl font-bold text-center text-foreground">
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
