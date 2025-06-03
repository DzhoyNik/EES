import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { AnimatePresence } from "framer-motion";
import { Context } from "..";

const AppRouter = () => {
    const location = useLocation()
    const { student } = useContext(Context)
    
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {student.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}

                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
            </Routes>
        </AnimatePresence>
    )
}

export default AppRouter