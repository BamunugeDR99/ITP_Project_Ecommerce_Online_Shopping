const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('config');
let Contact= require("../modules/Contact");


router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const customerid = req.body.customerid;

    const newContact= new Contact({
        name,
        email,
        message,
        customerid

    })

    newContact.save().then(()=>{
       
                      res.json({newContact:{
                          name : newContact.name,
                          email : newContact.email,
                          message : newContact.message,
                          customerid : newContact.customerid,
                      }});
              
    }).catch((err) =>{
        
        console.log(err);
    })
});

router.route("/get").get((req,res)=>{
    Contact.find().then((contact)=>{
        res.json(contact)
        
    }).catch((err) =>{
        console.log(err)
    })
});

router.route("/get/:id").get(async(req,res)=>{
    let userID = req.params.id;

    const user = await Contact.findById(userID).then((item) => {

        res.json(item);
    
    }).catch((err)=>{
        console.log(err.message);
    })
});

router.route("/update/:id").put(async (req,res) =>{
    let userID = req.params.id;
    const{name,email,message,customerid} = req.body;

    const updateContact = {
        name,
        email,
        message,
        customerid,
    }

    const update = await Contact.findByIdAndUpdate(userID,updateContact).then(()=>{
        res.status(200).send({status: "User updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with updating data", error:err.message});
        })
    });


router.route("/delete/:id").delete(async (req,res) =>{
    let userID = req.params.id;

        await Contact.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({status : "User Deleted"});
        }).catch((err) => {

            console.log(err.message);
            res.status(500).send({status : "Error with delete", error : err.message});
        })
    });

module.exports = router;

