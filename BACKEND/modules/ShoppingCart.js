const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShoppingCartSchema = new Schema({

    customerID : {
        type : String,
        required : true
    },

    ItemIDs : [{

        type:String
    }],

    
    PackageIDs : [{

        type:String
    }]



})

const ShoppingCart = mongoose.model("ShoppingCart",ShoppingCartSchema);
module.exports = ShoppingCart;