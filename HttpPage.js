const http=require('http')

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    if(req.url === '/home'){
        res.statusCode =200
        res.end(`<html>
                   <head><title>Home</title></head>
                   <body> <H1> Welcome To Home</h1></body>
                </html>`)
    }
    else if(req.url === '/about'){
        res.statusCode =200
        res.end(`<html>
                   <head><title>About</title></head>
                   <body> <H1>About Us</h1></body>
                </html>`)
    }
    else if(req.url === '/contact'){
        res.statusCode =200
        res.end(`<html>
                   <head><title>contact</title></head>
                   <body> <H1>Contact Us</h1></body>
                </html>`)
    }
    else{
        res.statusCode =404
        res.end(`<html>
                   <head><title>Error</title></head>
                   <body> <H1> Page Not Found</h1></body>
                </html>`)
    }

})

server.listen(2000,()=>{
    console.log("Server is running at port 2000");
})