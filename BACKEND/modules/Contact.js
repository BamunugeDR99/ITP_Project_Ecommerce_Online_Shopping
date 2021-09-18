const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({

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

})

const Contact = mongoose.model("Contact",ContactSchema);
module.exports = Contact;