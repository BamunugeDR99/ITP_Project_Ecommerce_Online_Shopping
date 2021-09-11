const mongoose =require("mongoose");


const paymentdetailSchema = mongoose.Schema({

cardtype:{
    type:String,
    requied:true,
},

cardowner : {
    type: String,
    requied:true,
},

cardnumber:{
    type:Number,
    requied:true,
},

carddate :{
    type:String,
    requied:true,
},

carddate :{
    type:String,
    requied:true,
},

cardcvv :{
    type:Number,
    requied:true,
}


})

const paymentdetail=mongoose.model("paymentdetail",paymentdetailSchema);
module.exports=paymentdetail;
