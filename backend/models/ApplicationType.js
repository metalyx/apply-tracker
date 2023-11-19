import { Schema, model } from 'mongoose';

// Define the ApplicationType schema and model
const ApplicationType = new Schema({
    name: {
        type: String,
        unique: true,
        enum: ['easy', 'full', 'genuine'],
    },
});

export default model('ApplicationType', ApplicationType);
