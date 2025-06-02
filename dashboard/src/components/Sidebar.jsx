import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import "../css/sidebar.css";
import Logo from "../img/logo.png";
import viewLinkBack from "../animation/sidebar"
import { Context } from "..";
import { AUTH_ROUTE } from "../utils/consts";

const Sidebar = () => {
    const location = useLocation();
    const { employee } = useContext(Context)
    const navigate = useNavigate();
    const { id } = useParams();
    const COURSES_ROUTE = `/courses/${id}`;

    const logOut = () => {
        employee.setEmployee({})
        employee.setIsAuth(false)
        navigate(AUTH_ROUTE)
        localStorage.clear()
    }

    const specificPage = [
        "/main/",
        "/courses/",
        "/students/",
        "/employees/",
    ]

    const isSpecificPage = specificPage.some(path => location.pathname.startsWith(path))
    const isSpecificPageCourse = location.pathname.startsWith("/courses/")

    const handleClickBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="sidebar">
            <div className="sidebar-body">
                <div className="sidebar-logo">
                    <img src={Logo} alt="" />
                </div>
                <hr />
                {isSpecificPage && (
                    <motion.div key={location.pathname} variants={viewLinkBack} initial="initial" animate="in" exit="out">
                        <Link to="#" onClick={handleClickBack} className="sidebar-section">
                            <span className="material-symbols-outlined">arrow_back_ios</span>Назад
                        </Link>
                    </motion.div>
                )}

                {!isSpecificPageCourse && (
                    <>
                        <NavLink to="/main" className="sidebar-section">
                            <span className="material-symbols-outlined">newspaper</span>Новости
                        </NavLink>
                        {/* <NavLink to="/lesson" className="sidebar-section">
                            <span className="material-symbols-outlined">school</span>Урок
                        </NavLink> */}
                        <NavLink to="/courses" className="sidebar-section">
                            <span className="material-symbols-outlined">database</span>Курсы
                        </NavLink>
                        <NavLink to="/students" className="sidebar-section">
                            <span className="material-symbols-outlined">group</span>Студенты
                        </NavLink>
                    </>
                )}

                {isSpecificPageCourse && (
                    <>
                        <NavLink to={COURSES_ROUTE} className="sidebar-section">
                            <span className="material-symbols-outlined">tune</span>Настройки
                        </NavLink>
                        <NavLink to={COURSES_ROUTE + "/themes"} className="sidebar-section">
                            <span className="material-symbols-outlined">menu_book</span>Темы
                        </NavLink>
                        <NavLink to={COURSES_ROUTE + "/students"} className="sidebar-section">
                            <span className="material-symbols-outlined">group</span>Студенты
                        </NavLink>
                    </>
                )}

                <NavLink to="/settings" className="sidebar-section">
                    <span className="material-symbols-outlined">settings</span>Настройки
                </NavLink>
                <button className="sidebar-section" onClick={logOut}>
                    <span className="material-symbols-outlined">logout</span>Выйти
                </button>
            </div>
        </div>
    )
}

export default Sidebar;
