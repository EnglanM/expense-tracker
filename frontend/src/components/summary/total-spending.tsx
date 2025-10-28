import type { TotalSpendingProps } from "../../types";
import { formatCurrency } from "../../utils/formatters";

export const TotalSpending = ({expenses}: TotalSpendingProps) => {
    
    let total = 0;
    expenses.forEach((expense)=>{
        total = total + expense.amount;
    });
    
    return (
        <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Total Spending</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">
                {formatCurrency(total)}
            </p>
        </div>
    );
};