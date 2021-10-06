const mongoose = require ("mongoose");

//Creating Schema --->Template for the documents in the DB
const Schema = mongoose.Schema;

const OrderSchema = new Schema({



    OrderID : {
        type:String,
        required: true 
    },

    SellerID : {
        type:String,
        required: true 
    },

    CustomerID : {
        type:String,
        required: true 
    },

    OQuantity : {
        type:String,
        required: true 
    },


    TransitTime : {
        type:Date,
        required: true 
    },


    Items: [{ 
        
        Item_name : String,
     
    
        Brand : String,
        
        Quantity: String,
     
        Model : String,
     
    
        Price :String,
    
    
        Stock_keeping_unit : String,
       
    
        Description : String,
        
        Specification : String,
     
        WHT : String,
    
        Warrenty :  Boolean,
     
    
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
    
        Category : String,
    
        ItemAvailabilityStatus: Boolean,
         
    
        DiscountStatus : Boolean,
    
        FinalPrice : String,

        DiscountPrecentage : String,

        }]

    



})

//Passing the schema to the DB
const Order = mongoose.model("Order", OrderSchema);

//export module
module.exports = Order;