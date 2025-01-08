const product = {
    id: 101, 
    name: "Laptop",
    price: 1000, 
    category: "Electronics"
}
let {id,name}=product
let obj={
   // ...product,
    id:id,
    name:name,
    discount: 10,
    inStock: true
}
console.log(obj)


