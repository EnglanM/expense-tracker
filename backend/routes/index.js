import express from 'express';
import expenseRoutes from './expenseRoutes.js'
import categoryRoutes from './categoryRoutes.js'
import emailRoutes from './emailRoutes.js'

const router = express.Router();

router.use('/expenses', expenseRoutes);
router.use('/category',categoryRoutes);
router.use('/email', emailRoutes);


export default router;