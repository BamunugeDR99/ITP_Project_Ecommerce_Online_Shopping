const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemtestSchema = new Schema({

    name : {
        type : String,
        required : true
    },

    itemimage : {
        type : String,
        required : true
    },


})

const Itemtest = mongoose.model("Itemtest",ItemtestSchema);
module.exports = Itemtest;