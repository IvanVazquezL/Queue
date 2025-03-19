import mongoose from "mongoose";

const additionSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    result: {
        type: Number,
        required: true
    }
});

export const AdditionModel = mongoose.model(
    'addition',
    additionSchema
);