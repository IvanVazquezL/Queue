import mongoose from "mongoose";

const subtractionSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    result: {
        type: Number,
        required: true
    }
});

export const SubtractionModel = mongoose.model(
    'subtraction',
    subtractionSchema
);