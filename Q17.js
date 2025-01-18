console.log("Comparing two Symbols created by Symbol()")

const sym1 = Symbol("sym1");
const sym2 = Symbol("sym1");
console.log(sym1 === sym2); // false

console.log("Comparing two Symbols created by Symbol.for()");

const sym3 = Symbol.for("sym3");
const sym4 = Symbol.for("sym3");
console.log(sym3 === sym4); // true