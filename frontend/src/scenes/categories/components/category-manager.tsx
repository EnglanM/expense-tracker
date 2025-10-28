import { useState, type FormEvent } from "react";
import { Button } from "../../../components/common/button";
import { Input } from "../../../components/common/input";
import type { CategoryManagerProps } from "../../../types";

export const CategoryManger = ({categories, onCreateCategory, onDeleteCategory}: CategoryManagerProps) => {
    const [categoryName, setCategoryName] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onCreateCategory(categoryName);
        setCategoryName('');
    };

    return (
        <div className="bg-white p-4 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Manage Categories</h2>
            
            <form onSubmit={handleSubmit} className="mb-6">
                <div className="flex gap-2">
                    <Input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Category name"
                    required
                    />
                    <Button type="submit">Add Category</Button>
                </div>
            </form>
    
            <div className="space-y-2">
            {categories.map((category) => (
                <div key={category._id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium">{category.name}</span>
                    <Button
                        variant="danger"
                        onClick={() => onDeleteCategory(category._id)}
                    >
                        Delete
                    </Button>
                </div>
            ))}
            </div>
      </div>
    );
};