const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
//require("dotenv").config();

dotenv.config();

const port = process.env.PORT || 8070;

app.use(cors());
app.use(bodyparser.json());

const URI = process.env.MONGO_URL; // Replace with your MongoDB URI

mongoose.connect(URI,{
//usecreateindex: true,
useNewurlParser: true,
//useUnifiedTopology: true,
//usefindandmodify: false,
//useNewUrlParser: true, 
useUnifiedTopology: true

});

const connection = mongoose.connection;
connection.once("open",() => {
console.log("mongoDB connection success!.")

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


  // app.use("/student",studentRouter)
  // const studentRouter = require("./routes/students.js")
  
