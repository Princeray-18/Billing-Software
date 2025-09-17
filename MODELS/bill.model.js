
const mongoose = require('mongoose');
const { Schema } = mongoose;

const billSchema = new Schema({
    customerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    discount: { type: Number, default: 0 },
    totalamount: { type: Number, required: true },
},
    { timestamps: true }
);

module.exports = mongoose.model('Bill', billSchema);
