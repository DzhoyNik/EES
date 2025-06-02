import { $host } from "./index";

export const fetchCourses = async () => {
    const { data } = await $host.get('api/courses/')
    return data
}