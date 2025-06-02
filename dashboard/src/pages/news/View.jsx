import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { deleteNews, fetchOneNews } from "../../http/newsAPI";
import {motion} from "framer-motion"
import Sidebar from "../../components/Sidebar";
import TransitionVariants from "../../animation/page";
import "../../css/news/view.css"
import NewsImg from "../../animation/NewsImg";

const NewsView = observer(() => {
    const navigate = useNavigate()
    const [news, setNews] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetchOneNews(id).then(data => setNews(data))
    }, [])

    const removeNews = async (id) => {
        await deleteNews(id).then(() => navigate(-1, { replace: true }))
    }

    return (
        <>
            <div className="section">
                <Sidebar />
                <motion.div key={news.id} variants={TransitionVariants} initial="initial" animate="in" exit="out" className="section-body" id="news-view">
                    <div className="block-section">
                        <div className="news-photo">
                            <motion.img variants={NewsImg} initial="initial" animate="in" exit="out" src={process.env.REACT_APP_API_URL + `news/${news.photo}`} alt="" />
                        </div>
                        <div className="news-title">
                            <h1>{news.title}</h1>
                        </div>
                        <div className="news-text">
                            <p>{news.text}</p>
                        </div>
                        <div className="news-date">
                            <p>{news.datetimeOfPublish}</p>
                        </div>
                        <div className="news-actions">
                            <button type="button" onClick={() => navigate(`../main/edit/${news.id}`)}>Редактировать</button>
                            <button type="button">Снять с публикации</button>
                            <button type="button" onClick={() => removeNews(news.id)}>Удалить</button>
                            <button type="button" onClick={() => navigate(-1)}>Назад</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
})

export default NewsView