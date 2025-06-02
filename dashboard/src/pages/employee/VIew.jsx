import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import TransitionVariants from "../../animation/page";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchEmployee, changeEmployeeStatus, deleteEmployee } from "../../http/employeeAPI";

const EmployeeView = () => {
    const [employee, setEmployee] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    const { id } = useParams();

    useEffect(() => {
        fetchEmployee(id).then(data => setEmployee(data))
    }, [])

    const changeStatus = async (id, statusId) => {
            // await changeEmployeeStatus(id, statusId).then(() => handleClick("."))
            await changeEmployeeStatus(id, statusId).then(() => window.location.reload())
        }
    
    const remove = async (id) => {
        await deleteEmployee(id).then(() => window.location.reload())
    }

    return(
        <>
            <div className="section">
                <Sidebar />
                <motion.div key={location.pathname} variants={TransitionVariants} initial="initial" animate="in" exit="out" className="section-body">
                    <div className="block-section">
                        <div className="block-section-item block-section-row">
                            <div className="block-section-photo">
                                <img src={process.env.REACT_APP_API_URL + "/employee/" + employee.photo} alt="" />
                            </div>
                            <div className="block-section-personal">
                                <h1>{employee.first_name} {employee.name} {employee.last_name}</h1>
                                {/* <p>Статус: <span>{employee.status.status}</span></p> */}
                                <p>Роль: Программист</p>
                                <p>Телефон: {employee.phone}</p>
                                <p>Почта: {employee.email}</p>
                                <p>Аккаунт создан: {employee.createdAt}</p>
                            </div>
                        </div>
                        <div className="block-section-item">
                            <h2>Статистика</h2>
                        </div>
                        <div className="block-section-actions">
                            <button type="button" onClick={() => navigate(`../employees/edit/${employee.id}`)}>Редактировать</button>
                            <button type="button" onClick={() => changeStatus(employee.id, employee.statusEmployeeId)}>{employee.statusEmployeeId % 2 === 0 ? "Разблокировать" : "Заблокировать"}</button>
                            <button type="button" onClick={() => remove(employee.id)}>Удалить</button>
                            <button type="button">Сбросить пароль</button>
                            <button type="button" onClick={() => navigate(-1)}>Назад</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default EmployeeView