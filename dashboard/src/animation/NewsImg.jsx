const NewsImg = {
    initial: {
        y: "5vh",
        opacity: 0.8,
    },
    in: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1.5,
            ease: "easeOut"
        }
    },
    out: {
        y: "5vh",
        opacity: 0.8,
        transition: {
            duration: 1.5,
            ease: "easeIn"
        }
    }
}

export default NewsImg;