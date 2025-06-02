import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { publicRoutes } from "../routes";
import { AnimatePresence } from "framer-motion";

const AppRouter = () => {
    const location = useLocation()
    
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
            </Routes>
        </AnimatePresence>
    )
}

export default AppRouter