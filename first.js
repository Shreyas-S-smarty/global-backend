const fs = require("fs")
fs.writeFile("./a.txt","Shreyas_S",
    (err)=>{
        console.log("success");
    }
)
fs.readFile("./a.txt","utf-8",(err,data)=>{
    console.log(data);
})
const username="ShreyasS"
const email="abc@gmail.com"
fs.writeFile("./a.txt",`${username} and ${email}`,
    (err)=>{
        console.log("success")
    }
)
const obj={
    name:"smarty",
    password:"*********"
}
const objwrite=JSON.stringify(obj)
fs.writeFile("./a.json",objwrite,
    (err)=>{
        console.log("success")
    }
)
fs.readFile("./a.json","utf-8",(err,data)=>{
    const objRead=JSON.parse(data);
    console.log(objRead)
}
)