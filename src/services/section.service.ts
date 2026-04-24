import axios from "axios";
import { useAuthStore } from "../store/auth.store";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const getSectionsByCourseId = async (courseId: string) => {
    const response = await api.get(`/sections/courses/${courseId}/sections`);    
    return response.data;
}