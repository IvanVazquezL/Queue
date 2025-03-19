import mongoose from "mongoose";

const expressionSchema = new mongoose.Schema({
    expression: {
        type: String,
        required: true
    }
});

export const ExpressionModel = mongoose.model(
    'expression',
    expressionSchema
);