const mongoose = require ("mongoose");

//Creating Schema --->Template for the documents in the DB
const Schema = mongoose.Schema;

const PackageSchema = new Schema({



    packageName : {
        type:String,
        required: true 
    },

    description : {
        type:String,
        required: true 
    },

    price : {
        type:Number,
        required: true 
    },


    startDate : {
        type:Date,
        required: true 
    },

    endDate : {
        type:Date,
        required: true 
    },

    image : {
        type:String,
        required: true 
    },

    seller : {

        type:String,
        required:true,
        default : " "
    },

    content: [{ 
        
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

        }],

        packageAvailability : {

            type:Boolean
        }



})

//Passing the schema to the DB
const Package = mongoose.model("Package", PackageSchema);

//export module
module.exports = Package;