import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sign_in } from "../http/userAPI";
import { observer } from "mobx-react-lite"
import { Context } from "..";

const AuthForm = observer(() => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("./main");
    }

    const {employee} = useContext(Context)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        let data;
        try {
            data = await sign_in(login, password)
            employee.setEmployee(data)
            employee.setIsAuth(true)
            handleClick()
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return(
        <form>
            <h2>Добро пожаловать</h2>
            <div className="input-section">
                <span className="material-symbols-outlined">person</span>
                <input type="text" name="" placeholder="Введите логин" value={login} onChange={e => setLogin(e.target.value)} />
            </div>
            <div className="input-section">
                <span className="material-symbols-outlined">key</span>
                <input type="password" name="" placeholder="Введите пароль" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="button" onClick={signIn}>Авторизоваться</button>
        </form>
    )
})

export default AuthForm;