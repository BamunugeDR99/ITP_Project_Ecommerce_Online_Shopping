const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderHistorySchema = new Schema({


    RecieptNo : {
        type : String,
        required : true
    },

    TransTime : {
        type : Date,
        required : true
    },

    PacakgeID : [{
        type : String,
    }],

    PaymentType : {
        type : String,
        required : true
    },

    Amount : {
        type : String,
        required : true
    },

    ItemList : [{
        type : String,
    }],
})

const OrderHistory = mongoose.model("OrderHistory",OrderHistorySchema);
//Student is changing to "students"s when it creates a collection
module.exports = OrderHistory;