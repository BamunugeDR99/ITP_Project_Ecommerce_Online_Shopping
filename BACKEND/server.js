
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); 
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 8070;
app.use(cors());

//app.use(bodyParser.json())
app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
});


//routes to CRUD in each model


const customerRouter = require("./routes/customer.js");

app.use("/Customer",customerRouter);
const studentRouter = require("./routes/students.js");
app.use("/student",studentRouter);

const itemRouter = require("./routes/items.js");
app.use("/items",itemRouter);

const TeacherRouter = require("./routes/teacher.js"); 
app.use("/teacher",TeacherRouter);

const ReviewRouter = require("./routes/review.js");
app.use("/review",ReviewRouter);

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("MongoDB Connection successful");
});

// connection.once("open",(err) =>{
//     console.log(err.message);
// });

app.listen(PORT, () => {
    console.log('Server connection successful')
})



