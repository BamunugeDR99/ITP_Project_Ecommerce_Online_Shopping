const mongoose = require ("mongoose");

//Creating Schema --->Template for the documents in the DB
const Schema = mongoose.Schema;

const PackageOrderSchema = new Schema({



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
        required: true,
        default:new Date() 
    },


    Packages: [{ 
        
        packageName : String,
    
        description : String,
    
        price : Number,
    
    
        startDate : Date,
    
        endDate : Date,
    
        image : String,
    
        seller : String,
    
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
    
            packageAvailability : Boolean
        }]




    



})

//Passing the schema to the DB
const PackageOrder = mongoose.model("PackageOrder", PackageOrderSchema);

//export module
module.exports = PackageOrder;