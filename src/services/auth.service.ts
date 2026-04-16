import axios from "axios"

export const login = async (data: { email: string; password: string }) => {
    const res = axios.post("http://localhost:3000/auth/login", data)
    console.log("login res:", res)
    return res
}

// Axios instance - har safar localhost deb yozmaslik uchun
const api = axios.create({
    baseURL: "http://localhost:3000",
});

// API funksiyalari
export const registerUser = async (data: any) => {
    // Axiosda .post dan keyin .data ni qaytarish shart
    const response = await api.post("/auth/register", data);
    return response.data;
};