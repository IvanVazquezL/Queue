import mongoose from "mongoose";

const processSchema = new mongoose.Schema({
    processName: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    functionName: {
        type: String,
        required: true
    }
});

export const ProcessModel = mongoose.model(
    'process',
    processSchema
);