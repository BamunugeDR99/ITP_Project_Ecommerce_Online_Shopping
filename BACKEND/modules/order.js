const mongoose =require("mongoose");


const orderSchema = mongoose.Schema({


Qty : {
    type: int,
    requied:true,
},

totalprice:{
    type:Number,
    requied:true,
},

customerid :{
    type:String,
    requied:true,
},

itemid : [String],
s

})

const order=mongoose.model("order",orderSchema);
module.exports=order;
