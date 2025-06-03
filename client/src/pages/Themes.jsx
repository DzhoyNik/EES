import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";

const Themes = observer(() => {
    useEffect(() => {
        document.title = "Темы | Epic English School"
        // fetchNews().then(data => newsList.setNews(data))
    })

    return(
        <>
            <div className="section">
                <Sidebar />
                <div className="section-body">
                    <div className="section-block">

                    </div>
                </div>
            </div>
        </>
    )
})

export default Themes