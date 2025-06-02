const viewLinkBack = {
    initial: {
        scale: 0,
        height: 0,
        opacity: 0,
    },
    in: {
        scale: [1.3, 1],
        height: "auto",
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    out: {
        scale: [1.2, 0],
        height: 0,
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    }
}

export default viewLinkBack;