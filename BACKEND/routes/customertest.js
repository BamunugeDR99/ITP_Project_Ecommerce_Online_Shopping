const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('config');
let Customertest= require("../modules/Customertest");


router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const cusimage = req.body.cusimage;

    const newCustomertest= new Customertest({
        name,
        cusimage

    })

    newCustomertest.save().then(()=>{
       
                      res.json({newCustomertest:{
                          name : newCustomertest.name,
                          cusimage : newCustomertest.cusimage,
                      }});
              
    }).catch((err) =>{
        
        console.log(err);
    })
});

router.route("/get").get((req,res)=>{
    Customertest.find().then((Customertest)=>{
        res.json(Customertest)
        
    }).catch((err) =>{
        console.log(err)
    })
});

router.route("/get/:id").get(async(req,res)=>{
    let userID = req.params.id;

    const user = await Customertest.findById(userID).then((item) => {

        res.json(item);
    
    }).catch((err)=>{
        console.log(err.message);
    })
});

router.route("/update/:id").put(async (req,res) =>{
    let userID = req.params.id;
    const{name,cusimage} = req.body;

    const updateCustomertest = {
        name,
        cusimage
    }

    const update = await Customertest.findByIdAndUpdate(userID,updateCustomertest).then(()=>{
        res.status(200).send({status: "User updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with updating data", error:err.message});
        })
    });


router.route("/delete/:id").delete(async (req,res) =>{
    let userID = req.params.id;

        await Customertest.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({status : "User Deleted"});
        }).catch((err) => {

            console.log(err.message);
            res.status(500).send({status : "Error with delete", error : err.message});
        })
    });

module.exports = router;

