const express= require ("express");
const app=express();
const EmpRotes = require("./routes/employeeRoute")
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
mongoose.connect("mongodb://127.0.0.1:27017/yashaswi").then(()=>{
    console.log("connection done ")
})



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());   



app.use("/employee" ,EmpRotes )



app.listen(9000 , ()=>{
    console.log("port is successfully working")
})