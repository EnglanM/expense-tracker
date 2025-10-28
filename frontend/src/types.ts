import type { ButtonHTMLAttributes } from "react";

export interface Expense {
    _id?: string;
    categoryId: string | Category;
    amount: number;
    description: string;
    createdAt?: string;
}

export interface Category {
    _id: string;
    name: string;
    createdAt?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'danger' | 'secondary';
}

export interface TotalSpendingProps {
    expenses: Expense[];
}

export interface ExpenseListProps {
    expenses: Expense[];
    onDelete: (id: string) => void;
}

export interface ExpenseFormProps {
    categories: Category[];
    onSubmit: (expense: Expense) => void;
}

export interface CategoryManagerProps {
    categories: Category[];
    onCreateCategory: (name: string) => void;
    onDeleteCategory: (id: string) => void;
}

export interface EmailNotification {
    email: string;
    thresholdAmount: number;
}

export interface EmailNotificationFormProps {
    notification: EmailNotification | null;
    onSave: (notification: EmailNotification) => void;
    onRemove: () => void;
}