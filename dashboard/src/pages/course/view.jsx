import React from "react";
import Sidebar from "../../components/Sidebar";

const CoruseView = () => {
    return (
        <>
            <div className="section">
                <Sidebar />
                <div className="section-body">
                    <form className="course-settings">
                        <div className="block-section">
                            <h1>Настройки курса</h1>
                            <div className="input-section">
                                <p>Название курса:</p>
                                <input type="text" placeholder="Введите название курса"/>
                            </div>
                            <div className="input-section">
                                <p>Описание курса:</p>
                                <textarea placeholder="Введите описание курса"></textarea>
                            </div>
                            <div className="input-section">
                                <p>Стоимость курса:</p>
                                <input type="text" placeholder="Введите стоимость курса"/>
                            </div>
                            <div className="input-section">
                                <p>Количество занятий:</p>
                                <input type="text" placeholder="Введите количество занятий"/>
                            </div>
                            <div className="input-section">
                                <button type="button">Сохранить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CoruseView