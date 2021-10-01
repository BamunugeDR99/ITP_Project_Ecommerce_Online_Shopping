const router = require("express").Router();
let Admin = require("../modules/Admin");

//Admin SignUp
router.route("/addAdmin").post(async(req,res)=>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;

 try{

   const usernameExist = await Admin.findOne({ username: username});

   if(usernameExist){

    return res.status(422).json({ error: "Username Already Exist"});
  }

    const newAdmin = new Admin({
        firstName,
        lastName,
        username,
        password,
        
    })


    await newAdmin.save();


        res.status(201).json({ message: "Admin Added Successfully!"});
        

    } catch(err){

        console.log(err);
    }

}); 


//Get one admin
router.route("/getAdmin/:id").get(async (req,res) =>{
    let userID = req.params.id;
    const user = await Admin.findById(userID).then((adminss) =>{
        // res.status(200).send({status:"User fetched"});
        res.json(adminss);
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status : "Error with get user", error : err.message});
    })
});

//Get all admins
router.route("/getAllAdmins").get((req ,res)=> {
    Admin.find().then((admin)=>{
        res.json(admin)
        
    }).catch((err) =>{
        console.log(err)
    })
});

//Delete
router.route("/deleteAdmin/:id").delete(async (req,res) =>{
    let userID = req.params.id;

        await Admin.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({status : "Admin Deleted"});
        }).catch((err) => {

            console.log(err.message);
            res.status(500).send({status : "Error with delete", error : err.message});
        })
    });

//login
router.post('/loginAdmin', async(req,res) => {

    try{
            const {username, password} = req.body;

            if(!username || !password){

                return res.status(400).json({error: "Please filled the all data"})
            }

            //check with database username
            const adminLogin = await Admin.findOne({username: username});
    
            //console.log(customerLogin);
            if(!adminLogin){

                res.status(400).json({error: "Admin does not exists"});

            }

            else if (password == adminLogin.password){

                // res.json({message: "Admin Sign In Successfully"});
                //console.log(res.status.error);
                
                res.json({adminLogin: {
                    _id : adminLogin._id,
                }})
               
                
            }else{ 

                res.status(400).json({error: "Invalid Credientials"});
               
            }
          

    }catch(err){

        console.log(err);
    }


});

module.exports = router;