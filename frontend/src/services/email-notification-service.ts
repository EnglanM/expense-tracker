import apiClient from "./api-client";
import { API_ROUTES } from "./api-routes";

export const sendEmailNotification = async (email: string, totalAmount: number, thresholdAmount: number) => {
    try {
        const res = await apiClient.post(`${API_ROUTES.EMAIL}`, {
            email,
            totalAmount,
            thresholdAmount
        });
        
        if(res.data.ok) {
            return {ok: true, data: res.data};
        } 
        return {ok: false, error: res.data.error || "Unknown error"};
    } catch (error: any) {
        return { ok: false, error: error.message || "Network error" };
    }
}