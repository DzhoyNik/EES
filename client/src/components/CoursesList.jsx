import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const CoursesList = observer(() => {
    const { courseList } = useContext(Context)

    return (
        <>
            {Array.isArray(courseList.courses) && courseList.courses.map(data =>
                <div class="section" key={data.id}>
                    <div class="section-border">
                        <div class="section-title">
                            <h2>{data.title}</h2>
                        </div>
                        <div class="section-description">
                            <p>{data.description}</p>
                        </div>
                        <div class="section-price">
                            <h3>{data.price} руб. / {data.countOfLessons} занятий</h3>
                        </div>
                        <div class="section-buy">
                            <button type="button">Записаться</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
})

export default CoursesList;