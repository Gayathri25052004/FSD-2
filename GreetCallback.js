function Greet(name,callback){
     const msg=`Hello ${name}`;
     callback(msg);
}
Greet("Gayathri",(msg)=>{
    console.log("Greetings!!!");
    console.log(msg);
})