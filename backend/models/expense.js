import { model, Schema, Types } from "mongoose";
import { type } from "os";

const expenseSchemaStructure = {
    categoryId: {
        type: Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
};

const expenseSchema = new Schema(expenseSchemaStructure);
const Expense = model('Expense', expenseSchema);

export default Expense;