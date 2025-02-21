import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

const ParallaxSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.section ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.section>
  );
};

export default ParallaxSection;
