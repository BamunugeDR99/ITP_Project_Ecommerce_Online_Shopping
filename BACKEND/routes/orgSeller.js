const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('config');
let orgSeller = require("../modules/orgseller");
const { createSecretKey } = require("crypto");


//Insert -->
router.route("/add").post((req,res)=>{
    // http://localhost:8070/orgSeller/add

    const ownername = req.body.ownername;
    const mobile = req.body.mobile;
    const companyname = req.body.companyname;  
    const address = req.body.address;
    const year = req.body.year;
    const email = req.body.email;
    const description = req.body.description;
    const logo = req.body.logo;
    const username = req.body.username;
    const password = req.body.password;
    
    const neworgSeller = new orgSeller({
        ownername, 
        mobile,
        companyname,
        address,
        year,
        email,
        description,
        logo,
        username,
        password,
    })

    neworgSeller.save().then(()=>{
       
        res.json("Your request added successfully!");
                      
              
              
    }).catch((err) =>{
        
        res.json(err);
        
    })
});

//Retrieve -->
// route("/") this can use for fetching all the data from the DB 
router.route("/get").get((req, res) => {
    //http://localhost:8070/orgSeller/get

    orgSeller.find().then((sellers) => {
        res.json(sellers);

    }).catch((err) => {
        console.log(err);
    })

})    

//Update --> 
router.route("/update/:id").put(async (req,res) =>{
    //http://localhost:8070/orgSeller/update/

    let userID = req.params.id;  //params = parameter
    const{  ownername, 
            mobile,
            companyname,
            address,
            year,
            email,
            description,
            logo,
            username,
            password} = req.body;

    const updateseller = {
        ownername, 
        mobile,
        companyname,
        address,
        year,
        email,
        description,
        logo,
        username,
        password,
    }

    const update = await orgSeller.findByIdAndUpdate(userID,updateseller).then(()=>{
        res.json("Your details Updated Successfully!");
        }).catch((err) => {
            console.log(err);
        })
    });

//Delete --> 
router.route("/delete/:id").delete(async (req,res) =>{
    //http://localhost:8070/orgSeller/delete

    let userID = req.params.id;

        await orgSeller.findByIdAndDelete(userID)
        .then(() => {
            res.json("Your details Deleted Successfully!");
        }).catch((err) => {

            console.log(err.message);
        })
    });

//Fetch data of a specific single user (get one orgSeller details) -->
router.route("/get/:id").get(async (req,res) =>{
    //http://localhost:8070/orgSeller/get/

    let userID = req.params.id;

    const user = await orgSeller.findById(userID).then((findseller) =>{

        res.json(findseller);

    }).catch((err) =>{
        
        console.log(err.message);
    })
})    



router.route("/getUsername/:username").get(async (req,res) =>{
    let username = req.params.username;
    const user = await orgSeller.findOne({username : username}).then((orgSeller)=>{
        res.json(orgSeller);
    }).catch((err) =>{
        res.status(500).send({status : "Error", error : err.message});
    })
})

router.post('/loginSeller', async(req,res) => {

    try{
            const {username, password} = req.body;

            if(!username || !password){

                return res.status(400).json({error: "Please filled the all data"})
            }

            //check with database username
            const sellerLogin = await orgSeller.findOne({username: username});
    
            //console.log(customerLogin);
            if(!sellerLogin){

                res.status(400).json({error: "Seller does not exists"});

            }

            else if (password == sellerLogin.password){

                // res.json({message: "Seller Sign In Successfully"});
          //console.log(res.status.error);
                res.json({sellerLogin: {
                    _id : sellerLogin._id,
                }})
               
                
            }else{ 

                res.status(400).json({error: "Invalid Credientials"});
               
            }
          

    }catch(err){

        console.log(err);
    }


});


module.exports = router;