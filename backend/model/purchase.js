const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const purchaseSchema = new Schema({

    purchaseId : {
        type : String,
        required: true
    },
    purchaseName : {
        type : String,
        required: true
    },
    
    price : {
        type : Number,
        required: true
    },
    quantity : {
        type : Number,
        required: true
    },


})

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;