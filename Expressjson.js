const express=require('express')
const fs=require('fs')
const path=require("path")

const app=express()
app.get('/data',(req,res)=>{
    res.setHeader("Content-Type","application/json")
    const filePath=path.join(__dirname+'/data.json')
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            res.json({error:'unable to file '})
        }
        else{
            const jsonData=JSON.parse(data);
            res.json(jsonData); 
        }
        
    })
    
})


app.listen(2000,()=>{
    console.log("Server running at port 2000")
})
