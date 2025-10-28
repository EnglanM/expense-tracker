import { Schema, model } from "mongoose";

const categorySchemaStructure = {
    name: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
};

const categorySchema = new Schema(categorySchemaStructure);
const Category = model('Category', categorySchema);

export default Category;
