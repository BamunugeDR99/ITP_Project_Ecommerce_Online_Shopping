const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('config');
let Review= require("../modules/Review");


router.route("/add").post((req,res)=>{

    const description = req.body.description;
    const date = req.body.date;
    const noofstars = req.body.noofstars;
    const customerid = req.body.customerid;
    const itemid = req.body.itemid;
    const reviewstatus = req.body.reviewstatus;
    const reportreason = req.body.reportreason;

    const newReview= new Review({
        description,
        date,
        noofstars,
        customerid,
        itemid,
        reviewstatus,
        reportreason
    })

    newReview.save().then(()=>{
       
                      res.json({newReview:{
                          description : newReview.description,
                          date : newReview.date,
                          noofstars : newReview.noofstars,
                          customerid : newReview.customerid,
                          itemid : newReview.itemid,
                          reviewstatus : newReview.reviewstatus,
                          reportreason : newReview.reportreason
                      }});
              
    }).catch((err) =>{
        
        console.log(err);
    })
});

router.route("/get").get((req,res)=>{
    Review.find().then((review)=>{
        res.json(review)
        
    }).catch((err) =>{
        console.log(err)
    })
});

router.route("/get/:id").get(async(req,res)=>{
   
    let userID = req.params.id;

    const user = await Review.findById(userID).then((review) => {

        res.json(review);
    
    }).catch((err)=>{
        console.log(err.message);
    })
});

// router.route("/uprev/:id").put(async (req,res) =>{
//     let userID = req.params.id;
//     const{description,date} = req.body;

//     const updateReview = {
//         description,
//         date,
//         noofstars,
//         customerid,
//         itemid,
//         reviewstatus,
//         reportreason
//     }

//     const update = await Review.findByIdAndUpdate(userID,updateReview).then(()=>{
//         res.status(200).send({status: "User updated"})
//         }).catch((err) => {
//             console.log(err);
//             res.status(500).send({status: "Error with updating data", error:err.message});
//         })
//     });


// delete 
router.route("/delete/:id").delete(async (req,res) =>{
    let userID = req.params.id;

        await Review.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({status : "User Deleted"});
        }).catch((err) => {

            console.log(err.message);
            res.status(500).send({status : "Error with delete", error : err.message});
        })
    });

module.exports = router;

