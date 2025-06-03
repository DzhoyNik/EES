import React from "react";
import { NavLink } from "react-router-dom"

import "../css/sidebar.css"
import logo from "../img/logo.png"
import { NEWS_ROUTE, THEMES_ROUTE } from "../utils/consts";

const Sidebar = () => {
    return(
        <>
            <div className="sidebar">
                <div className="sidebar-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="sidebar-nav">
                    <NavLink to={NEWS_ROUTE} className="sidebar-section">
                        <span className="material-symbols-outlined">newspaper</span>Новости
                    </NavLink>
                    <NavLink to={THEMES_ROUTE} className="sidebar-section">
                        <span className="material-symbols-outlined">database</span>Темы
                    </NavLink>
                    <NavLink to="./" className="sidebar-section">
                        <span className="material-symbols-outlined">settings</span>Настройки
                    </NavLink>
                    <NavLink to="./" className="sidebar-section">
                        <span className="material-symbols-outlined">logout</span>Выйти
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Sidebar