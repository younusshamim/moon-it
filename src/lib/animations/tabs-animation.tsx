'use client'

import { motion, Variants } from 'framer-motion';
import { cn } from '../utils';

interface PropsType {
    children: JSX.Element;
    selected: any
    className?: string;
}

const TabsAnimation = ({ children, selected, className, }: PropsType) => {
    return (
        <motion.div
            className={cn('', className)}
            key={selected ? selected : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default TabsAnimation;