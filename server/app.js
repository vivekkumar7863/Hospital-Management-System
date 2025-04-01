const express=require("express");
let cors=require("cors")
const userRouting = require("./router/userRouting");
const signupRouting = require("./router/signupRouting");
const treatmentRouting = require("./router/treatmentRouting");
const doctorRouting=require("./router/doctorRouting")  
const appointmentRouting=require("./router/appointmentRouting");  
const contactusRouting = require("./router/contactusRouting");
const offerRouting = require("./router/offerRouting");
require("./dbconfig/dbconfig")
let app=express()
app.use(cors())
app.use(express.json())  

app.use("/",userRouting)
app.use("/",signupRouting)
app.use("/",treatmentRouting)
app.use("/",doctorRouting)
app.use("/",appointmentRouting)
app.use("/",contactusRouting)
app.use("/",offerRouting)
app.listen(4000,()=>{
    console.log("Server is started at port on 4000");
    
})