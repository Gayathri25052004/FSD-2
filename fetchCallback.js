function fetchDataWithCallback (callback){
    setTimeout(()=>{
         const num=Math.random()*100;
         const res=num > 30;
         if(res){
            callback(null,`fetching successfull and num:${num}`);
         }
         else{
            callback(`Fetching Unsuccessfull and num:${num}`,null);
         }
    },2000)
}

fetchDataWithCallback((err,res)=>{
    if(err){
       console.log("Message Callback : ",err);
    }
    else{
        console.log("Message callback : ",res);
    }
});