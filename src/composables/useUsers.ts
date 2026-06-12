

// export const useGetMyCourses = () => {
//     const { token } = useAuthStore();
//     return useQuery({
//         queryKey: ["my-courses"],
//         queryFn: getMyCourses,
//         enabled: !!token,
//     });
// };

import { getUsersByAdmin } from "@/services/user.service"
import { useQuery } from "@tanstack/react-query"

export const useGetUsersByAdmin = (search?: string) => {
    return useQuery({
        queryKey: ["admin-users", search],
        queryFn: () => getUsersByAdmin({ search }),
    });
};