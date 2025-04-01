let express=require("express")
const ageMiddleware = require("./middleware/ageFilter")
// const ageMiddleware = require("../middleware/ageFilter");               
let studentRouting=express.Router()

let data=[
    {
        name:"elearn",
        address:"Hydrabad"
    },
    {
        name:"elearn",                           
        address:"Hydrabad"
    },
    {
        name:"elearn",
        address:"Hydrabad"
    },
]

studentRouting.get("/student",ageMiddleware,(req,res)=>{             
    res.send(`<h1>Student Data</h1>     
           <button>Read more</button>`)                             
})

// studentRouting.get("/student",(req,res)=>{
//     res.send(`<h1>Student Data ${req.query.name} </h1>`) 
// })

studentRouting.post("/student",(req,res)=>{
    res.send("<h1>Add Student Data</h1>")
})

studentRouting.put("/student",(req,res)=>{
    res.send("<h1>Edit Student Data</h1>")
})

studentRouting.delete("/student",(req,res)=>{
    res.send("<h1>Delete Student Data</h1>")
})                                                                  

module.exports=studentRouting                          