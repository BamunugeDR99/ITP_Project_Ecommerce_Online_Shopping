const mongoose =require("mongoose");


const paymentdetailSchema = mongoose.Schema({

cardtype:{
    type:String,
    required:true
},

cardowner : {
    type: String,
    required:true
    
},

cardnumber:{
    type:Number,
    required:true
},

carddate :{
    type:String,
    required:true
},

carddate :{
    type:String,
    required:true
},

cardcvv :{
    type:Number,
    required:true
},

ownerID : {

    type:String,
    required:true
    

}

})

const paymentdetail=mongoose.model("paymentdetail",paymentdetailSchema);
module.exports=paymentdetail;
