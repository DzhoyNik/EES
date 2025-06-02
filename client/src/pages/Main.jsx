import React, { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { Context } from ".."
import { fetchCourses } from "../http/coursesAPI"
import CoursesList from "../components/CoursesList"

import "../css/style.css"
import "../css/main.css"
import logo from "../img/logo.png"
import photo from "../img/photo.png"
import reviews_1 from "../img/reviews/reviews_1.jpg"

const Main = observer(() => {
    const { courseList } = useContext(Context)

    useEffect(() => {
        document.title = "Epic English School | Онлайн-школа"
        fetchCourses().then(data => courseList.setCourses(data))
    }, [])

    return(
        <>
            <div className="section">
                <div className="topbar">
                    <div className="topbar-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="topbar-nav">
                        <NavLink to="/">О нас</NavLink>
                        <NavLink to="/">Почему мы</NavLink>
                        <NavLink to="/">Услуги</NavLink>
                        <NavLink to="/">Отзывы</NavLink>
                    </div>
                    <div className="topbar-auth">
                        <NavLink to="/">Войти</NavLink>
                    </div>
                </div>
                <div className="header">
                    <div className="header-text">
                        <h1>Epic English School - шаг к свободе общения на английском</h1>
                        <button type="button">Записаться</button>
                    </div>
                    <div className="header-img">

                    </div>
                </div>
                <div className="about">
                    <div className="about-body">
                        <div className="about-border">
                            <h2>О нас</h2>
                            <p>Добро пожаловать на сайт!</p>
                            <div className="about-info">
                                <div className="about-text">
                                    <p>ELIZAVETA - это онлайн школа английского языка, созданная для тех, кто хочет освоить язык легко и удобно.</p>
                                    <p>Наша команда профессиональных преподавателей поможет вам достичь желаемого уровня владения английским, используя современные методики обучения и индивидуальный подход к каждому студенту.</p>
                                    <p>Мы стремимся сделать изучение английского языка интересным и доступным для всех, чтобы вы могли достичь своих целей и раскрыть свой потенциал.</p>
                                </div>
                                <div className="about-img">
                                    <img src={photo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="advantages">
                    <h2>ПОЧЕМУ ИМЕННО МЫ?</h2>
                    <div className="advantages-body">
                        <div className="section">
                            <div className="section-header">
                                <div className="section-number">
                                    <h1>1.</h1>
                                </div>
                                <div className="section-title">
                                    <h2>Гибкий график обучения</h2>
                                </div>
                            </div>
                            <div className="section-text">
                                <p>Вы можете выбирать удобное для себя время и место для занятий, не ограничивая себя географически.</p>
                            </div>
                        </div>
                        <div className="section">
                            <div className="section-header">
                                <div className="section-number">
                                    <h1>2.</h1>
                                </div>
                                <div className="section-title">
                                    <h2>Квалифицированные преподаватели</h2>
                                </div>
                            </div>
                            <div className="section-text">
                                <p>Все преподаватели ELIZAVETA имеют высокий уровень знания английского языка и опыт преподавания.</p>
                            </div>
                        </div>
                        <div className="section">
                            <div className="section-header">
                                <div className="section-number">
                                    <h1>3.</h1>
                                </div>
                                <div className="section-title">
                                    <h2>Индивидуальный подход</h2>
                                </div>
                            </div>
                            <div className="section-text">
                                <p>Каждый обучающийся получает индивидуальную программу обучения, учитывающую его уровень и цели.</p>
                            </div>
                        </div>
                        <div className="section">
                            <div className="section-header">
                                <div className="section-number">
                                    <h1>4.</h1>
                                </div>
                                <div className="section-title">
                                    <h2>Интерактивные занятия</h2>
                                </div>
                            </div>
                            <div className="section-text">
                                <p>Благодаря использованию современных технологий, уроки в ELIZAVETA проходят в интерактивном формате, что делает их более интересными и эффективными.</p>
                            </div>
                        </div>
                        <div className="section">
                            <div className="section-header">
                                <div className="section-number">
                                    <h1>5.</h1>
                                </div>
                                <div className="section-title">
                                    <h2>Доступность</h2>
                                </div>
                            </div>
                            <div className="section-text">
                                <p>Обучение в ELIZAVETA доступно по цене, которая значительно ниже, чем у традиционных школ.</p>
                            </div>
                        </div>
                        <div className="section">
                            <div className="section-header">
                                <div className="section-number">
                                    <h1>6.</h1>
                                </div>
                                <div className="section-title">
                                    <h2>Гарантированный результат</h2>
                                </div>
                            </div>
                            <div className="section-text">
                                <p>Благодаря индивидуальному подходу и квалифицированным преподавателям, ELIZAVETA гарантирует достижение желаемого уровня владения английским языком.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="services-body">
                        <div className="services-title">
                            <h2>Наши услуги</h2>
                            <p>Независимо от того, какой уровень владения языка у Вас есть и какие цели вы хотите достичь, наша онлайн школа английского языка предлагает все необходимое для успешного изучения и совершенствования английского языка. Присоединяйтесь к нам сегодня и начните свой путь к владению английским языком!</p>
                        </div>
                        <div className="services-sections">
                            <CoursesList />
                        </div>
                    </div>
                </div>
                <div className="reviews">
                    <div className="reviews-body">
                        <div className="reviews-title">
                            <h2>Отзывы</h2>
                            <p>Мы ценим каждый отзыв и стараемся улучшить сервис, чтобы наши клиенты оставались довольными и возвращались к нам снова и снова</p>
                        </div>
                        <div className="reviews-sections">
                            <div className="reviews-section">
                                <div className="section-title">
                                    <div className="section-img">
                                        <img src={reviews_1} alt="" />
                                    </div>
                                    <div className="section-name">
                                        <h2>Tessst</h2>
                                    </div>
                                </div>
                                <hr />
                                <div className="section-text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a illo delectus at odio. Voluptate consectetur, quis fugit quas sed ea doloribus quasi perferendis facilis, tempora, dolore consequuntur in pariatur.</p>
                                </div>
                            </div>
                            <div className="reviews-section">
                                <div className="section-title">
                                    <div className="section-img">
                                        <img src={reviews_1} alt="" />
                                    </div>
                                    <div className="section-name">
                                        <h2>Tessst</h2>
                                    </div>
                                </div>
                                <hr />
                                <div className="section-text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a illo delectus at odio. Voluptate consectetur, quis fugit quas sed ea doloribus quasi perferendis facilis, tempora, dolore consequuntur in pariatur.</p>
                                </div>
                            </div>
                            <div className="reviews-section">
                                <div className="section-title">
                                    <div className="section-img">
                                        <img src={reviews_1} alt="" />
                                    </div>
                                    <div className="section-name">
                                        <h2>Tessst</h2>
                                    </div>
                                </div>
                                <hr />
                                <div className="section-text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a illo delectus at odio. Voluptate consectetur, quis fugit quas sed ea doloribus quasi perferendis facilis, tempora, dolore consequuntur in pariatur.</p>
                                </div>
                            </div>
                            <div className="reviews-section">
                                <div className="section-title">
                                    <div className="section-img">
                                        <img src={reviews_1} alt="" />
                                    </div>
                                    <div className="section-name">
                                        <h2>Tessst</h2>
                                    </div>
                                </div>
                                <hr />
                                <div className="section-text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a illo delectus at odio. Voluptate consectetur, quis fugit quas sed ea doloribus quasi perferendis facilis, tempora, dolore consequuntur in pariatur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-body">
                        <div className="footer-slogan">
                            <h2>Обучайтесь английскому с удовольствием и гарантированным результатом!</h2>
                        </div>
                        <div className="footer-copy">
                            <p>&copy; 2025. Все права защищены.</p>
                        </div>
                        <div className="footer-nav">
                            <NavLink to="/">Политика конфиденциальности</NavLink>
                            <NavLink to="/">Условия использования</NavLink>
                            <p>Контакты</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Main