// services/enrollment.service.ts

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

// Mening kurslarim
export const getMyCourses = async () => {
    const response = await api.get("/enrollments/my-courses");
    return response.data;
};

// Kursga yozilish
export const enrollCourse = async (courseId: string) => {
    const response = await api.post(`/enrollments/${courseId}`);
    return response.data;
};

// Kursdan chiqish
export const unenrollCourse = async (courseId: string) => {
    const response = await api.delete(`/enrollments/${courseId}`);
    return response.data;
};

// Kursga yozilganligini tekshirish
export const checkEnrollment = async (courseId: string) => {
    const response = await api.get(`/enrollments/check/${courseId}`);
    return response.data;
};