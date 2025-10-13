
const mongoose = require('mongoose');
const { Schema } = mongoose;

const billSchema = new Schema({
    customerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    product: [{
        productid: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    discount: { type: Number, default: 0 },
    totalamount: { type: Number, required: true },
},
    { timestamps: true }
);

module.exports = mongoose.model('Bill', billSchema);
