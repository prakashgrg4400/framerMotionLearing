export const slideup = (delay) => {
    return {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay } },
    };
};
export const slideleft = (delay) => {
    return {
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
    };
};

export const slideright = (delay) => {
    return {
        initial: { x: -50, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
    };
};
