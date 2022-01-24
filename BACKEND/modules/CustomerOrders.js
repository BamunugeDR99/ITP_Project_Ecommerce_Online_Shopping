const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerOrdersSchema = new Schema({
    CustomerID : {
        type : String,
        required : true
    },

    Orders : [{
        type : String,
    }],
})

const CustomerOrder = mongoose.model("CustomerOrder",CustomerOrdersSchema);
//Student is changing to "students"s when it creates a collection
module.exports = CustomerOrder;