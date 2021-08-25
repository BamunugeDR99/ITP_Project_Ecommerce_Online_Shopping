const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('config');
let seller = require("../modules/seller");


//Insert -->
router.route("/add").post((req,res)=>{
    // http://localhost:8070/seller/add

    const ownername = req.body.ownername;
    const mobile = req.body.mobile;
    const companyname = req.body.companyname;  
    const address = req.body.address;
    const year = req.body.year;
    const email = req.body.email;
    const description = req.body.description;
    const logo = req.body.logo;
    
    const newseller = new seller({
        ownername, 
        mobile,
        companyname,
        address,
        year,
        email,
        description,
        logo
    })

    newseller.save().then(()=>{
       
        res.json("Your request added successfully!");
                      
                    /*res.json({newseller:{
                        ownername : newseller.ownername,
                        mobile : newseller.mobile,
                        companyname : newseller.companyname,
                        address : newseller.address,
                        year : newseller.year,
                        email : newseller.email,
                        description : newseller.description,
                        logo : newseller.logo
                      }});*/
              
    }).catch((err) =>{
        
        res.json(err);
        
        //res.json("Error, Please try again later!");
        
        //console.log(err);
    })
});

//Retrieve -->
// route("/") this can use for fetching all the data from the DB 
router.route("/get").get((req, res) => {
    //http://localhost:8070/seller/get

    seller.find().then((sellers) => {
        res.json(sellers);

    }).catch((err) => {
        console.log(err);
    })

})    

//Update --> 
router.route("/update/:id").put(async (req,res) =>{
    //http://localhost:8070/seller/update/

    let userID = req.params.id;  //params = parameter
    const{  ownername, 
            mobile,
            companyname,
            address,
            year,
            email,
            description,
            logo} = req.body;

    const updateseller = {
        ownername, 
        mobile,
        companyname,
        address,
        year,
        email,
        description,
        logo
    }

    const update = await seller.findByIdAndUpdate(userID,updateseller).then(()=>{
        res.json("Your details Updated Successfully!");
        }).catch((err) => {
            console.log(err);
        })
    });

//Delete --> 
router.route("/delete/:id").delete(async (req,res) =>{
    //http://localhost:8070/seller/delete

    let userID = req.params.id;

        await seller.findByIdAndDelete(userID)
        .then(() => {
            res.json("Your details Deleted Successfully!");
        }).catch((err) => {

            console.log(err.message);
        })
    });

//Fetch data of a specific single user (get one seller details) -->
router.route("/get/:id").get(async (req,res) =>{
    //http://localhost:8070/seller/get/

    let userID = req.params.id;

    const user = await seller.findById(userID).then((findseller) =>{

        res.json(findseller);

    }).catch((err) =>{
        
        console.log(err.message);
    })
})    

module.exports = router;