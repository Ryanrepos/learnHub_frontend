// composables/useCourses.ts

import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { useAuthStore } from "../store/auth.store";
import {
    getCourses,
    getCourseById,
    type CourseParams
} from "../services/courses.service";
import {
    getMyCourses,
    enrollCourse,
    unenrollCourse,
    checkEnrollment
} from "../services/enrollment.service.ts";

// GET ALL COURSES
export const useGetCourses = (params?: CourseParams) => {
    return useQuery({
        queryKey: ["courses", params],
        queryFn: () => getCourses(params),
    });
};

// GET COURSE BY ID
export const useGetCourseById = (id: string) => {
    return useQuery({
        queryKey: ["course", id],
        queryFn: () => getCourseById(id),
        enabled: !!id,
    });
};

// GET MY COURSES
export const useGetMyCourses = () => {
    const { token } = useAuthStore();
    return useQuery({
        queryKey: ["my-courses"],
        queryFn: getMyCourses,
        enabled: !!token,
    });
};

// ENROLL COURSE
export const useEnrollCourse = () => {
    return useMutation({
        mutationFn: enrollCourse,
        onSuccess: () => {
            message.success("Kursga muvaffaqiyatli yozildingiz!");
        },
        onError: () => {
            message.error("Kursga yozilishda xatolik!");
        }
    });
};

// UNENROLL COURSE
export const useUnenrollCourse = () => {
    return useMutation({
        mutationFn: unenrollCourse,
        onSuccess: () => {
            message.success("Kursdan chiqdingiz!");
        },
        onError: () => {
            message.error("Xatolik yuz berdi!");
        }
    });
};

// CHECK ENROLLMENT
export const useCheckEnrollment = (courseId: string) => {
    return useQuery({
        queryKey: ["enrollment-check", courseId],
        queryFn: () => checkEnrollment(courseId),
        enabled: !!courseId,
    });
};