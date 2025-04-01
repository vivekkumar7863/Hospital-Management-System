let mongoose=require("mongoose")
let offerSchema=new mongoose.Schema({
    offername:{  
        type:String, 
        required:true,
    },
    offerdesc:{ 
        type:String, 
        required:true,
    },
    
    
})

module.exports=mongoose.model("offers", offerSchema)                