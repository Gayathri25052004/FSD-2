const os=require('os');
let sec=Math.floor(os.uptime());
let days=Math.floor(sec/(60*60*24));
let remaining=sec%(60*60*24);

let hours=Math.floor(remaining/(60*60));
remaining=remaining%(60*60);

let min=Math.floor(remaining/60);
remaining%=60;

console.log("Days : ",days," hours : ",hours," minutes : ",min," seconds : ",remaining);