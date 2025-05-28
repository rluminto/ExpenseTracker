const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    test: {
        type: String,
        trim: true,
        require: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);