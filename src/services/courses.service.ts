// services/courses.service.ts

import { api } from "./api";

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

export const getCoursesByAdmin = async (params?: CourseParams) => {
    const response = await api.get("/courses/admin/all-courses", {
        params,
    });
    return response.data;
};