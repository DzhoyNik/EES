import React, { createContext } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import CoursesStore from './store/CoursesStore';

export const Context = createContext(null)

const app = ReactDOMClient.createRoot(document.getElementById("wrapper"));

app.render(
    <Context.Provider value={{
        courseList: new CoursesStore()
    }}>
        <App />
    </Context.Provider>
)