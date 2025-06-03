import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

import Sidebar from "../components/Sidebar";
import TransitionVariants from "../animation/page";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchNews } from "../http/newsAPI";
import NewsList from "../components/NewsList";
import "../css/news/style.css"


const News = observer(() => {
    const navigate = useNavigate()
    const location = useLocation()
    const { newsList } = useContext(Context)

    useEffect(() => {
        document.title = "Новости | Epic English School"
        fetchNews().then(data => newsList.setNews(data))
    })

    return (
        <div className="section">
            <Sidebar />
            <motion.div key={location.pathname} variants={TransitionVariants} initial="initial" animate="in" exit="out" className="page">
                <div className="section-body">
                    <div className="news">
                        <div className="block-section block-section-row">
                            <div className="add">
                                <button type="button" title="Создать новость" onClick={() => navigate("./create")}><span className="material-symbols-outlined">add_notes</span></button>
                            </div>
                            <div className="search">
                                <button type="button" title="Найти новость"><span className="material-symbols-outlined">search</span></button>
                            </div>
                            <div className="filter">
                                <button type="button" title="Отфильтровать новости"><span className="material-symbols-outlined">filter_alt</span></button>
                            </div>
                        </div>
                        <div className="block-section news-list">
                            <NewsList />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
})

export default News;