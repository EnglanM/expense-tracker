import apiClient from "./api-client";
import { API_ROUTES } from "./api-routes";
import type { Category } from "../types";

export const getCategories = async () => {
    try {
        const res = await apiClient.get(API_ROUTES.CATEGORY);
        if(res.data.ok) {
            return {ok: res.data.ok, data: res.data.data};
        } else {
            return {ok: res.data.ok, error: res.data.error || 'Unknown error'};
        }
    } catch (error: any) {
        return { ok: false, error: error.message || "Network error" };
    }
};

export const createCategory = async (category: Omit<Category, '_id' | 'createdAt'>) => {
    try {
        const res = await apiClient.post(API_ROUTES.CATEGORY, category);
        if(res.data.ok) {
            return {ok: res.data.ok, data: res.data.data};
        } else {
            return {ok: res.data.ok, error: res.data.error || 'Unknown error'};
        }
    } catch (error: any) {
        return { ok: false, error: error.message || "Network error" };
    }
};

export const deleteCategory = async (id: string) => {
    try {
        const res = await apiClient.delete(`${API_ROUTES.CATEGORY}/${id}`);
        if(res.data.ok) {
            return {ok: res.data.ok, data: res.data.data};
        } else {
            return {ok: res.data.ok, error: res.data.error || 'Unknown error'};
        }
        } catch (error: any) {
        return { ok: false, error: error.message || "Network error" };
    }
};