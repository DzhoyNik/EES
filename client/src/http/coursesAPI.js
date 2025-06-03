import { $host } from "./index";

export const fetchCourses = async () => {
    const { data } = await $host.get('api/courses/')
    return data
}

export const fetchCourse = async (id) => {
    const { data } = await $host.get('api/courses/' + id)
    return data
}