const express=require("express");
const app=express()
const port=process.env.PORT || 5000
app.get("/",(req,res)=>{
    res.send("app is ruuning")
})

app.listen(port,()=>{
    console.log("server is ruuning at port :"+port);
})