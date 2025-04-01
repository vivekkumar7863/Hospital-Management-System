let ageMiddleware=(req,res,next)=>{
    let age=req.query.age;
    if(!age){
        res.send("<h1>Please enter age</h1>")  
    }
    else if(age<=18)
    {
        res.send("<h1>Under Aged </h1>")
    }
    else{
        next()   
    }
};           
module.exports=ageMiddleware                                                           


                                                                                                          
                                                                




