import express from 'express';
import { addExpense, deleteExpense, getExpenses, getExpensesForCategory } from "../controllers/expenseController.js";

const router = express.Router();

router.get('/', getExpenses);
router.get('/:categoryId', getExpensesForCategory);
router.post('/', addExpense);
router.delete('/:id', deleteExpense);

export default router;