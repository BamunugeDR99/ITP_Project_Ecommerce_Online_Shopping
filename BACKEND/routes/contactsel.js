const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('config');
let Contactsel= require("../modules/Contactsel");


router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const customerid = req.body.customerid;
    const sellerid = req.body.sellerid;

    const newContactsel= new Contactsel({
        name,
        email,
        message,
        customerid,
        sellerid 
        

    })

    newContactsel.save().then(()=>{
       
                      res.json({newContactsel:{
                        name : newContactsel.name,
                        email : newContactsel.email,
                        message : newContactsel.message,
                        customerid : newContactsel.customerid,
                        sellerid : newContactsel.sellerid,
                      }});
              
    }).catch((err) =>{
        
        console.log(err);
    })
});

router.route("/get").get((req,res)=>{
    Contactsel.find().then((contactsel)=>{
        res.json(contactsel)
        
    }).catch((err) =>{
        console.log(err)
    })
});

router.route("/get/:id").get(async(req,res)=>{
    let userID = req.params.id;

    const user = await Contactsel.findById(userID).then((item) => {

        res.json(item);
    
    }).catch((err)=>{
        console.log(err.message);
    })
});

router.route("/update/:id").put(async (req,res) =>{
    let userID = req.params.id;
    const{name,email,message,customerid,sellerid} = req.body;

    const updateContactsel = {
        name,
        email,
        message,
        customerid,
        sellerid
        
    }

    const update = await Contactsel.findByIdAndUpdate(userID,updateContactsel).then(()=>{
        res.status(200).send({status: "User updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with updating data", error:err.message});
        })
    });


router.route("/delete/:id").delete(async (req,res) =>{
    let userID = req.params.id;

        await Contactsel.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({status : "User Deleted"});
        }).catch((err) => {

            console.log(err.message);
            res.status(500).send({status : "Error with delete", error : err.message});
        })
    });

module.exports = router;



