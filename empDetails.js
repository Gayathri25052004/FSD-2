function updateEmployeeDetails(emp,value){
    return {...emp,role:value}
}
let Emp={
    name:"Gayathri",
    role:"Developer",
    age: 28, 
    location: "IN"
}
console.log(updateEmployeeDetails(Emp,"Senior Developer"))


