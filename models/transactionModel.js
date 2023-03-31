// Importing Mongoose from Module
const mongoose = require("mongoose");
// Creating Schema for database
const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please Add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please Add some amount']
    },
    createAt: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});
// Creating Enquiry Object
const transaction = new mongoose.model("transaction", transactionSchema);
// Export Enquiry Object
module.exports = transaction;