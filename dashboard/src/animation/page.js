const TransitionVariants = {
    initial: {
        x: "20vw",
        opacity: 0,
    },
    in: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeInOut"
        }
    },
    out: {
        x: "-20vw",
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: "easeInOut"
        }
    }
};

export default TransitionVariants;