import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"

import "../css/auth.css"
import logo from "../img/logo.png"
import { Context } from "..";
import { sign_in } from "../http/studentAPI";

const Auth = () => {
    const navigate = useNavigate()
    const { student } = useContext(Context)
    const [ login, setLogin ] = useState('')
    const [ password, setPasswod ] = useState('')

    const handleClick = () => {
        navigate("/news");
    }

    const signIn = async () => {
            let data;
            try {
                data = await sign_in(login, password)
                student.setStudent(data)
                student.setIsAuth(true)
                handleClick()
            } catch (e) {
                alert(e.response.data.message)
            }
        }

    return(
        <>
            <div className="section section-auth">
                <div className="section-body-auth">
                    <div className="section-form">
                        <h2>Авторизация</h2>
                        <div className="input-section">
                            <span className="material-symbols-outlined">person</span>
                            <input type="text" placeholder="Введите логин" value={login} onChange={(e) => setLogin(e.target.value)} />
                        </div>
                        <div className="input-section">
                            <span className="material-symbols-outlined">key</span>
                            <input type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPasswod(e.target.value)} />
                        </div>
                        <button type="button" onClick={signIn}>Войти</button>
                    </div>
                </div>
                <div className="section-body-photo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </>
    )
}

export default Auth