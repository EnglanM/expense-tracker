import { useState, useEffect } from 'react';
import { getExpenses, createExpense, deleteExpense } from './services/expense-service';
import { getCategories, createCategory, deleteCategory } from './services/category-service';
import { sendEmailNotification } from './services/email-notification-service';
import { TotalSpending } from './components/summary/total-spending';
import { CategoryManger } from './scenes/categories';
import { ExpenseForm, ExpenseList } from './scenes/expenses';
import { NotificationForm } from './scenes/email-notifications';
import { loadEmailNotification } from './utils/local-storage';
import type { Category, Expense, EmailNotification } from './types';

function App() {
  
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [notification, setNotification] = useState<EmailNotification | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
    const savedNotification = loadEmailNotification();
    if (savedNotification) {
      setNotification(savedNotification);
    }
  }, []);

  useEffect(() => {
    if (notification && expenses.length > 0) {
      const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
      
      if (total >= notification.thresholdAmount) {
        checkAndSendNotification(total);
      }
    }
  }, [expenses, notification]);

  const loadData = async () => {
    setLoading(true);
    const expensesData = await getExpenses();
    if(expensesData.ok) {
      setExpenses(expensesData.data || []);
    }
    const categoriesData = await getCategories();
    if(categoriesData.ok) {
      setCategories(categoriesData.data || []);
    }
    setLoading(false);
  };

  const handleAddExpense = async (expense: Omit<Expense, '_id' | 'createdAt'>) => {
    const res = await createExpense(expense);
    if(res.ok) {
      await loadData();
    }
  };

  const handleDeleteExpense = async (id: string) => {
    const result = await deleteExpense(id);
    if (result.ok) {
      await loadData();
    }
  };

  const handleAddCategory = async (name: string) => {
    const result = await createCategory({ name });
    if (result.ok) {
      await loadData();
    }
  };

  const handleDeleteCategory = async (id: string) => {
    const res = await deleteCategory(id);
    if (res.ok) {
      await loadData();
    }
  };

  const handleSaveNotification = (newNotification: EmailNotification) => {
    setNotification(newNotification);
  };

  const handleRemoveNotification = () => {
    setNotification(null);
  };

  const checkAndSendNotification = async (total: number) => {
    if (!notification) return;

     await sendEmailNotification(
      notification.email,
      total,
      notification.thresholdAmount
    );

  };

  if(loading) {
    return (
      <div className="container mx-auto p-8 text-center">Loading ...</div>
    );
  }

  if(categories.length === 0){
    return (
      <div className="bg-white p-4 rounded-lg border">
        <p className="text-gray-500">Please create your first category</p>
        <CategoryManger 
          categories={categories}
          onCreateCategory={handleAddCategory}
          onDeleteCategory={handleDeleteCategory}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Expense Tracker</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <TotalSpending expenses={expenses} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg suspected:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <CategoryManger
            categories={categories}
            onCreateCategory={handleAddCategory}
            onDeleteCategory={handleDeleteCategory}
          />
        </div>
        <div className="lg:col-span-2">
          <ExpenseForm categories={categories} onSubmit={handleAddExpense} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <NotificationForm 
          notification={notification}
          onSave={handleSaveNotification}
          onRemove={handleRemoveNotification}
        />
      </div>

      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
    </div>
  );
}

export default App;