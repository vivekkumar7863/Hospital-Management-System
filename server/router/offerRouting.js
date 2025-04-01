let express=require("express")
let Offer=require("../modal/offerModal")    
let offerRouting=express.Router()

offerRouting.post("/offer",async (req,res)=>{
    try{
        let offer=new Offer(req.body)
        let result=await offer.save()   
        res.send(result)
    }
    catch(err)
    {
        res.send(err) 
    }
})

offerRouting.get("/offer",async (req,res)=>{
    try{
        let offer=await Offer.find()
        
        res.send(offer)
    }
    catch(err)
    {
        res.send(err) 
    }
})

offerRouting.get("/offer/:id",async (req,res)=>{
    try{
        let offer=await Offer.findOne({_id:req.params.id})
        
        res.send(offer)            
    }    
    catch(err)   
    {
        res.send(err)                                  
    }
}) 

offerRouting.put("/offer/:id",async (req,res)=>{
    try{
        let offer=await Offer.updateOne({_id:req.params.id},{$set:req.body})
            
        res.send(offer)
    }
    catch(err)
    {
        res.send(err) 
    }
})

offerRouting.delete("/offer/:oid",async (req,res)=>{    
    try{
        let offer=await Offer.deleteOne({_id:req.params.oid})
        
        res.send(offer)
    }
    catch(err)
    {
        res.send(err) 
    }
})

module.exports=offerRouting         