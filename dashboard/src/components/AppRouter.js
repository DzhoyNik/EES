import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import { AnimatePresence } from "framer-motion";

const AppRouter = () => {
    const { employee } = useContext(Context)
    const location = useLocation()
    
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {employee.isAuth && authRoutes.map(({path, Component}) =>
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