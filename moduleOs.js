
setInterval(()=>{
const os = require('os');
const free = os.freemem();
const total = os.totalmem();
const percent=(free/total) * 100;

console.log("Free Memory : ",free);
console.log("Current memory : ",total);
console.log(" percentage of free memory : ",percent.toFixed(2));

},5000);