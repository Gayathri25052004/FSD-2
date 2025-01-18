let phone = "phone";
let address = "address";

let obj={
    name:"Raghu",
    [phone]:"983214575",
    [address]: "123 Main St",
}
console.log("Accessing symbols from an object")
console.log(obj[phone]) ;
console.log(obj[address]);

let s1=Symbol("abc")
let s2=Symbol("abc")
console.log("comparing two symbols with same description")
console.log(s1==s2);