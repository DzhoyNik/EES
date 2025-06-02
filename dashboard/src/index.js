import React, { createContext } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import EmployeeStore from './store/EmployeeStore';
import NewsStore from './store/NewsStore';
import "./css/style.css";
import CoursesStore from './store/CoursesStore';
import ThemesStore from './store/ThemesStore';

export const Context = createContext(null)

const app = ReactDOMClient.createRoot(document.getElementById("wrapper"));

app.render(
    <Context.Provider value={{
        employee: new EmployeeStore(),
        newsList: new NewsStore(),
        courses: new CoursesStore(),
        themeList: new ThemesStore()
    }}>
        <App />
    </Context.Provider>
)