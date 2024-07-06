import { Variants } from "framer-motion";

export const variant1: Variants = {
    offscreen: {
        opacity: 0,
        y: 300
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    }
};

export const variant2: Variants = {
    offscreen: {
        opacity: 0,
        y: 200
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.8,
        },
    }
};

export const variant3: Variants = {
    offscreen: {
    },
    onscreen: {
        rotate: -5,
        transition: {
            type: "spring",
            duration: 0.8,
        },
    }
};