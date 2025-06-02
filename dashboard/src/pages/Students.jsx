import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

import Sidebar from "../components/Sidebar";
// import Student from "./models/student";
import TransitionVariants from "../animation/page";

const Students = () => {
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        document.title = "Студенты | Epic English School"
    }, [])

    const handleClick = () => {
        navigate("./create");
    }

    // const studentItems = [];

    // for (let i = 0; i < 15; i++) {
    //     studentItems.push(<Student />)
    // }

    return (
        <div className="section">
            <Sidebar />
            <motion.div key={location.pathname} variants={TransitionVariants} initial="initial" animate="in" exit="out" className="page">
            <div className="section-body">
                <div className="students">
                    <div className="block-section block-section-row">
                        <div className="add">
                            <button type="button" onClick={() => handleClick()}><span className="material-symbols-outlined">person_add</span></button>
                        </div>
                        <div className="search">
                            <button type="button"><span className="material-symbols-outlined">search</span></button>
                        </div>
                        <div className="filter">
                            <button type="button"><span className="material-symbols-outlined">filter_alt</span></button>
                        </div>
                    </div>
                    <div className="block-section students-list">
                        {/* {studentItems} */}
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default Students;