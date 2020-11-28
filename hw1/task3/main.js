let sheetsInReamPaper = 500; 
let consumptionPerWeek = 1200; 
let weeksAmount = 8; 

let a, b;

a = weeksAmount*consumptionPerWeek;
b = Math.floor(a/sheetsInReamPaper) + 1;

console.log(b)