import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { changeEmployeeStatus, deleteEmployee } from "../http/employeeAPI";

const EmployeeList = observer(() => {
    const navigate = useNavigate()
    const { employee } = useContext(Context)

    const handleClick = (route) => {
        navigate(route, { replace: true })
    }

    const changeStatus = async (id, statusId) => {
        // await changeEmployeeStatus(id, statusId).then(() => handleClick("."))
        await changeEmployeeStatus(id, statusId).then(() => window.location.reload())
    }

    const remove = async (id) => {
        await deleteEmployee(id)
            .then(() => window.location.reload())
            .catch((e) => alert(e.message))
    }

    return (
        <>
            <div className="user-list">
                {Array.isArray(employee.employee.rows) && employee.employee.rows.map(data => 
                    <div className="block-section-item user-section" key={data.id}>
                        <div className="user-personal">
                            <div className="user-img">
                                <img src={process.env.REACT_APP_API_URL + 'employee/' + data.photo} alt="" />
                            </div>
                            <div className="user-info">
                                <h2>{data.first_name} {data.name} {data.last_name}</h2>
                            </div>
                        </div>
                        <div className="user-another">
                            <p>Статус: <span className={data.statusEmployeeId % 2 === 0 ? "user-lock" : "user-active"}>{data.status.status}</span></p>
                            <p>Количество курсов: 10</p>
                        </div>
                        <div className="user-action">
                            <button type="button" title="Посмотреть профиль" onClick={() => navigate(`./${data.id}`)}><span className="material-symbols-outlined">account_circle</span></button>
                            <button type="button" title="Редактировать" onClick={() => navigate(`./edit/${data.id}`)}><span className="material-symbols-outlined">edit</span></button>
                            <button type="button" title={data.statusEmployeeId % 2 === 0 ? "Разблокировать" : "Заблокировать"} onClick={() => changeStatus(data.id, data.statusEmployeeId)}><span className="material-symbols-outlined">person_off</span></button>
                            <button type="button" title="Удалить профиль" onClick={() => remove(data.id)}><span className="material-symbols-outlined">delete</span></button>
                            <button type="button" title="Сбросить пароль"><span className="material-symbols-outlined">sync_lock</span></button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
})

export default EmployeeList;