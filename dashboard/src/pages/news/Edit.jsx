import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { motion } from "framer-motion";
import TransitionVariants from "../../animation/page";
import { createNews, fetchOneNews } from "../../http/newsAPI";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const NewsEdit = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [news, setNews] = useState({})
    const { id } = useParams()
    const [photo, setPhoto] = useState(null)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        fetchOneNews(id).then(data => setNews(data))
    }, [])

    const handleClick = () => {
        navigate(-1);
    }

    const selectFile = (e) => {
        setPhoto(e.target.files[0])
    }
    
    const create = () => {
        const formData = new FormData()
        formData.append('photo', photo)
        formData.append('title', title)
        formData.append('text', text)
        formData.append('datetimeOfPublish', date)
        createNews(formData).then(() => handleClick())
    }

    return (
        <div className="section">
            <Sidebar />
            <motion.div key={location.pathname} variants={TransitionVariants} initial="initial" animate="in" exit="out" className="section-body">
                <div className="news">
                    <form action="">
                        <div className="block-section news-img">
                            <input type="file" name="" id="" required onChange={selectFile} />
                        </div>
                        <div className="block-section news-info">
                            <div className="input-section">
                                <p>Тема новости:</p>
                                <textarea name="" id="" placeholder={news.title} required value={title} onChange={(e) => setTitle(e.target.value)} ></textarea>
                            </div>
                            <div className="input-section">
                                <p>Текст новости:</p>
                                <textarea name="" id="" placeholder={news.text} required value={text} onChange={(e) => setText(e.target.value)} ></textarea>
                            </div>
                            <div className="input-section">
                                <p>Дата публицаии:</p>
                                <input type="date" name="" id="" required  value={date} onChange={(e) => setDate(Date(e.target.value))} />
                            </div>
                            <div className="input-section">
                                <p>Время публицаии:</p>
                                <input type="time" name="" id="" required />
                            </div>
                            <div className="input-section">
                                <button type="button">Сохранить</button>
                                <button type="button" onClick={handleClick}>Отменить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default NewsEdit;