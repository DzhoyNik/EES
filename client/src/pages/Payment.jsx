import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { createStudent } from "../http/studentAPI";
import { fetchCourse } from "../http/coursesAPI";

import logo from "../img/logo_2.png"
import "../css/payment.css"

const Payment = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ course, setCourse ] = useState({})
    const [ firstName, setFirstName ] = useState('')
    const [ name, setName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ photo, setPhoto ] = useState(null)
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')

    useEffect(() => {
        fetchCourse(id).then(data => setCourse(data))
    }, [])

    const selectedPhoto = (e) => {
        setPhoto(e.target.files[0])
    }

    const handleClick = () => {
        navigate(-1)
    }

    const create = () => {
        const formData = new FormData()
        formData.append('first_name', firstName)
        formData.append('name', name)
        formData.append('last_name', lastName)
        formData.append('photo', photo)
        formData.append('phone', phone)
        formData.append('email', email)
        formData.append('courseId', id)
        createStudent(formData).then(() => navigate(-1))
    }

    return(
        <>
            <div className="section" id="payment">
                <div className="section-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="section-body">
                    <div className="section-date">
                        <div className="section-back" onClick={handleClick}>
                            <h2><span className="material-symbols-outlined">arrow_back_ios</span>Назад</h2>
                        </div>
                        <h2>Оплатите свой курс!</h2>
                        <div className="block-section">
                            <h3>Личные данные <span style={{color: "var(--color-4)", fontSize: "1.5rem"}}>*</span></h3>
                            <div className="block-section-row">
                                <div className="block-section-photo">
                                    <input type="file" onChange={selectedPhoto} />
                                </div>
                                <div className="block-section-date">
                                    <input type="text" placeholder="Введите фамилию" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    <input type="text" placeholder="Введите имя" value={name} onChange={(e) => setName(e.target.value)} />
                                    <input type="text" placeholder="Введите отчество" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="block-section">
                            <h3>Контактные данные <span style={{color: "var(--color-4)", fontSize: "1.5rem"}}>*</span></h3>
                            <input type="text" placeholder="Введите телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <input type="text" placeholder="Введите почту" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="block-section">
                            <h3>Промокод</h3>
                            <input type="text" placeholder="Введите промокод"/>
                        </div>
                        <div className="block-section">
                            <p>Стоимость: {course['price']} руб.</p>
                            <p>Скидка: 0 руб.</p>
                            <h3>Итого: {course['price']} руб.</h3>
                            <button type="button" onClick={create}>Продолжить</button>
                        </div>
                    </div>
                    <div className="section-info">
                        <h2>Информация о курсе</h2>
                        <div className="section-border">
                            <h2>{course['title']}</h2>
                            <p>{course['description']}</p>
                            <h2>{course['countOfLessons']} занятий</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment