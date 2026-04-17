import axios from "axios";
import { useAuthStore } from '../store/auth.store';

const api = axios.create({
    baseURL: "http://localhost:3000",
});

api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const login = async (data: { email: string; password: string }) => {
    const response = await api.post("/auth/login", data);
    return response.data;
};

export const registerUser = async (data: any) => {
    const response = await api.post("/auth/register", data);
    return response.data;
};