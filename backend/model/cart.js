const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({


    cartName : {
        type : String,
        required: true
    },

    address : {
        type : String,
        required: true
    },

    phoneNumber : {
        type : Number,
        required: true
    },
    email : {
        type : String,
        required: true
    },


})

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;