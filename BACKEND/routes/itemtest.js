const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('config');
let Itemtest= require("../modules/Itemtest");


router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const itemimage = req.body.itemimage;

    const newItemtest= new Itemtest({
        name,
        itemimage

    })

    newItemtest.save().then(()=>{
       
                      res.json({newItemtest:{
                          name : newItemtest.name,
                          itemimage : newItemtest.itemimage,
                      }});
              
    }).catch((err) =>{
        
        console.log(err);
    })
});

router.route("/get").get((req,res)=>{
    Itemtest.find().then((Itemtest)=>{
        res.json(Itemtest)
        
    }).catch((err) =>{
        console.log(err)
    })
});

router.route("/get/:id").get(async(req,res)=>{
    let userID = req.params.id;

    const user = await Itemtest.findById(userID).then((item) => {

        res.json(item);
    
    }).catch((err)=>{
        console.log(err.message);
    })
});

router.route("/update/:id").put(async (req,res) =>{
    let userID = req.params.id;
    const{name,itemimage} = req.body;

    const updateItemtest = {
        name,
        itemimage
    }

    const update = await Itemtest.findByIdAndUpdate(userID,updateItemtest).then(()=>{
        res.status(200).send({status: "User updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with updating data", error:err.message});
        })
    });


router.route("/delete/:id").delete(async (req,res) =>{
    let userID = req.params.id;

        await Itemtest.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({status : "User Deleted"});
        }).catch((err) => {

            console.log(err.message);
            res.status(500).send({status : "Error with delete", error : err.message});
        })
    });

module.exports = router;

