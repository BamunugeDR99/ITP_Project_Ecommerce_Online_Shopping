const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const LogSellerSchema = new Schema (
    {
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

const logseller = mongoose.model("logseller",LogSellerSchema);
module.exports = logseller;