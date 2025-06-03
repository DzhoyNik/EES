import { $authHost } from "./index";

export const fetchNews = async () => {
    const { data } = await $authHost.get('api/news/')
    return data
}