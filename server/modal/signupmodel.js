let mongoose=require("mongoose")
let signupSchema=new mongoose.Schema({
    name:{
        type:String, 
        required:true,
    },
    email:{
        type:String, 
        required:true,
    },
    password:{
        type:String, 
        required:true,
    },
    phone:{
        type:Number, 
        required:true,
    },
    address:{
        type:String, 
        required:true,
    },
    
})

module.exports=mongoose.model("signups",signupSchema)  