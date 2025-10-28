import type { EmailNotification } from '../types';

const STORAGE_KEY = 'expense_tracker_notifications';

export const saveEmailNotification = (notification: EmailNotification): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notification));
    } catch (error) {
        console.error('Failed to save notification:', error);
    }
};

export const loadEmailNotification = (): EmailNotification | null => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Failed to load notification:', error);
    }
    return null;
};

export const removeEmailNotification = (): void => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Failed to remove notification:', error);
    }
};