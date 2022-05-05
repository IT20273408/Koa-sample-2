const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const traderSchema = new Schema({

    traderId : {
        type : String,
        required: true
    },
    traderName : {
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

const Trader = mongoose.model("Trader", traderSchema);

module.exports = Trader;