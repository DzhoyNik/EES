import React, { createContext } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import CoursesStore from './store/CoursesStore';
import StudentStore from './store/StudentStore';
import NewsStore from './store/NewsStore';

export const Context = createContext(null)

const app = ReactDOMClient.createRoot(document.getElementById("wrapper"));

app.render(
    <Context.Provider value={{
        student: new StudentStore(),
        courseList: new CoursesStore(),
        newsList: new NewsStore()
    }}>
        <App />
    </Context.Provider>
)