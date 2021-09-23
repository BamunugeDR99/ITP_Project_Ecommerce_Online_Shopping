const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    Item_name : {
        type : String,
        required : true
    },

    Brand : {
        type : String,
        required : true
    },

    Quantity : {
        type : String,
        required : true
    },

    Model : {
        type : String,
        required : true
    },

    Price : {
        type : String,
        required : true
    },

    Stock_keeping_unit : {
        type : String,
        required : true
    },

    Description : {
            type : String,
            required : true
    },

    Specification : {
        type : String,
        required : true
    },
    
    WHT : {
        type : String,
        required : false
    },

    Warrenty : {
        type : Boolean,
        required : true,
        default : true
    },

    Color_family: [{
        type : String,
    }],

    Other_colors : {
        type : String,
        required : false,
        default : null
    },

    Images : [{
        type : String,
    }],

    Category : {
        type : String,
        required :true,
        default : "Others"
    },

    ItemAvailabilityStatus : {
        type : Boolean,
        required : true,
        default : true
    },

    DiscountStatus : {
        type : Boolean,
        required : true,
        default : false
    },

    FinalPrice : {
        type : String,
        required : true,
        default : "0"
    },
    DiscountPrecentage : {
        type : String,
        required : true,
        default : "0"
    },

    SellerID : {
        type : String,
        required : false,
    }


})

const Item = mongoose.model("Item",ItemSchema);
//Student is changing to "students"s when it creates a collection
module.exports = Item;