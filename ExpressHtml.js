const express=require('express')
const http=require('http')
const app=express()
app.get('/index',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
const server=http.createServer(app);
server.listen(2000,()=>{
    console.log("Server running at port 2000")
})
