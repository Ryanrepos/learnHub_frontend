import { api } from "./api";

export const getLessonsByLessonId = async (lessonId: string) => {
    const response = await api.get(`/lessons/${lessonId}`);
    return response.data;
}