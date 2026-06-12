import { useAuthStore } from "@/store/auth.store";
import { api } from "./api";

export const getMe = async () => {
    const response = await api.get("/auth/me");
    return response.data;
};

export const updateProfile = async (data: {
    firstName?: string;
    lastName?: string;
    email?: string;
}) => {
    const response = await api.put(`/users/profile`, data); // ✅ userId kerak emas
    return response.data;
};

export const updateAvatar = async (file: File) => {
    const userId = useAuthStore.getState().user?.id;
    const formData = new FormData();
    formData.append("avatar", file);

    const response = await api.put(`/users/${userId}/avatar`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
};

export const getUsersByAdmin = async (params?: { search?: string }) => {
    const response = await api.get(`/users/get-users`, { params });
    return response.data;
}