import { $authHost } from "./index";

export const createNews = async (news) => {
    const { data } = await $authHost.post('api/news/create', news)
    return data
}

export const fetchNews = async () => {
    const { data } = await $authHost.get('api/news/')
    return data
}

export const fetchOneNews = async (id) => {
    const { data } = await $authHost.get('api/news/' + id)
    return data
}

export const deleteNews = async (newsId) => {
    const { data } = await $authHost.delete('api/news/' + newsId)
    return data;
}