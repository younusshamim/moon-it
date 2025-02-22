"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode, ComponentProps } from "react";

interface ScrollAnimationProps extends ComponentProps<typeof motion.div> {
  children: ReactNode;
  animate?: object;
}

const ScrollAnimation = ({
  children,
  viewport = { once: true },
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 0.5 },
  ...props
}: ScrollAnimationProps) => {
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
