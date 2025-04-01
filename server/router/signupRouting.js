let express=require("express")
let jwt=require("jsonwebtoken")
let bcrypt=require("bcrypt")
let Signup=require("../modal/signupmodel") 
const loginMiddleware = require("./loginMiddleware")
let signupRouting=express.Router()

signupRouting.post("/signup",async(req,res)=>{
    const name=req.body.name;   
    const email=req.body.email;   
    const password=bcrypt.hashSync(req.body.password,10);   
    const phone=req.body.phone;   
    const address=req.body.address;      
   try{
    let signup=new Signup({name,email,password,phone,address})
    let result= await signup.save();
    res.send(result)
   }
   catch(err)
   {
      res.send("Error",err)     
   }
})
signupRouting.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    let exists=await Signup.findOne({email:email});
    if(!exists){
        res.send("Invalid")
    }
    else if(!bcrypt.compareSync(password,exists.password)){
        res.send("Valid")   
        
    }
    else{
        let payload={
            user:{
                id:exists._id,
            }
        }
        jwt.sign(payload,"JSONString123",{expiresIn:36000},(err,token)=>{
          if(err) throw err;
          res.send({token})     
        })       
    }
})

signupRouting.get("/admindashboard",loginMiddleware,(req,res)=>{
    res.send("Admin")
})

module.exports=signupRouting              