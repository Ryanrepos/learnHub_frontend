import { useMutation } from "@tanstack/react-query"
import { login, registerUser } from "../services/auth.service"
import { useNavigate } from "react-router-dom"
import { message } from "antd"

export const useLogin = () => {
    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            // router push to dashboard
            localStorage.setItem("data", JSON.stringify(data))
            alert("Login successful")
        },
        onError: (error) => {
            localStorage.setItem("errror", JSON.stringify(error))
            alert("Login failed")
        }
    })
}

// export const useRegister = () => {
//     return useMutation({
//         mutationFn: register,
//         onSuccess: (data) => {
//             // router push to dashboard
//             localStorage.setItem("data", JSON.stringify(data))
//             alert("Registration successful")
//         },
//         onError: (error) => {
//             localStorage.setItem("errror", JSON.stringify(error))
//             alert("Registration failed")
//         }
//     })
// }

export const useRegister = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: registerUser,
        onSuccess: (res) => {
            // Backenddan kelgan tokenni saqlash
            localStorage.setItem("token", res.token);
            if (res.user) {
                localStorage.setItem("user", JSON.stringify(res.user));
            }
            message.success("Account muvaffaqiyatli yaratildi!");
            navigate("/dashboard");
        },
        onError: (error: any) => {
            const errorMsg = error.response?.data?.message || "Ro'yxatdan o'tishda xatolik!";
            message.error(errorMsg);
            console.error("Register error:", error);
        }
    });
};