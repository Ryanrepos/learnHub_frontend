import { useMutation, useQuery } from "@tanstack/react-query";
import { login, registerUser } from "../services/auth.service";
import { updateProfile, updateAvatar, getMe } from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useAuthStore } from "../store/auth.store";
import { getCourses, type CourseParams } from "@/services/courses.service";
import { getCategories } from "@/services/category.service";

// LOGIN HOOK
export const useLogin = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuthStore();

    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            setAuth(data.data.user, data.data.access_token);
            message.success("Tizimga muvaffaqiyatli kirdingiz!");
            navigate("/");
        },
        onError: (error: any) => {
            const errorMsg = error.response?.data?.message || "Login yoki parol xato!";
            message.error(errorMsg);
        }
    });
};

// REGISTER HOOK
export const useRegister = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuthStore();

    return useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            if (data.user && (data.token || data.accessToken)) {
                setAuth(data.user, data.access_token || data.token);
            }
            message.success("Account muvaffaqiyatli yaratildi!");
            navigate("/auth/verify-email", { state: { email: data.user?.email } });
        },
        onError: (error: any) => {
            const errorMsg = error.response?.data?.message || "Ro'yxatdan o'tishda xatolik!";
            message.error(errorMsg);
        }
    });
};

// GET ME HOOK
export const useGetMe = () => {
    const { token } = useAuthStore();

    return useQuery({
        queryKey: ["me"],
        queryFn: getMe,
        enabled: !!token,
        staleTime: 1000 * 60 * 5,
    });
};

// UPDATE PROFILE HOOK
export const useUpdateProfile = () => {
    return useMutation({
        mutationFn: updateProfile,
        onSuccess: () => {
            message.success("Profil muvaffaqiyatli yangilandi!");
        },
        onError: () => {
            message.error("Profilni yangilashda xatolik!");
        }
    });
};

// UPDATE AVATAR HOOK
export const useUpdateAvatar = () => {
    return useMutation({
        mutationFn: updateAvatar,
        onSuccess: () => {
            message.success("Rasm muvaffaqiyatli yangilandi!");
        },
        onError: () => {
            message.error("Rasmni yuklashda xatolik!");
        }
    });
};

export const useGetCourses = (params?: CourseParams) => {
    return useQuery({
        queryKey: ["courses", params],
        queryFn: () => getCourses(params),
    });
}

export const useGetCategories = (search?: string) => {
    return useQuery({
        queryKey: ["categories", search],
        queryFn: () => getCategories(search),
    });
};