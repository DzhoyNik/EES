import { $authHost } from ".";

export const fetchCourses = async () => {
    const { data } = await $authHost.get('api/courses/')
    return data
}

export const fetchThemesCourse = async (id) => {
    const { data } = await $authHost.get(`api/theme/${id}`)
    return data
}

export const createCourse = async (title, description, price, countOfLessons) => {
    const { data } = await $authHost.post('api/courses/', {title, description, price, countOfLessons})
    return data
}

export const createTheme = async (title, text, courseId) => {
    const { data } = await $authHost.post('api/courses/theme', {title, text, courseId})
    return data
}

export const updateTheme = async (title, text, id) => {
    const { data } = await $authHost.put('api/theme/' + id + `?title=${title}&text=${text}`)
    return data
}

export const deleteCourse = async (id) => {
    const { data } = await $authHost.delete('api/courses/' + id)
    return data
}

export const deleteTheme = async (id) => {
    const { data } = await $authHost.delete('api/theme/' + id)
    return data
}