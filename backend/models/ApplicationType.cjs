const mongoose = require('mongoose');

// Define the ApplicationType schema and model
const applicationTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['easy', 'full', 'genuine'],
    },
});

export default mongoose.model('ApplicationType', applicationTypeSchema);
