"use client";

import { ReactNode } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface SpringyScrollProps
  extends React.ComponentProps<typeof ScrollAnimation> {
  children: ReactNode;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

const SpringyScroll = ({
  children,
  stiffness = 100,
  damping = 10,
  mass = 1,
  ...props
}: SpringyScrollProps) => {
  return (
    <ScrollAnimation
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness,
        damping,
        mass,
      }}
      {...props}
    >
      {children}
    </ScrollAnimation>
  );
};

export default SpringyScroll;
