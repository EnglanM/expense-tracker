export const validateExpense = (amount: number, description: string): boolean => {
  return amount > 0 && description.trim().length > 0;
};

export const validateCategory = (name: string): boolean => {
  return name.trim().length > 0;
};

