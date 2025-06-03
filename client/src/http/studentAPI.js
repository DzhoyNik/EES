import { $host, $authHost } from "."
import { jwtDecode } from "jwt-decode"

export const sign_in = async (login, password) => {
    const student = {
        login: login,
        password: password
    }

    const { data } = await $host.post('api/student/sign_in', student, { 'Content-type': 'application/json' })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const createStudent = async (student) => {
    const { data } = await $host.post('api/student/sign_up', student)
    return data
}

export const check = async () => {
    const { data } = await $authHost.get('api/student/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}