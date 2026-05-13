import { useAuthStore } from "@/store/auth.store";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

///// FAKE DATA

const apiUrl = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

apiUrl.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const getFakeComments = async (data: any) => {
    const response = await apiUrl.get('/comments', { 
        params: typeof data === 'object' ? data : { postId: data } 
    });
    return response.data;
}

export const createFakeUser = async (userData: any) => {
    const response = await apiUrl.post('/users', userData);
    return response.data;
}

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