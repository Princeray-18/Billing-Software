const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    name: { type: String, required: true },
    Number:{type:String,required:true,unique:true},},

    
    {timestamps: true}
);
module.exports = mongoose.model('Customer', customerSchema);    


 