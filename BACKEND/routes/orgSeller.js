const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const pdf = require('html-pdf');
let orgSeller = require("../modules/orgseller");
const { createSecretKey } = require("crypto");
const pdfsell = require("../documents/SellerReport");


router.route("/add").post((req,res)=>{
    // https://tech-scope-online.herokuapp.com/orgseller/add

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
        requestDelete
    })

    neworgSeller.save().then(()=>{
       
        // res.json("New Seller Added Successfully!");
        res.json({
            neworgSeller: {
              username: neworgSeller.username,
              password: neworgSeller.password,
            },
          });

                      
              
              
    }).catch((err) =>{
        
        res.json(err);
        
    })
});


router.route("/get").get((req, res) => {
   

    orgSeller.find().then((sellers) => {
        res.json(sellers);

    }).catch((err) => {
        console.log(err);
    })

})    

router.route("/update/:id").put(async (req,res) =>{
   

    let userID = req.params.id;  
    const{  

            ownername, 
            mobile,
            companyname,
            address,
            year,
            email,
            description,
            logo,
            username,
            password } = req.body;

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


router.route("/delete/:id").delete(async (req,res) =>{
    //https://tech-scope-online.herokuapp.com/orgSeller/delete

    let userID = req.params.id;

        await orgSeller.findByIdAndDelete(userID)
        .then(() => {
            res.json("Your details Deleted Successfully!");
        }).catch((err) => {

            console.log(err.message);
        })
    });


router.route("/get/:id").get(async (req,res) =>{
    

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


router.route("/getByEmail/:email").get(async (req,res) =>{
    let email = req.params.email;
    const user = await orgSeller.findOne({email : email}).then((orgSeller)=>{
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


//Update --> 
router.route("/ChangePwd/:id").put(async (req,res) =>{
    //https://tech-scope-online.herokuapp.com/orgSeller/update/

    let userID = req.params.id;  //params = parameter
    const{password} = req.body;

    const change = {
    
        password,
    }

    const update = await orgSeller.findByIdAndUpdate(userID,change).then(()=>{
        res.json("Password Updated Successfully!");
        }).catch((err) => {
            console.log(err);
        })
    });



    // post PDF

router.post('/create-pdf',(req,res) => {
    pdf.create(pdfsell(req.body),{}).toFile('./routes/result.pdf',(err) =>{
      if(err){
        res.send(Promise.reject());
      }
  
      res.send(Promise.resolve());
    });
  });
  
  // get PDF
  router.get('/fetch-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/result.pdf`)
              // absolute directory
  })


  router.route("/reqDel/:id").put(async (req, res) => {
    let orgSellerID = req.params.id;
    const{
        requestDelete,
         } = req.body;
  
    const neworgSeller  = {
        requestDelete,
    }
  
    const update = await orgSeller.updateOne(
  
      {_id : orgSellerID},
      {$set : {requestDelete :requestDelete}},
  
  
    ).then(() => {
  
      res.status(200).send({ status: "Request sent" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with sending request", error: err.message });
    });
  
  
    })

module.exports = router;