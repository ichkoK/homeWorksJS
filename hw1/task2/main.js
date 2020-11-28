let number = 0; // - change the original number (>=0)
let factorial = 1;

for (let i = 0; i<number; i++){
    factorial = factorial*(number-i);
}

console.log('Factorial ' + number + ' = ' + factorial);