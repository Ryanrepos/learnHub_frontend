import { useMutation } from "@tanstack/react-query"
import { login } from "../services/auth.service"

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