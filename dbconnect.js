let mongoClient=require("mongodb").MongoClient;
let copyUrl="mongodb://127.0.0.1:27017/";


let data=[
{
    name:"Rajesh",
    email:"rajesh@gmail.com",
    address:"Chennai",
},
{
    name:"Rajesh1",
    email:"rajesh1@gmail.com",
    address:"Chennai",
},
{
    name:"Rajesh2",
    email:"rajesh2@gmail.com",
    address:"Chennai",
},
]
mongoClient
  .connect(copyUrl)
  .then((con)=>{
    //console.log("connected");
    let dbo=con.db("db9amnew")
    dbo
      .collection("student1")
      .updateMany({address:"Chennai"},{$set:{address:"Hydrabad"}})  
          
      .then((res)=>{
        console.log(res);  
        
      })
      .catch((err)=>{
        console.log(err);
      }) 
  })

//   .catch((err)=>{
//     console.log(err);
//   })