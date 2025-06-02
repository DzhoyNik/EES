import React, { useContext, useEffect, useState} from "react";
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from "react-router-dom";

import "../css/courses/style.css";
import Sidebar from "../components/Sidebar";
import TransitionVariants from "../animation/page";
import CoursesList from "../components/CoursesList";
import Modal from "../components/Modal";
import { createCourse, fetchCourses } from "../http/coursesAPI";
import { Context } from "..";

const Courses = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { courses } = useContext(Context)
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ title, setTitle ] = useState(null)
    const [ description, setDescription ] = useState(null)
    const [ price, setPrice ] = useState(null)
    const [ countOfLessons, setCountOfLessons ] = useState(null)
    const priceOneLesson = (price / countOfLessons).toFixed(2) || 0

    useEffect(() => {
        document.title = "Курсы | Epic English School"
        fetchCourses().then(data => courses.setCourses(data))
    }, [])

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const create = async () => {
        await createCourse(title, description, price, countOfLessons).then(() => window.location.reload())
    }

    return (
        <div className="section">
            <Sidebar />
            <motion.div key={location.pathname} variants={TransitionVariants} initial="initial" animate="in" exit="out">
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="modal-add">
                        <div className="block-section">
                            <h2>Создать курс</h2>
                            <div className="input-section">
                                <p>Название: </p>
                                <input type="text" placeholder="Введите название курса" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="input-section">
                                <p>Описание:</p>
                                <textarea placeholder="Введите описание курса"  value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                            <div className="input-section">
                                <p>Стоимость:</p>
                                <input type="text" placeholder="Введите стоимость курса"  value={price} onChange={(e) => setPrice(e.target.value)}/>
                            </div>
                            <div className="input-section">
                                <p>Количество занятий:</p>
                                <input type="text" placeholder="Введите количество занятий"  value={countOfLessons} onChange={(e) => setCountOfLessons(e.target.value)} />
                            </div>
                            {price && countOfLessons &&
                                <div className="block-section-item">
                                    <div className="input-section">
                                        <p>Стоимоть одного занятия: </p>
                                        <input type="text" disabled value={`${priceOneLesson} рублей`} />
                                    </div>
                                </div>
                            }
                            <button type="button" onClick={create}>Создать</button>
                        </div>
                    </div>
                </Modal>
                <div className="section-body">
                    <div className="courses">
                        <div className="block-section block-section-row">
                            <div className="add">
                                <button type="button" onClick={openModal} title="Создать курс"><span className="material-symbols-outlined">add_2</span></button>
                            </div>
                            <div className="search">
                                <button type="button" title="Найти курс"><span className="material-symbols-outlined">search</span></button>
                            </div>
                            <div className="filter">
                                <button type="button" title="Отфильтровать курс"><span className="material-symbols-outlined">filter_alt</span></button>
                            </div>
                        </div>
                        <div className="block-section">
                            <CoursesList />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Courses;