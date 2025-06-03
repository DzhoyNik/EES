import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite"
import AppRouter from "./components/AppRouter";
import { Context } from ".";
import { check } from "./http/studentAPI";

const App = observer(() => {
    const { student } = useContext(Context)
      const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
          student.setStudent(true)
          student.setIsAuth(true)
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

export default App