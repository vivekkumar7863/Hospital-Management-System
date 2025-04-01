// let express=require("express")
// let app=express()


// app.get("/",(req,res)=>{
//     res.send("<h1>Home page</h1>")
// })

// app.get("/student",(req,res)=>{
//     res.send("student data")

// });
// app.listen(4000)              


// /* latest news api starts here */

// app.get("/latestnews",(req,res)=>{
//     res.send("latest news")   
// })

// app.post("/latestnews",(req,res)=>{
//     res.send("add latest news")   
// })

// app.put("/latestnews",(req,res)=>{
//     res.send("edit latest news")   
// })

// app.delete("/latestnews",(req,res)=>{
//     res.send("delete latest news")   
// })


let express=require("express")
let studentRouting=require("./Router/studentRouting")  
const empRouting=require("./Router/empRouting") 
let path=require("path")  
let app=express();

//let pathinfo=__dirname + "/public"
let pathinfo=path.join(__dirname,"public") 

app.set("view engine","ejs")  

app.get("/",(req,res)=>{
    res.sendFile(`${pathinfo}/index.html`)
})

app.get("/aboutus",(req,res)=>{
    res.sendFile(`${pathinfo}/aboutus.html`)
})

app.get("/contactus",(req,res)=>{
    res.sendFile(`${pathinfo}/contactus.html`)
})

app.get("/user",(req,res)=>{
    let user={
        name:"Elearn",
        phone:9999999,
    }
    res.render("profile",{user})     
})

app.get("/sample",(req,res)=>{
    res.render("sample")
})

app.get("/",(req,res)=>{
    res.send(`<h1>Home Page</h1>`)
})


app.use("/",studentRouting)
app.use("/",empRouting)
app.listen(4000)                      
                                       