const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    firstName : {
        type : String,
        required: true
    },

    lastName: {
        type : String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phoneNumber: {
        type : String,
        required: true
    },

    dob: {
        type: Date,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    address: {
        type : String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    // confirmPassword: {
    //     type: String,
    //     required: true
    // },

    userImage: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true,
        default: new Date()
          
    }


})

//hashing password
customerSchema.pre('save',async function (next) {

    // console.log("hi")

    if(this.isModified('password')){

        var salt = bcrypt.genSaltSync(12);
        this.password = bcrypt.hashSync(this.password, salt);
        // this.confirmPassword = bcrypt.hashSync(this.confirmPassword, salt);
    }

    next();

});


const customer = mongoose.model("customer", customerSchema);

module.exports = customer;