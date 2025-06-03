import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const NewsList = observer(() => {
    const { newsList } = useContext(Context)

    return(
        <>
            {Array.isArray(newsList.news.rows) && newsList.news.rows.map(data =>
                <div className="block-section" key={data.id}>
                    <div className="news-img">
                        <img src={process.env.REACT_APP_API_URL + `news/${data.photo}`} alt="" />
                    </div>
                    <div className="news-title">
                        <h2>{data.title}</h2>
                    </div>
                    <div className="news-text">
                        <p>{data.text}</p>
                    </div>
                </div>
            )}
        </>
    )
})

export default NewsList