import { getSectionsByCourseId } from "@/services/section.service"
import { useQuery } from "@tanstack/react-query"

export const useSections = (courseId: string) => {
    return useQuery({
        queryKey: ["sections", courseId],
        queryFn: () => getSectionsByCourseId(courseId),
        enabled: !!courseId,
    })
}