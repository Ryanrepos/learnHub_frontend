import { getLessonsByLessonId } from "@/services/lesson.service"
import { useQuery } from "@tanstack/react-query"

export const useLessons = (lessonId: string) => {
    return useQuery({
        queryKey: ["lessons", lessonId],
        queryFn: () => getLessonsByLessonId(lessonId),
        enabled: !!lessonId,
    })
}