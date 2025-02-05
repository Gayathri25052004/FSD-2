const events=require('events');
const emitter=new events.EventEmitter();

emitter.on('userDetails',(name,age)=>{
   console.log("Hello, ",name,"! You are ",age," years old. ")
});

emitter.emit('userDetails',"Gayathri","20");
emitter.emit('userDetails',"Priya","23");
emitter.emit('userDetails',"Raghu","25");