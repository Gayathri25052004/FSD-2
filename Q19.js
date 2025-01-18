function infiniteGenerator(limit){
    let count=0;
    let curr=1;
    return{
        [Symbol.iterator](){
            return{
                next(){
                    if(count<limit){
                       count++;
                       return{value:curr++,done:false}
                    }
                    else{
                       return{value:undefined,done:true}
                    }
                }
            }
       }
    }
}

const res=infiniteGenerator(8);
for (const value of res) {
    console.log(value); 
  }
