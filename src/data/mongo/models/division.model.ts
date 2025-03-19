import mongoose from "mongoose";

const DivisionSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    result: {
        type: Number,
        required: true
    }
});

export const DivisionModel = mongoose.model(
    'Division',
    DivisionSchema
);