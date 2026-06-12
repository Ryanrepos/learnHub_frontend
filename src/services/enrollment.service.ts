// services/enrollment.service.ts

import { api } from "./api";

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