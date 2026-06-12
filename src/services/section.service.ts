import { api } from "./api";

export const getSectionsByCourseId = async (courseId: string) => {
    const response = await api.get(`/sections/courses/${courseId}/sections`);    
    return response.data;
}

export const getLessonsBySections = async (sectionId: string) => {
    const response = await api.get(`/sections/${sectionId}/lessons`);
    return response.data;
}