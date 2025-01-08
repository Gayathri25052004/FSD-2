let arr=[1,4,2]
function Merge(...args){
  let a=[].concat(...args)
  return a
}

console.log(Merge(arr,[1,48],[9,65]))