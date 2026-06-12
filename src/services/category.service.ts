import { api } from "./api";

export const getCategories = async (search?: string) => {
    const response = await api.get("/categories", {
        params: search ? { search } : {}
    });
    return response.data;
};