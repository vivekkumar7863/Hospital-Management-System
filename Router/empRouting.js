let express=require("express")
const ageMiddleware = require("./middleware/ageFilter")
// const ageMiddleware=require("../middleware/ageFilter")               
let empRouting=express.Router()

// let ageMiddleware=(req,res,next)=>{
//     let age=req.query.age;
//     if(!age){
//         res.send("<h1>Please enter age</h1>")  
//     }
//     else if(age<=18)
//     {
//         res.send("<h1>Under Aged </h1>")                  
//     }
//     else{
//         next()   
//     }
// };   


//empRouting.use(ageMiddleware)

empRouting.get("/employee",(req,res)=>{
    res.send("<h1>Employee Data</h1>")
})
                                                             
empRouting.post("/employee",ageMiddleware,(req,res)=>{
    res.send("<h1>Add Employee Data</h1>")
})

empRouting.put("/employee",(req,res)=>{
    res.send("<h1>Edit Employee Data</h1>")
})   

empRouting.delete("/employee",(req,res)=>{
    res.send("<h1>Delete Employee Data</h1>")
})

module.exports=empRouting