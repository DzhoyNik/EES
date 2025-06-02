import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { deleteNews } from "../http/newsAPI";
import { useLocation, useNavigate } from "react-router-dom";

const NewsList = observer(() => {
    const navigate = useNavigate()
    const location = useLocation()
    const { newsList } = useContext(Context)

    const removeNews = async (id) => {
        await deleteNews(id).then(() => navigate(location.pathname + location.search + location.hash, { replace: true }))
    }

    return (
        <>
            {Array.isArray(newsList.news.rows) && newsList.news.rows.map(data =>
                <div className="news-item" key={data.id}>
                    <div className="news-img">
                        <img src={process.env.REACT_APP_API_URL + "/news/" + data.photo} alt="" />
                    </div>
                    <div className="news-info">
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                    <div className="news-action">
                        <button type="button" title="Просмотреть новость"onClick={() => navigate(`./${data.id}`)} ><span className="material-symbols-outlined">news</span></button>
                        <button type="button" title="Редактировать" onClick={() => navigate(`./edit/${data.id}`)}><span className="material-symbols-outlined">edit</span></button>
                        <button type="button" title="Удалить" onClick={() => removeNews(data.id)}><span className="material-symbols-outlined">delete</span></button>
                    </div>
                </div>
            )}
            {Array.isArray(newsList.news.rows) && newsList.news.rows == 0 &&
                <h2 style={{margin: "0 auto", color: "var(--color-3)"}}>Новостей нет :(</h2>
            }
        </>
    )
})

export default NewsList;