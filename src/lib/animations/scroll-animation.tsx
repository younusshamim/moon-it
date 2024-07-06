'use client'

import { motion, Variants } from 'framer-motion';
import { cn } from '../utils';

interface PropsType {
    children: JSX.Element;
    variants: Variants;
    className?: string;
}

const ScrollAnimation = ({ children, className, variants }: PropsType) => {
    return (
        <motion.div
            className={cn("card-container", className)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div
                className="card"
                variants={variants}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default ScrollAnimation;