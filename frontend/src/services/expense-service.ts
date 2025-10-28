import apiClient from "./api-client";
import { API_ROUTES } from "./api-routes";
import type { Expense } from "../types";

export const getExpenses = async () => {
    try {
        const res = await apiClient.get(API_ROUTES.EXPENSES);
        if(res.data.ok) {
            return {ok: res.data.ok, data: res.data.data};
        } 
        else {
            return {
            ok: false, error: res.data.error || "Unknown error"
        };
    }
    } catch (error: any) {
        return { ok: false, error: error.message || "Network error" };
    }
}

export const getExpensesForCategory = async (categoryId: string) => {
    try {
        const res = await apiClient.get(`${API_ROUTES.EXPENSES}/${categoryId}`);
        if(res.data.ok) {
            return {ok: res.data.ok, data: res.data.data};
        } 
        else {
            return {ok: false, error: res.data.error || "Unknown error"};
        }
    } catch (error: any) {
        return { ok: false, error: error.message || "Network error" };
    }
};

export const createExpense = async (expense: Omit<Expense, '_id' | 'createdAt'>) => {
    try {
        const res = await apiClient.post(API_ROUTES.EXPENSES, expense);
        if(res.data.ok) {
            return {ok: res.data.ok, data: res.data.data};
        } 
        else {
            return {ok: false, error: res.data.error || "Unknown error"};
        }

    } catch (error: any) {
        return { ok: false, error: error.message || "Network error" };
    }
};

export const deleteExpense = async (id: string) => {
    try {
        const res = await apiClient.delete(`${API_ROUTES.EXPENSES}/${id}`);
        if(res.data.ok) {
            return {ok: res.data.ok, data: res.data.data};
        } 
        else {
            return {ok: false, error: res.data.error || "Unknown error"};
        }
    } catch (error: any) {
        return { ok: false, error: error.message || "Network error" };
    }
};