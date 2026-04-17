import { useMutation } from "@tanstack/react-query";
import { login, registerUser } from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useAuthStore } from "../store/auth.store";

// LOGIN HOOK
export const useLogin = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuthStore();

    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
        console.log("FULL DATA:", data);
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