import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { Context } from "..";

const CoursesList = observer(() => {
    const { courseList } = useContext(Context)
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`./payment/${id}`)
    }

    return (
        <>
            {Array.isArray(courseList.courses) && courseList.courses.map(data =>
                <div className="section-services" key={data.id}>
                    <div className="section-border">
                        <div className="section-title">
                            <h2>{data.title}</h2>
                        </div>
                        <div className="section-description">
                            <p>{data.description}</p>
                        </div>
                        <div className="section-price">
                            <h3>{data.price} руб. / {data.countOfLessons} занятий</h3>
                        </div>
                        <div className="section-buy">
                            <button type="button" onClick={() => handleClick(data.id)}>Записаться</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
})

export default CoursesList;