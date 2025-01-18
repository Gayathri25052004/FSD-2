const arr = [1, 2, 3, 4]

function reverseIterator(arr){
    let count=arr.length-1;
    return{
      [Symbol.iterator](){
           return{
                 next(){
                       if(count>=0){
                         return{value:arr[count--],
                            done:false
                          }
                        }
                       else{
                         return{value:arr[count--],
                         done:true
                         }
                        }
                }
            };
        }
    };
}
const res=reverseIterator(arr);
for (const value of res) {
    console.log(value); 
  }
