const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('config');
let paymentdetails = require("../modules/paymentdetails");


//Insert
router.route("/add").post((req,res)=>{
    const ctype = req.body.ctype;
    const cowner = req.body.CardOwner;
     const cnumber = Number(req.body.cnumber);
    const edate = req.body.edate;

    const newpaymentdetails = new paymentdetails({
        ctype,
        cowner,
        cnumber,
        edate
    })

    newpaymentdetails.save().then(()=>{
       

            res.json("Uour payment Added Successfully");
                      /*res.json({newpaymentDetail:{
                        CardType : newpaymentDetail.CardType,
                        CardOwner : newpaymentDetail.CardOwner,
                        CardNumber : newpaymentDetailt.CardNumber,
                        ExpirationDate : newpaymentDetailt.ExpirationDate
                      }});*/
              
    }).catch((err) =>{
        
        console.log(err);
    })
});

// retrive


// route("/") this can use for fetching all the data from the DB 
router.route("/get").get((reg,res)=> {
    paymentdetails.find().then((paymentdetails)=>{
        res.json(paymentdetails);
        
    }).catch((err) =>{
        console.log(err);
    })
});


// update 
router.route("/update/:id").put(async (req,res) =>{
    let userID = req.params.id;
    const{ctype,cowner,cnumber,edate} = req.body;

    const updatepaymentdetails = {
        ctype,
        cowner,
        cnumber,
        edate

    }

    const update = await paymentdetails.findByIdAndUpdate(userID,updatepaymentdetails).then(()=>{
        res.json( " updated")
        }).catch((err) => {
            console.log(err);
           // res.status(500).send({status: "Error with updating data", error:err.message});
        })
    });


// delete 
router.route("/delete/:id").delete(async (req,res) =>{
    let userID = req.params.id;

        await paymentdetails.findByIdAndDelete(userID)
        .then(() => {
            res.json("User Deleted");
        }).catch((err) => {

            console.log(err.message);
            // gggff
          //  res.status(500).send({status : "Error with delete", error : err.message});
        })
    });

    
// get one student details (Specific)
router.route("/getItem/:id").get(async (req,res) =>{
    let userID = req.params.id;
    const user = await paymentdetails.findById(userID).then((paymentdetailsss) =>{
        // res.status(200).send({status:"User fetched"});
        res.json(paymentdetailsss);
    }).catch((err) =>{
        console.log(err.message);
       // res.status(500).send({status : "Error with get user", error : err.message});
    })
}) /**/


module.exports = router;

