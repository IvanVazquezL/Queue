import mongoose from "mongoose";

const multiplicationSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    result: {
        type: Number,
        required: true
    }
});

export const MultiplicationModel = mongoose.model(
    'multiplication',
    multiplicationSchema
);