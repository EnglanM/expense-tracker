import type { InputHTMLAttributes } from "react";

export const Input = ({className = '', ...props}: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input 
            className={`px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {...props}
        />
    );
};