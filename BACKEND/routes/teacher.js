const router = require("express").Router();
const jwt = require('jsonwebtoken');
const config = require('config');


let Teacher = require("../modules/Teacher");



 


//Insert
router.route("/add").post((req,res)=>{   
    // http://localhost:8070/teacher/

    const teacherName = req.body.teacherName;
     const Occupation = req.body.Occupation;
    //const age = req.body.age;
    const gender = req.body.gender;

    const newTeacher = new Teacher({
       teacherName,
       Occupation,
       gender
    })

    newTeacher.save().then(()=>{
       
        res.json("Teacher added successfully!");
                    //   res.json({newTeacher:{
                    //       teacherName : newTeacher.teacherName,
                    //       Occupation : newTeacher.Occupation,
                    //       gender : newTeacher.gender,
                        
                    //   }});
              
    }).catch((err) =>{

        res.json(err);
        
        // console.log(err);
    })
});

module.exports = router;