import mongoose from 'mongoose';

const queueSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    errorMessage: {
        type: String
    }
});

export const QueueModel = mongoose.model(
    'queue',
    queueSchema
);