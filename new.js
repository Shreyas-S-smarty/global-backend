const express=require("express");
const app=express();

const fs=require("fs");
app.use(express.json());
app.post("/",(req,res)=>{
    const name=req.body.name
    fs.writeFile("./a.txt",name,(err)=>{
        res.send(`${name}`);
    })
}
)
//node --watch index.js
app.get("/pages",(req,res)=>{
   const pageNumber=req.query.pageNumber;
   res.send(pageNumber);
})
app.get("/login",(req,res)=>{
    const name=req.query.name;
    const email=req.query.email;
    res.send(`${name} and ${email}`);

})
app.get("/sign",(req,res)=>{
   const {username,email}=req.query;
    res.send(`${username} and ${email}`);
})
//localhost:3000/sign?username=smarty&email=smarty@xyz.com
app.post("/users",(req,res)=>{
    res.send("from post route")
})
app.put("/signup",(req,res)=>{
    res.send("signed up")
})
app.delete("/remove",(req,res)=>{
    res.send("removed")
})
app.listen(3000,()=>{
    console.log("server started");
})
app.post("/head",(req,res)=>{
    const token=req.headers.token;
    res.send(`${token}`);
}
)

app.post("/body",(req,res)=>{
    const name=req.body.name;
    res.send(`${name}`);
}
)

app.post("/log",(req,res)=>{
    const name=req.body.name

fs.readFile("./a.json","utf-8",(err,data)=>{
    if(name==name){
        res.send("true")
        }
    else{
        res.send("wrong")
    }

}
)
})
function sampleMiddleware(req,res,next){
    const username=req.body.name;
    if(username==="smarty"){
        next()
    }
    else{
        res.send("wrong")
    }
    
}
app.post("/user",sampleMiddleware,(req,res)=>{
    res.send("sucess")
})