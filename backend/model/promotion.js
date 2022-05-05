const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const promotionSchema = new Schema({

    promotionId : {
        type : String,
        required: true
    },
    promotionName : {
        type : String,
        required: true
    },
    
    promotionPercentage : {
        type : Number,
        required: true
    },
    
    price : {
        type : Number,
        required: true
    },



})

const Promotion = mongoose.model("Promotion", promotionSchema);

module.exports = Promotion;