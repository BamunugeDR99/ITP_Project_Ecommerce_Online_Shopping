const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    age : {
        type : Number,
        required : true
    },

    gender : {
        type : String,
        required : true
    }

})

const Student = mongoose.model("Student",studentSchema);
//Student is changing to "students"s when it creates a collection
module.exports = Student;