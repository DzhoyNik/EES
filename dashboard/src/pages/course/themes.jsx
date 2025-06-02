import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Modal from "../../components/Modal";
import { createTheme, fetchThemesCourse } from "../../http/coursesAPI";
import { useParams } from "react-router-dom";
import ThemesList from "../../components/ThemesList";
import { Context } from "../..";

const CourseThemes = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ title, setTitle ] = useState(null)
    const [ text, setText ] = useState(null)
    const { id } = useParams()
    const { themeList } = useContext(Context)

    useEffect(() => {
        fetchThemesCourse(id).then(data => themeList.setThemes(data))
    })

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const create = async () => {
            await createTheme(title, text, id).then(() => window.location.reload())
    }

    return(
        <>
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
                        <button type="button" onClick={create}>Создать</button>
                    </div>
                </div>
            </Modal>
            <div className="section">
                <Sidebar />
                <div className="section-body">
                    <div className="block-section block-section-row">
                        <button type="button" onClick={openModal}><span className="material-symbols-outlined">add_2</span></button>
                    </div>
                    <div className="block-section">
                        <ThemesList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseThemes