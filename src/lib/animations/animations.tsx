// type 1 
export const animation1 = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
}
export const animation2 = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    },
}

// type 2
export const animation3 = {
    initial: {
        y: -100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    },
}
export const animation4 = {
    initial: {
        y: -200,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            type: "spring",
            bounce: 0.4,
        }
    },
}