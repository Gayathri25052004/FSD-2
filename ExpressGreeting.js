const express=require('express');
const app=express()

app.get('/greet',(req,res)=>{
    var name=req.query.name
    res.setHeader("Content-Type","text/html")
    if(name){
        res.end(`<h1>Hello !!  ${name}</h1>`)
    }
    else{
        res.end(`<h3>Please provide Name</h3>`)
    }
})

app.listen(2000,()=>{
    console.log("Server is running at port 2000")
})