const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('config');
let Student = require("../modules/Student");


//Insert
router.route("/add").post((req,res)=>{

    const name = req.body.name;
     const age = parseInt(req.body.age);
    //const age = req.body.age;
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
       
                      res.json({newStudent:{
                          name : newStudent.name,
                          gender : newStudent.gender,
                          age : newStudent.age
                      }});
              
    }).catch((err) =>{
        
        console.log(err);
    })
});

// retrive


// route("/") this can use for fetching all the data from the DB 
router.route("/getStudents").get((reg,res)=> {
    Student.find().then((students)=>{
        res.json(students)
        
    }).catch((err) =>{
        console.log(err)
    })
});

// update 
router.route("/update/:id").put(async (req,res) =>{
    let userID = req.params.id;

    const{name,age,gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userID,updateStudent).then(()=>{
        //res.status(200).send({status: "User updated"})
        res.json("Updated!");
        }).catch((err) => {
            console.log(err);
            //res.status(500).send({status: "Error with updating data", error:err.message});
        })
    });


// delete 
router.route("/delete/:id").delete(async (req,res) =>{
    let userID = req.params.id;

        await Student.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({status : "User Deleted"});
        }).catch((err) => {

            console.log(err.message);
            res.status(500).send({status : "Error with delete", error : err.message});
        })
    });

// get one student details (Specific)
router.route("/get/:id").get(async (req,res) =>{
    let userID = req.params.id;
    const user = await Student.findById(userID).then((studentsss) =>{
        // res.status(200).send({status:"User fetched"});
        res.json(studentsss);
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status : "Error with get user", error : err.message});
    })
})


// router.route("/getG/:id").get(async (req,res) =>{
//     let userID = req.params.id;
//     const user = await Student.findOne({name : userID}).then((studentsss) =>{
//         // res.status(200).send({status:"User fetched"});
//         res.json(studentsss);
//     }).catch((err) =>{
//         console.log(err.message);
//         res.status(500).send({status : "Error with get user", error : err.message});
//     })
// })


router.post('/login', (req,res) => {
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

})


module.exports = router;

