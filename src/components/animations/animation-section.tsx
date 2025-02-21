"use client";

import { fadeInUp, staggerChildren } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

export const AnimatedSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerChildren}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedHeading = ({
  children,
  className,
  variants = fadeInUp,
}: {
  children: ReactNode;
  className?: string;
  variants?: any;
}) => (
  <motion.h2 variants={variants} className={cn("", className)}>
    {children}
  </motion.h2>
);

export const AnimatedText = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => (
  <motion.p variants={fadeInUp} className={cn("", className)}>
    {children}
  </motion.p>
);

export const AnimatedImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => (
  <motion.img
    variants={fadeInUp}
    src={src}
    alt={alt}
    className={`${className}`}
  />
);
