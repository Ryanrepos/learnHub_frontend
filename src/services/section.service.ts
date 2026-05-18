import axios from "axios";
import { useAuthStore } from "../store/auth.store";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
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

export const getLessonsBySections = async (sectionId: string) => {
    const response = await api.get(`/sections/${sectionId}/lessons`);
    return response.data;
}