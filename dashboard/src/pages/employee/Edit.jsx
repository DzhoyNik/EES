import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import TransitionVariants from "../../animation/page";
import "../../css/user/create.css"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { putEmployee, fetchEmployee } from "../../http/employeeAPI";

const EmployeeEdit = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()
    const [employee, setEmployee] = useState({})
    const [firstName, setFirstName] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [photo, setPhoto] = useState(null)
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        document.title = "Добавить сотрудника | Epic English School"
        fetchEmployee(id).then(data => {
            setEmployee(data)
            setFirstName(data.first_name)
            setName(data.name)
            setLastName(data.last_name)
            setPhoto(data.photo)
            setTel(data.phone)
            setEmail(data.email)
        })
    }, [])

    const selectedPhoto = (e) => {
        setPhoto(e.target.files[0])
    }

    const update = () => {
        putEmployee(employee.id, firstName, name, lastName, photo, tel, email).then(() => navigate(-1))
    }

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
                            <button type="button" onClick={update}>Сохранить</button>
                            <button type="button" onClick={() => navigate(-1)}>Отменить</button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default EmployeeEdit;