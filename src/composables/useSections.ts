import { getLessonsBySections, getSectionsByCourseId } from "@/services/section.service"
import { useQuery } from "@tanstack/react-query"

export const useSections = (courseId: string) => {
    return useQuery({
        queryKey: ["sections", courseId],
        queryFn: () => getSectionsByCourseId(courseId),
        enabled: !!courseId,
    })
}

export const useLessonsBySections = (sectionId: string) => {
    return useQuery({
        queryKey: ["lessons", sectionId],
        queryFn: () => getLessonsBySections(sectionId),
        enabled: !!sectionId,
    })
}