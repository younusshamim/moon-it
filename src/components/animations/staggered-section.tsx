"use client";

import { motion, useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";

const StaggeredSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const wrappedChildren = React.Children.map(children, (child) => (
    <motion.div variants={itemVariants}>{child}</motion.div>
  ));

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {wrappedChildren}
    </motion.section>
  );
};

export default StaggeredSection;
