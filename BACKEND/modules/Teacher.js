const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    teacherName : {
        type : String,
        required : true
    },

    Occupation : {
        type : String, 
        required : true
    },

    gender : {
        type : String,
        required : true
    }
    

})

const Teacher = mongoose.model("Teacher",TeacherSchema); //teachers
//Student is changing to "students"s when it creates a collection
module.exports = Teacher;