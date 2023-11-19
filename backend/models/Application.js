import { Schema, model } from 'mongoose';

const Application = new Schema({
    // don't forget to check applicationType for existence
    applicationType: {
        type: Schema.Types.ObjectId,
        ref: 'ApplicationType',
        required: true,
    },
    // don't forget to check user for existence
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        default: Date.now,
        immutable: true,
    },
});

export default model('Application', Application);
