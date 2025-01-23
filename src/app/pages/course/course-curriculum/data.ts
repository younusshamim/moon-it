export type CourseSectionType = {
  title: string;
  modules: CourseModuleType[];
};

export type CourseModuleType = {
  title: string;
  lessons: CourseLesson[];
};

type CourseLesson = {
  title: string;
  details?: string;
};

const completeCourseData: CourseSectionType[] = [
  {
    title: "Course Introduction and Software Basics",
    modules: [
      {
        title: "Course Overview",
        lessons: [
          {
            title: "Course Structure",
            details:
              "Course advantages, disadvantages, outcomes, and student goals",
          },
          {
            title: "Technical Preparation",
            details: "PC configuration guidelines, software setup for AutoCAD",
          },
          {
            title: "Communication and Feedback",
            details: "Social media connectivity, Gmail setup, Q&A session",
          },
        ],
      },
      {
        title: "AutoCAD Interface Fundamentals",
        lessons: [
          {
            title: "User Interface Navigation",
            details:
              "Application Menu, Quick Access Toolbar, Ribbon, Working Space",
          },
          {
            title: "Basic Drawing Tools",
            details: "Line, Circle, Rectangle, Hatch tools and techniques",
          },
          {
            title: "Document Setup",
            details:
              "Unit Setup, Dimension Setup, Text Setup (Single Line & Multiline)",
          },
          {
            title: "Selection Techniques",
            details: "Window Selection, Cross Selection, Deselection methods",
          },
        ],
      },
    ],
  },
  {
    title: "Advanced Drawing and Modification Techniques",
    modules: [
      {
        title: "Comprehensive Drawing Tools",
        lessons: [
          {
            title: "Advanced Drawing Commands",
            details:
              "Arc, Area, Align, Array, Block, Break, Construction Line, Donut, Ellipse",
          },
          {
            title: "Geometric Manipulation",
            details:
              "Copy, Move, Rotate, Scale, Mirror, Stretch, Trim, Extend, Fillet, Chamfer",
          },
          {
            title: "Annotation and Management",
            details:
              "Dimension Styles, Text Editing, Layer Management, Line Types, Line Weights",
          },
        ],
      },
    ],
  },
  {
    title: "Architectural Design Fundamentals",
    modules: [
      {
        title: "Layer and Drawing Preparation",
        lessons: [
          {
            title: "Layer Management",
            details:
              "Creating, organizing, and managing layers for architectural drawings",
          },
        ],
      },
      {
        title: "Floor Plan Design",
        lessons: [
          {
            title: "Regulatory Compliance",
            details:
              "BNBC (Bangladesh National Building Code) Standards, FAR Calculation",
          },
          {
            title: "Room Design Principles",
            details:
              "Standard Room Dimensions, Architectural Graphical Symbols, Room Orientation",
          },
          {
            title: "Floor Plan Creation",
            details: "Drawing Templates, Design Rules, Plan Development",
          },
        ],
      },
      {
        title: "Comprehensive Architectural Drawings",
        lessons: [
          {
            title: "Ground and Roof Floor Plans",
            details: "Creating detailed ground floor and roof floor plans",
          },
          {
            title: "Architectural Elevations",
            details: "Designing and drafting four building elevations",
          },
          {
            title: "Architectural Sections",
            details:
              "Creating cross-sectional views and understanding section concepts",
          },
          {
            title: "Working Drawings",
            details:
              "Dimensioning, Window & Door Scheduling, Slab Layout Plans",
          },
        ],
      },
      {
        title: "Detailed Architectural Drawings",
        lessons: [
          {
            title: "Space-Specific Detailing",
            details: "Detailed drawings for Toilet, Kitchen, Stair Designs",
          },
          {
            title: "Additional Architectural Details",
            details: "Detailing for Doors, Windows, Grills, Gardens, Verandas",
          },
        ],
      },
    ],
  },
  {
    title: "Structural Design Drawings",
    modules: [
      {
        title: "Structural Drawing Fundamentals",
        lessons: [
          {
            title: "Structural Codes and Standards",
            details:
              "ACI (American Concrete Institute) and BNBC Structural Codes",
          },
        ],
      },
      {
        title: "Column and Foundation Drawings",
        lessons: [
          {
            title: "Column Layout",
            details: "Grid Placement, Column Marking, Dimensioning",
          },
          {
            title: "Column Scheduling",
            details: "Preparing comprehensive column schedules",
          },
          {
            title: "Footing Design",
            details: "Footing Layout, Dimensioning, Footing Schedules",
          },
        ],
      },
      {
        title: "Beam and Slab Detailing",
        lessons: [
          {
            title: "Beam Layout",
            details: "Beam Marking, Dimensioning, Long and Short Sections",
          },
          {
            title: "Slab Reinforcement",
            details: "Rebar Placement, Detailing, Reinforcement Rules",
          },
        ],
      },
      {
        title: "Advanced Structural Elements",
        lessons: [
          {
            title: "Specialized Structural Drawings",
            details:
              "Stair Reinforcement, Shear Wall, Underground Water Reservoir (UGWR), Overhead Water Tank (OHWT)",
          },
          {
            title: "Foundation Advanced Detailing",
            details: "Pile Cap Layout, Pile Scheduling, Pile Cap Sections",
          },
        ],
      },
    ],
  },
  {
    title: "Building Services Drawings",
    modules: [
      {
        title: "Electrical Systems",
        lessons: [
          {
            title: "Electrical Layout",
            details: "Adding Electrical Symbols, Preparing Wiring Layout",
          },
          {
            title: "Single Line Diagram",
            details: "Creating Comprehensive Electrical Single Line Diagrams",
          },
        ],
      },
      {
        title: "Plumbing Systems",
        lessons: [
          {
            title: "Plumbing Layout",
            details: "Adding Plumbing Symbols, Pipe Layout in Plans",
          },
          {
            title: "Plumbing Sections",
            details: "Drawing Detailed Plumbing Sections",
          },
        ],
      },
      {
        title: "Regulatory Submissions",
        lessons: [
          {
            title: "Authority Drawing Preparation",
            details: "RAUJK, Pouroshova, City Corporation Sheet Preparation",
          },
          {
            title: "Survey Data Processing",
            details:
              "Reading Survey Files, AutoCAD Input, Drawing Existing Information",
          },
        ],
      },
    ],
  },
];

export default completeCourseData;
