const router = require("express").Router();
let Customer = require("../modules/Customer");
const bcrypt = require('bcryptjs');


//Customer SignUp
router.route("/add").post(async(req,res)=>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const address = req.body.address;
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const userImage = req.body.userImage;

 try{

   const emailExist = await Customer.findOne({ email: email});

   if(emailExist){

     return res.status(422).json({ error: "Email Already Exist"});
   }

   const usernameExist = await Customer.findOne({ username: username});

   if(usernameExist){

    return res.status(422).json({ error: "Username Already Exist"});
  }

    const newCustomer = new Customer({
        firstName,
        lastName,
        email,
        phoneNumber,
        dob,
        gender,
        address,
        username,
        password,
        confirmPassword,
        userImage
    })

   


    await newCustomer.save();


        res.status(201).json({ message: "Customer Added Successfully!"});

    } catch(err){

        console.log(err);
    }

}); 

//Get one customer
router.route("/get/:id").get(async (req,res) =>{
    let userID = req.params.id;
    const user = await Customer.findById(userID).then((cutomerss) =>{
        // res.status(200).send({status:"User fetched"});
        res.json(cutomerss);
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status : "Error with get user", error : err.message});
    })
});

//Get all customers
router.route("/getAll").get((req ,res)=> {
    Customer.find().then((customer)=>{
        res.json(customer)
        
    }).catch((err) =>{
        console.log(err)
    })
});

// Update CUstomer
router.route("/update/:id").put(async (req,res) =>{
    let userID = req.params.id;
    const{firstName, lastName , email, phoneNumber,dob,  gender, address, username, password,  confirmPassword,  userImage} = req.body;

    const updatedCustomer = {
        firstName,
        lastName,
        email,
        phoneNumber,
        dob,
        gender,
        address,
        username,
        password,
        confirmPassword,
        userImage
    }

   
    if(emailExist && username){
 
      return res.status(422).json({ error: "Email Already Exist"});
    }

    const update = await Customer.findByIdAndUpdate(userID, updatedCustomer).then(()=>{
        res.status(200).send({status: "User Updated"})

        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with updating data", error:err.message});
        })
    });

    // Delete CUstomer
router.route("/delete/:id").delete(async (req,res) =>{
    let userID = req.params.id;

        await Customer.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({status : "User Deleted"});
        }).catch((err) => {

            console.log(err.message);
            res.status(500).send({status : "Error with delete", error : err.message});
        })
    });


//Login route

router.post('/loginCustomer', async(req,res) => {

    try{
            const {username, password} = req.body;

            // if(!username || !password){

            //     return res.status(400).json({error: "Please filled the all data"})
            // }

            //check with database username

            const customerLogin = await Customer.findOne({ username: username });

            if(customerLogin){

                const isMatch = await bcrypt.compare(password, customerLogin.password);
            
            if(!isMatch){   
                
                res.status(400).json({error: "Invalid Credientials"});

            }else{

                //res.json({message: "Customer Sign In Successfully"});
                res.json({customerLogin: {
                    _id : customerLogin._id,
                }});

            }
        }else{

            res.status(400).json({error: "Customer does not exists"});
        }
           
            
    

    }catch(err){

        console.log(err);
    }


});



router.route("/getEmail/:email").get(async (req,res) =>{
    let email = req.params.email;
    const user = await Customer.findOne({email : email}).then((customer) =>{
        // res.status(200).send({status:"User fetched"});
        res.json(customer);
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status : "Error with get user", error : err.message});
    })
})





/*router.post('/login', (req,res) => {
    const {name,age} = req.body;
    // simple validation 
    if(!name || !age){
        return res.status(400).json({msg : 'please enter all the fields'});
    }

    // check for existing user

    Student.findOne({name}).then(studentsss =>{
        if(!studentsss) return res.status(400).json({msg : 'user does not exists'});

        if(!(age ==studentsss.age)){
            return res.status(400).json({msg : 'invalid credentials'}); 
        }
        // const newStudent = new Student({
        //     name,age,gender
        // });

        res.json({studentsss:{
            name : studentsss.name,
            age : studentsss.age,
            gender : studentsss.gender
        }})

        // jwt.sign(

        //     {id : studentsss.name},
        //     config.get('jwtSecret'),
        //     {expiresIn : 3600},
        //     (err,token) => {
        //         if(err) throw err;
        //               res.json({token, studentsss:{
        //                   name : studentsss.name,
        //                   gender : studentsss.gender,
        //                   age : studentsss.age
        //               }})
        //             }
        // )
    })

})*/


module.exports = router;