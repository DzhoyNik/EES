import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

import "../css/user/style.css"
import Sidebar from "../components/Sidebar";
import TransitionVariants from "../animation/page";
import EmployeeList from "../components/EmployeeList";
import { Context } from "..";
import { fetchEmployees } from "../http/employeeAPI";

const Employees = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { employee } = useContext(Context)

    useEffect(() => {
        document.title = "Преподаватели | Epic English School"
        fetchEmployees().then(data => employee.setEmployee(data))
    }, [])

    const handleClick = () => {
        navigate("./create");
    }

    return (
        <div className="section">
            <Sidebar />
            <motion.div key={location.pathname} variants={TransitionVariants} initial="initial" animate="in" exit="out">
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
                        <div className="block-section">
                            <EmployeeList />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Employees;