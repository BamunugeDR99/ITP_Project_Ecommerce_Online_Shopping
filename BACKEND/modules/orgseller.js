const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const OrgSellerSchema = new Schema (
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
        
        username : {
            type: String,
            required: true
        },

        password : {
            type: String,
            required: true
        },
    }
)

//hashing password
// OrgSellerSchema.pre('save',async function (next) {

//     // console.log("hi")

//     if(this.isModified('password')){

//         var salt = bcrypt.genSaltSync(12);
//         this.password = bcrypt.hashSync(this.password, salt);
//     }

//     next();

// });

const orgseller = mongoose.model("orgseller", OrgSellerSchema);
module.exports = orgseller;