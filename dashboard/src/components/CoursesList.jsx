import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { deleteCourse } from "../http/coursesAPI";
import { useNavigate } from "react-router-dom";

const CoursesList = observer(() => {
    const navigate = useNavigate()
    const { courses } = useContext(Context)

    const remove = (id) => {
        deleteCourse(id)
            .then(() => window.location.reload())
    }

    return (
        <div className="courses-list">
            {Array.isArray(courses.courses) && courses.courses.map(data =>
                <div className="block-section-item course-item" key={data.id}>
                    <h1>{data.title}</h1>
                    <p><span className={data.statusCoursesId === 1 ? "course-active" : data.statusCoursesId === 2 ? "course-dev" : "course-lock"}>{data.status.status}</span></p>
                    <div className="block-section-actions">
                        <button type="button" title="Редактировать курс" onClick={() => navigate(`./${data.id}`)}><span className="material-symbols-outlined">edit</span></button>
                        <button type="button" title="Удалить курс" onClick={() => remove(data.id)}><span className="material-symbols-outlined">delete</span></button>
                        <button type="button" title={data.statusCoursesId === 1 ? "Снять с публикации" : data.statusCoursesId === 3 ? "Опубликовать курс" : "Опубликовать курс"}><span className="material-symbols-outlined">{data.statusCoursesId === 1 ? "toggle_on" : data.statusCoursesId === 3 ? "toggle_off" : "toggle_off"}</span></button>
                    </div>
                </div>
            )}
        </div>
    )
})

export default CoursesList