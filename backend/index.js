const { json } = require("express");
const express = require("express");
const data = require('./selectCity.json');

const app = express();

app.get("/data" ,(req,res)=>{
   res.send(JSON.stringify(data));
})


app.listen(3001,()=>{
    console.log("server runing on port:3001");
})