import { useMutation } from "@tanstack/react-query";
import { login, registerUser } from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

// LOGIN HOOK
export const useLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: login,
        onSuccess: (res) => {
            // 1. Token va User ma'lumotlarini saqlash
            // Axios response-ga qarab res.data.token yoki res.token bo'lishi mumkin
            const data = res.data || res; 
            
            localStorage.setItem("token", data.accessToken || data.token);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
            }

            message.success("Tizimga muvaffaqiyatli kirdingiz!");
            
            // 2. Dashboardga yo'naltirish
            navigate("/");
        },
        onError: (error: any) => {
            // Backenddan kelgan aniq xatoni ko'rsatish
            const errorMsg = error.response?.data?.message || "Login yoki parol xato!";
            message.error(errorMsg);
            console.error("Login error:", error);
        }
    });
};

// REGISTER HOOK
export const useRegister = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: registerUser,
        onSuccess: (res) => {
            const data = res.data || res;

            // Ro'yxatdan o'tgach darhol login bo'lgan bo'lsa token saqlaymiz
            if (data.token) {
                localStorage.setItem("token", data.token);
            }
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
            }

            message.success("Account muvaffaqiyatli yaratildi!");
            
            // Agarda Verify sahifangiz bo'lsa, bu yerni '/auth/verify' ga o'zgartiring
            navigate("/auth/verify-email", { state: { email: data.user?.email } });
        },
        onError: (error: any) => {
            const errorMsg = error.response?.data?.message || "Ro'yxatdan o'tishda xatolik!";
            message.error(errorMsg);
            console.error("Register error:", error);
        }
    });
};