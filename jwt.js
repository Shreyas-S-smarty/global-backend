const jwt=require("jsonwebtoken")
const name="smarty";
const secret="124";
const cipher=jwt.sign(name,secret)
const finalResp=jwt.verify(cipher,secret)
console.log(finalResp)
console.log(cipher)
