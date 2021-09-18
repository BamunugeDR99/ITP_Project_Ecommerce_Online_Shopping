const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactselSchema = new Schema({

    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    message : {
        type : String,
        required : true
    },

    customerid : {
        type : String,
        required : false,
        default : "abc"
    },

    sellerid : {
        type : String,
        required : false,
        default : "xyz"
    }

})

const Contactsel = mongoose.model("Contactsel",ContactselSchema);
module.exports = Contactsel;