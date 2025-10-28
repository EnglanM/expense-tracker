import { Button } from "../../../components/common/button";
import type { Category, Expense, ExpenseListProps } from "../../../types";

export const ExpenseList = ({expenses, onDelete}: ExpenseListProps) => {
    
    let allExpenses = new Map<string | Category, Expense[]>();
    expenses.forEach((expense) => {
        const categoryKey = (expense.categoryId as Category).name;
        if(allExpenses.has(categoryKey)) {
            const group = allExpenses.get(expense.categoryId) ?? [];
            group?.push(expense);
        } else {
          allExpenses.set(categoryKey, [expense]);  
        }
    });


    return (
        <div className="space-y-6">
          {Object.entries(allExpenses).map(([category, categoryExpenses]) => (

            <div key={category} className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">{category}</h3>
              <div className="space-y-2">
                {categoryExpenses.map((expense: Expense) => (
                  <div
                    key={expense._id}
                    className="flex justify-between items-center p-2 hover:bg-gray-50 rounded"
                  >
                    <div>
                      <p className="font-medium">{expense.description}</p>
                      <p className="text-sm text-gray-500">
                        ${expense.amount.toFixed(2)}
                      </p>
                    </div>
                    <Button
                      onClick={() => expense._id && onDelete(expense._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </div>

          ))}
        </div>
      );
};
