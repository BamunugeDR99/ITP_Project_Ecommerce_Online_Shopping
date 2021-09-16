const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const SellerSchema = new Schema (
    {
        ownername : {
            type: String,
            required: true
        },

        mobile : {
            type: String,
            required: true
        },

        companyname : {
            type: String,
            required: true
        },

        address : {
            type: String,
            required: true
        },

        year : {
            type: String,
            required: true
        },
        
        email : {
            type: String,
            required: true
        },

        description : {
            type: String,
            required: true
        },

        logo : {
            type: String,
            required: true
        },
    }
)

const seller = mongoose.model("seller",SellerSchema);
module.exports = seller;