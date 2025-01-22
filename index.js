const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
app.use(cors())
const jwt=require("jsonwebtoken")
const secret="1234"


app.use(express.json())
mongoose.connect("mongodb://localhost:27017/smarty")
.then(()=>{console.log("db connect");})
.catch(()=>{console.log("not connected");})
const mySchema=mongoose.Schema({
    user:String,
    //email:{
        //type:String,
        //required:true
   // }
   //email:String
   password:String
})
const user=mongoose.model("user",mySchema);

app.post("/login",async(req,res)=>{
    const username=req.body.details.username;
    const password=req.body.details.password;
    const cipher=jwt.sign(password,secret)
    //const email=req.body.email;
   const details={

    user:username, 
    //email:email
    password:cipher
}
const userdetails=new user(details);
const response=await userdetails.save()
.then((response)=>{res.send("success")
                
    console.log(response)
})
.catch(()=>{res.send("nah")

})

})
app.delete("/delete",(req,res)=>{
    const username=req.body.username;
   
user.deleteOne({user:username})
.then(()=>{res.send("sucess")})
.catch(()=>{res.send("nah")})  


})
app.get("/fetch",(req,res)=>{
    const username=req.query.username;
    user.findOne({user:username})
    .then((response)=>{res.send(response)})
    .catch(()=>{res.send("nah")})
})
app.get("/new",(req,res)=>
{
    res.send("done bro")
})


app.listen(3000,()=>{
console.log("Server running")
}
)
