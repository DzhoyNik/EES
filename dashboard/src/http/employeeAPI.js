import { $authHost } from ".";

export const createEmployee = async (employee) => {
    const { data } = await $authHost.post('api/employee/sign_up', employee)
    return data
}

export const fetchEmployees = async () => {
    const { data } = await $authHost.get('api/employee/')
    return data
}

export const fetchEmployee = async (id) => {
    const { data } = await $authHost.get('api/employee/' + id)
    return data
}

export const changeEmployeeStatus = async (id, statusId) => {
    const { data } = await $authHost.put('api/employee?' + `id=${id}&statusId=${statusId}`)
    return data
}

export const putEmployee = async (id, first_name, name, last_name, photo, phone, email) => {
    const { data } = await $authHost.put('api/employee/edit?' + `id=${id}&first_name=${first_name}&name=${name}&last_name=${last_name}&photo=${photo}&phone=${phone}&email=${email}`)
    return data;
}

export const deleteEmployee = async (id) => {
    const { data } = await $authHost.delete('api/employee/' + id)
    return data
}