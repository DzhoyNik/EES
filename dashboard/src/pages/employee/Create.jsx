import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import TransitionVariants from "../../animation/page";
import "../../css/user/create.css"
import { useLocation, useNavigate } from "react-router-dom";
import { createEmployee } from "../../http/employeeAPI";

const EmployeeCreate = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [firstName, setFirstName] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [photo, setPhoto] = useState(null)
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const selectedPhoto = (e) => {
        setPhoto(e.target.files[0])
    }

    const create = () => {
        const formData = new FormData()
        formData.append('first_name', firstName)
        formData.append('name', name)
        formData.append('last_name', lastName)
        formData.append('photo', photo)
        formData.append('phone', tel)
        formData.append('email', email)
        formData.append('login', login)
        formData.append('password', password)
        createEmployee(formData).then(() => navigate(-1))
    }

    useEffect(() => {
        document.title = "Добавить сотрудника | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <motion.div key={location.pathname} variants={TransitionVariants} initial="initial" animate="in" exit="out">
                <div className="section-body">
                    <div className="block-section">
                        <form>
                            <div className="block-section-row block-section-item user-personal">
                                <div className="user-photo">
                                    <input type="file" onChange={selectedPhoto} />
                                </div>
                                <div className="user-fullName">
                                    <div className="input-section">
                                        <p>Фамилия:</p>
                                        <input type="text" placeholder="Введите фамилию" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="input-section">
                                        <p>Имя:</p>
                                        <input type="text" placeholder="Введите имя" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="input-section">
                                        <p>Отчество:</p>
                                        <input type="text" placeholder="Введите отчество" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="block-section-row block-section-item user-feedback">
                                <div className="input-section">
                                    <p>Телефон:</p>
                                    <input type="tel" placeholder="Введите телефон" value={tel} onChange={(e) => setTel(e.target.value)} />
                                </div>
                                <div className="input-section">
                                    <p>Email:</p>
                                    <input type="email" placeholder="Введите почту" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="block-section-row block-section-item user-security">
                                <div className="input-section">
                                    <p>Логин:</p>
                                    <input type="text" placeholder="Введите логин" value={login} onChange={(e) => setLogin(e.target.value)}/>
                                </div>
                                <div className="input-section">
                                    <p>Пароль:</p>
                                    <input type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <button type="button" onClick={create}>Создать</button>
                            <button type="button" onClick={() => navigate(-1)}>Отменить</button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default EmployeeCreate;