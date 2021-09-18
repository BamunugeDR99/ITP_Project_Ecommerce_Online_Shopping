const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemWishListSchema = new Schema({
    CustomerID : {
        type : String,
        required : true
    },

    Items : [{
        type : String,
    }],
})

const ItemWishList = mongoose.model("WishList",ItemWishListSchema);
//Student is changing to "students"s when it creates a collection
module.exports = ItemWishList;