const mongoose =require("mongoose");


const paymentdetailSchema = mongoose.Schema({

ctype:{
    type:String,
    requied:true,
},

cowner : {
    type: String,
    requied:true,
},

cnumber:{
    type:Number,
    requied:true,
},

edate :{
    type:String,
    requied:true,
},

})

const paymentdetail=mongoose.model("paymentdetail",paymentdetailSchema);
module.exports=paymentdetail;
