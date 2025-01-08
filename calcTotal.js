function CalculateTotal(...args){
  var res=0
 //onsole.log(arguments)
  for(let i=0;i<args.length;i++){
    res+=args[i]
  }
  return res

}
console.log(CalculateTotal(1,5,2,8,3,9))
let arr=[9,7,4,2]
console.log(CalculateTotal(...arr))