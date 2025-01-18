function createProfile(){
   var {name,age}=obj;
   var [a,b]=obj.arr;
   let res={
    name:name,
    age:age,
    primaryInterest:a,
    sencondaryInterest:b
   }
   return res;
}

let obj={
    name:"Prachi",
    age:25,
    arr:["Reading","Travelling","watching News","Playing"]
}
console.log(createProfile(obj));