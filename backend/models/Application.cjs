const mongoose = require('mongoose');

const Application = new mongoose.Schema({
    // don't forget to check applicationType for existence
    applicationType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ApplicationType',
        required: true,
    },
    // don't forget to check user for existence
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        default: Date.now,
        immutable: true,
    },
});

export default mongoose.model('Application', Application);
