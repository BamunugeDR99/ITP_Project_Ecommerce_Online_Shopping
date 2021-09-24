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
    // const reviewstatus = req.body.reviewstatus;
    // const reportreason = req.body.reportreason;

    const newReview= new Review({
        description,
        date,
        noofstars,
        // reviewstatus,
        // reportreason,
        customerid,
        // sellerid,
        itemid
    })

    newReview.save().then(()=>{
       
                      res.json({newReview:{
                          description : newReview.description,
                          date : newReview.date,
                          noofstars : newReview.noofstars,
                          customerid : newReview.customerid,
                          itemid : newReview.itemid,
                        //   sellerid : newReview.sellerid,
                        //   reviewstatus : newReview.reviewstatus,
                        //   reportreason : newReview.reportreason
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

    const user = await Review.findById(userID).then((item) => {

        res.json(item);
    
    }).catch((err)=>{
        console.log(err.message);
    })
});

router.route("/update/:id").put(async (req,res) =>{
    let userID = req.params.id;
    const{description,date} = req.body;

    const updateReview = {
        description,
        date,
        noofstars,
        customerid,
        itemid,
        sellerid,
        reviewstatus,
        reportreason
    }

    const update = await Review.findByIdAndUpdate(userID,updateReview).then(()=>{
        res.status(200).send({status: "User updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with updating data", error:err.message});
        })
    });



    // exports.updateReview = async (req, res) => {
    //     let reviewid = req.params.id;
    //     const { description } = req.body;
      
    //     const updateReview = { description };
      
    //     //Metana findBiId dmmoth vada kranava findOneAndUpdate dmmama vda na.
    //     const update = await ReviewModule.update(
    //       { _id: reviewid },
    //       { $set: { description: description } }
    //     )
    //       .then(() => {
    //         res.status(200).send({ description: "Review updated" });
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         res.status(500).send({
    //           status: "Error with updating Review",
    //           error: err.message,
    //         });
    //       });
    //   };

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


    router.route("/updateReview/:id").put(async (req, res) => {
        let reviewID = req.params.id;
        const{
              description,
             } = req.body;
      
        const newReview  = {
          description,
        }
      
        const update = await Review.updateOne(
      
          {_id : reviewID},
          {$set : {description :description}},
      
      
        ).then(() => {
      
          res.status(200).send({ status: "Review updated" });
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .send({ status: "Error with updating review", error: err.message });
        });
      
      
        })

        router.route("/updateRev/:id").put(async (req, res) => {
            let reviewID = req.params.id;
            const{
                  reportreason,
                 } = req.body;
          
            const newReview  = {
              reportreason,
            }
          
            const update = await Review.updateOne(
          
              {_id : reviewID},
              {$set : {reportreason :reportreason}},
          
          
            ).then(() => {
          
              res.status(200).send({ status: "Report updated" });
            })
            .catch((err) => {
              console.log(err);
              res
                .status(500)
                .send({ status: "Error with updating report", error: err.message });
            });
          
          
            })


            router.route("/updateR/:id").put(async (req,res) =>{
                let userID = req.params.id;
                const{description,date} = req.body;
            
                const updateReview2 = {
                    description,
                    date,
                    noofstars,
                    customerid,
                    itemid,
                    sellerid,
                    reviewstatus,
                    reportreason
                } = req.body;

                 updateReview2 = {
                    description,
                    date,
                    noofstars,
                    customerid,
                    itemid,
                    sellerid,
                    reviewstatus,
                    reportreason
                };
            
                const update = await Review.findByIdAndUpdate(userID,updateReview2).then(()=>{
                    res.status(200).send({status: "User updated"})
                    }).catch((err) => {
                        console.log(err);
                        res.status(500).send({status: "Error with updating data", error:err.message});
                    })
                });
            

module.exports = router;

