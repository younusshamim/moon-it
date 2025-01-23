import React from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CourseModuleType } from "./data";

interface CourseModuleProps {
  module: CourseModuleType;
  sectionIndex: number;
  moduleIndex: number;
}

const CourseModule: React.FC<CourseModuleProps> = React.memo(
  ({ module, sectionIndex, moduleIndex }) => {
    return (
      <AccordionItem
        value={`module-${sectionIndex}-${moduleIndex}`}
        className="bg-background rounded-lg border overflow-hidden"
      >
        <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4 py-3">
          <div className="flex items-center space-x-3">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
              {moduleIndex + 1}
            </span>
            <span className="text-foreground">{module.title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <hr className="border-secondary" />

          <div className="p-4">
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              {module.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex} className="text-sm">
                  <span className="font-medium text-foreground">
                    {lesson.title}:
                  </span>{" "}
                  {lesson.details}
                </li>
              ))}
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }
);

CourseModule.displayName = "CourseModule";

export default CourseModule;
