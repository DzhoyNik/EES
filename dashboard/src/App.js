import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";

const App = observer(() => {
    const { employee } = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(() => {
            employee.setEmployee(true)
            employee.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <h2>Test</h2>
    }

    return(
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
})

export default App;