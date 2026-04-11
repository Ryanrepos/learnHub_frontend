import axios from "axios"

export const login = async (data: { email: string; password: string }) => {
    const res = axios.post("http://localhost:3000/auth/login", data)
    console.log("login res:", res)
    return res
}