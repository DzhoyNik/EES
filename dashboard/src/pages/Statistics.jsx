import React from "react";
import Sidebar from "../components/Sidebar";
import "../css/statistics/style.css"; 
import { motion } from "framer-motion";
import TransitionVariants from "../animation/page";
import { useLocation } from "react-router-dom";

const Statistics = () => {
    const location = useLocation()

    return(
        <div className="section">
            <Sidebar />
            <motion.div key={location.pathname} variants={TransitionVariants} initial="initial" animate="in" exit="out" >
                <div className="section-body">
                    <div className="statistics">
                        <div className="block-section statistics-general">
                            <h2>Общая статистика:</h2>
                            <div className="statistics-list">
                                <div className="general-section">
                                    <h2>Студенты</h2>
                                    <p>Всего: 2519</p>
                                    <p>За сегодня пришло: 521</p>
                                </div>
                                <div className="general-section">
                                    <h2>Курсы</h2>
                                    <p>Всего: 12</p>
                                    <p>Активны: 8</p>
                                </div>
                                <div className="general-section">
                                    <h2>Преподаватели</h2>
                                    <p>Всего: 19</p>
                                </div>
                                <div className="general-section">
                                    <h2>Финансы</h2>
                                    <p>За месяц: 175 000 руб.</p>
                                    <p>Всего: 500 000 руб.</p>
                                </div>
                            </div>
                        </div>
                        <div className="block-section statistics-courses">
                            <h2>Статистика по курсам:</h2>
                        </div>
                        <div className="block-section statistics-teachers">
                            <h2>Статистика по преподавателям:</h2>
                        </div>
                        <div className="block-section statistics-finance">
                            <h2>Финансовая статистика:</h2>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Statistics;