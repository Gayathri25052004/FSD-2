function createProfile(){
    let {name,email}=obj;
    let res={
        name:name,
        email:email
    }
    return res;
}
let obj={
    name:"Prachi",
    age:25,
    email:"prachi@gmail.com",
    address:"st 123 gandhinagar"
}
console.log(createProfile(obj));