const mongoose = require('mongoose');

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

    confirmPassword: {
        type: String,
        required: true
    },

    userImage: {
        type: String,
        required: true
    }


})

const customer = mongoose.model("customer", customerSchema);

module.exports = customer;