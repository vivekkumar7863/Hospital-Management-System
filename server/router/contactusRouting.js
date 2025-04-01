let express=require("express")
let nodemailer=require("nodemailer")  
let contactusRouting=express.Router()

contactusRouting.post("/contactus",async (req,res)=>{
    const {name,phone,email,subject,message}=req.body;
    try{
      let transport=nodemailer.createTransport({
        service:"gmail",
        auth:{
          user:"vivekkumar64636@gmail.com",
          pass:"gkvk knsb jpox hgly"
        }
      });
      let mailOption={
        from:"vivekkumar64636@gmail.com",    
        to:"52vivekkm789@gmail.com",
        subject:"Contact form",
        text:`
         Hi 
         Name:${name}, 
         Phone:${phone},
         Email:${email},
         Subject:${subject},
         Message:${message}, `,
      };
      transport.sendMail(mailOption,(err,info)=>{
        if (err) throw err;
        res.send("mail send successfully..."); 
        
      })
    }
    catch(err)
    {
        res.send(err) 
    }
})
/*
treatmentRouting.get("/treatment",async (req,res)=>{
    try{
        let treatment=await Treatment.find()
        
        res.send(treatment)
    }
    catch(err)
    {
        res.send(err) 
    }
})
treatmentRouting.get("/treatment/:treatname",async (req,res)=>{
    try{
        let treatment=await Treatment.findOne({tname:req.params.treatname})
        
        res.send(treatment)
    }
    catch(err)
    {
        res.send(err) 
    }
})
treatmentRouting.delete("/treatment/:tid",async (req,res)=>{
    try{
        let treatment=await Treatment.deleteOne({_id:req.params.tid})
        
        res.send(treatment)
    }
    catch(err)
    {
        res.send(err) 
    }
})

treatmentRouting.put("/treatment/:treatname",async (req,res)=>{
    try{
        let treatment=await Treatment.updateOne({tname:req.params.treatname},{$set:req.body})
        
        res.send(treatment)
    }
    catch(err)
    {
        res.send(err) 
    }
})*/


module.exports=contactusRouting            