import Expense from '../models/expense.js';

//get all expenses
export const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({createdAt: -1});
        res.status(201).json({ok: true, data: expenses});
    } catch (error) {
        res.status(500).json({ ok: false, error: {
            code: EXPENSE_NOT_FOUND,
            message: error.message,
        } });
    }
};

//get all expenses for a certain category
export const getExpensesForCategory = async (req, res) => {
    try {
        const expenses = await Expense.find(req.params.categoryId).populate('categoryId');
        res.status(201).json({ok: true, data: expenses});
    } catch (error) {
        res.status(500).json({ ok: false, error: {
            code: EXPENSE_NOT_FOUND,
            message: error.message,
        }});
    }
};

//add a new expense
export const addExpense = async (req, res) => {
    try {
        const newExpense = new Expense(req.body);
        const savedExpense = await newExpense.save();
        res.status(200).json({ok: true, data: savedExpense});
    } catch (error) {
        res.status(400).json({ ok: false, error: {
            code: EXPENSE_NOT_ADDED,
            message: error.message,
        } });
    }
}

//delete expenses
export const deleteExpense = async (req, res) => {
    const deleted = await Expense.findByIdAndDelete(req.params.id);
    if(!deleted) {
        res.status(404).json({ ok: false, error: {
            code: EXPENSE_NOT_DELETED,
            message: error.message
        } });
    }
    res.status(200).json({ ok: true, message: 'Expense deleted' });
}