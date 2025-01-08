const userDetails = {name: "CVR", age: 25}
const userAddress = {address: "Mangalpally", city: "Hyderabad"}
const userPreferences = {theme: "Engineering Edu", language: "EN"}
 let result={
    ...userDetails,
    ...userAddress,
    ...userPreferences
 }
console.log(result)
