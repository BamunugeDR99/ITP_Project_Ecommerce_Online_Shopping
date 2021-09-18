const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomertestSchema = new Schema({

    name : {
        type : String,
        required : true
    },

    cusimage : {
        type : String,
        required : true
    },


})

const Customertest = mongoose.model("Customertest",CustomertestSchema);
module.exports = Customertest;