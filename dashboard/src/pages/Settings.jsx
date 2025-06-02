import React, { useEffect } from "react";
import { motion } from 'framer-motion';

import "../css/settings/style.css";
import Sidebar from "../components/Sidebar";
import TransitionVariants from "../animation/page";
import { useLocation } from "react-router-dom";

const Settings = () => {
    const location = useLocation()

    useEffect(() => {
        document.title = "Настройки | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <motion.div key={location.pathname} variants={TransitionVariants} initial="initial" animate="in" exit="out" className="page">
                <div className="section-body">
                    <div className="settings">
                        <div className="block-section">
                            <h2>Общие настройки (только для владельца)</h2>
                            <form action="">
                                <div className="settings-brand">
                                    <div className="settings-logo">
                                        <input type="file" name="" id="" required/>
                                    </div>
                                    <div className="settings-info">
                                        <div className="input-section">
                                            <p>Название школы:</p>
                                            <input type="text" placeholder="Введите название" required/>
                                        </div>
                                        <div className="input-section">
                                            <p>Описание школы:</p>
                                            <textarea name="" id="" placeholder="Введите описание" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-section">
                                    <p>Телефон школы:</p>
                                    <input type="tel" placeholder="Введите телефон школы" required/>
                                </div>
                                <div className="input-section">
                                    <p>Email школы:</p>
                                    <input type="email" placeholder="Введите почту школы" required/>
                                </div>
                                <div className="input-section">
                                    <p>Выберите часовой пояс:</p>
                                    <select name="" id="" required>
                                        <option value="">Часовой пояс</option>
                                        <option value="UTC+1">UTC+1</option>
                                        <option value="UTC+2">UTC+2</option>
                                        <option value="UTC+3">UTC+3</option>
                                        <option value="UTC+4">UTC+4</option>
                                        <option value="UTC+5">UTC+5</option>
                                        <option value="UTC+6">UTC+6</option>
                                        <option value="UTC+7">UTC+7</option>
                                        <option value="UTC+8">UTC+8</option>
                                        <option value="UTC+9">UTC+9</option>
                                        <option value="UTC+10">UTC+10</option>
                                    </select>
                                </div>
                                <button type="button">Сохранить</button>
                            </form>
                        </div>
                        <div className="block-section">
                            <h2>Личные данные</h2>
                            <form action="">
                                <div className="input-section">
                                    <p>Ф.И.О:</p>
                                    <input type="text" placeholder="Введите Ф.И.О." required/>
                                </div>
                                <div className="input-section">
                                    <p>Телефон:</p>
                                    <input type="tel" placeholder="Введите Ваш телефон" required/>
                                </div>
                                <div className="input-section">
                                    <p>Email:</p>
                                    <input type="email" placeholder="Введите Вашу почту" required/>
                                </div>
                                <button type="button">Сохранить</button>
                            </form>
                        </div>
                        <div className="block-section">
                            <h2>Безопасность</h2>
                            <form action="">
                                <div className="input-section">
                                    <p>Логин:</p>
                                    <input type="text" name="" placeholder="Введите логин" required />
                                </div>
                                <div className="input-section">
                                    <p>Пароль:</p>
                                    <input type="password" name="" placeholder="Введите пароль" required />
                                </div>
                                <div className="input-section">
                                    <p>Повторите пароль:</p>
                                    <input type="password" name="" placeholder="Введите пароль" required />
                                </div>
                                <p>Вид аунтификации:</p>
                                <div className="type-FA">
                                    <div className="FA active">
                                        <p>Однофакторная аунтификация</p>
                                    </div>
                                    <div className="FA">
                                        <p>Двухфакторная аунтификация</p>
                                    </div>
                                </div>
                                <button type="button">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Settings;