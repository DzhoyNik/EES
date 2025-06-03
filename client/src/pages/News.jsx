import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NewsList from "../components/NewsList";
import { Context } from "..";
import { fetchNews } from "../http/newsAPI";
import "../css/news.css"

const News = observer(() => {
    const { newsList } = useContext(Context)

    useEffect(() => {
        document.title = "Новости | Epic English School"
        fetchNews().then(data => newsList.setNews(data))
    })

    return(
        <>
            <div className="section">
                <Sidebar />
                <div className="section-body">
                    <div className="section-block">
                        <NewsList />
                    </div>
                </div>
            </div>
        </>
    )
})

export default News