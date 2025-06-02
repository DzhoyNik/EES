import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const sign_in = async (login, password) => {
    const employee = {
        login: login,
        password: password
    }

    const { data } = await $host.post('api/employee/sign_in', employee, { 'Content-type': 'application/json' })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get('api/employee/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}