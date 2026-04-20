// services/courses.service.ts

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

export interface CourseParams {
    categoryId?: string;
    level?: 'beginner' | 'intermediate' | 'advanced';
    min_price?: number;
    max_price?: number;
    search?: string;
    page?: number;
    limit?: number;
}

// Barcha kurslar
export const getCourses = async (params?: CourseParams) => {
    const response = await api.get("/courses", { params });
    return response.data;
};

// Bitta kurs
export const getCourseById = async (id: string) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
};