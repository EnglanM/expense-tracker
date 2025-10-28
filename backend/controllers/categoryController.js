import Category from "../models/category.js";
import Expense from "../models/expense.js";

// Get all categories
export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });
        res.json({ok: true, data: categories});
    } catch (error) {
        res.status(500).json({
            code: CATEGORY_NOT_FOUND,
            error: error.message
        });
    }
};

// Add new category
export const addCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const savedCategory = await newCategory.save();
        res.status(201).json({ok: true, data: savedCategory});
    } catch (error) {
        res.status(400).json({
            code: CATEGORY_NOT_ADDED,
            error: error.message
        });
    }
};

// Delete category
export const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        await Expense.deleteMany({categoryId});
        const deleted = await Category.findByIdAndDelete(categoryId);

        if(!deleted) {
            res.status(404).json({ ok: false, error: 'Category not found' });
        } else {
            res.json({ ok: true, message: 'Category deleted' });
        }
    } catch (error) {
        res.status(500).json({
            code: CATEGORY_NOT_DELETED,
            error: error.message
        });
    }
};