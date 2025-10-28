import type { ButtonProps } from "../../types";

export const Button = ({variant = 'primary', children, ...props}: ButtonProps) => {
    const baseStyles = 'px-4 py-2 rounded font-medium transition-colors';
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        danger : 'bg-red-600 text-white hover:bg-red-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700'
    };
    
    return (
        <button className={`${baseStyles} ${variants[variant]}`} {...props}>
            {children}
        </button>
    );
};