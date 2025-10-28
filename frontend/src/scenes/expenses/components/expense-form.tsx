import { useState, type ChangeEvent, type FormEvent } from "react";
import { Input } from "../../../components/common/input";
import { Button } from "../../../components/common/button";
import type { ExpenseFormProps } from "../../../types";

export const ExpenseForm = ({categories, onSubmit}: ExpenseFormProps) => {
    const [categoryId, setCategoryId] = useState(categories[0]?._id || '');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit({categoryId, amount: parseFloat(amount), description});
        setAmount('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
            
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Category</label>
                <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                >
                {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                    {cat.name}
                    </option>
                ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Amount</label>
                <Input
                type="number"
                value={amount}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
                required
                min="0.01"
                step="0.01"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Description</label>
                <Input
                type="text"
                value={description}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                />
            </div>

            <Button type="submit">Add Expense</Button>


        </form>
    );


};