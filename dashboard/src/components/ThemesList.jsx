import React, { useContext, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { deleteTheme, updateTheme } from "../http/coursesAPI";
import Modal from "./Modal";

const ThemesList = observer(() => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ title, setTitle ] = useState(null)
    const [ text, setText ] = useState(null)
    const { themeList } = useContext(Context)

    const openModal = () => {
        setIsModalOpen(true)
        setTitle(null)
        setText(null)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const update = (id) => {
        updateTheme(title, text, id).then(() => window.location.reload())
    }

    const remove = (id) => {
        deleteTheme(id).then(() => window.location.reload())
    }

    return(
        <>
            <div className="themes-list">
                {Array.isArray(themeList.themes.rows) && themeList.themes.rows.map(data =>
                    <div className="block-section-item theme-section" key={data.id}>
                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                            <div className="modal-add">
                                <div className="block-section">
                                    <div className="input-section">
                                        <p style={{width:"25%"}}>Название:</p>
                                        <input type="text" placeholder="Введите название темы" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div className="input-section">
                                        <p>Текст:</p>
                                        <textarea placeholder="Введите текст темы" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                                    </div>
                                    <button type="button" onClick={() => update(data.id)} style={{marginBottom: "1rem"}}>Сохранить</button>
                                    <button type="button" onClick={closeModal}>Отменить</button>
                                </div>
                            </div>
                        </Modal>
                        <div className="theme-info">
                            <h1 style={{marginBottom: "0.5rem"}}>Тема: {data.title}</h1>
                            <p>Текст: {data.text}</p>
                        </div>
                        <div className="theme-action">
                            <button type="button" onClick={openModal}><span className="material-symbols-outlined">edit</span></button>
                            <button type="button" onClick={() => remove(data.id)}><span className="material-symbols-outlined">delete</span></button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
})

export default ThemesList;