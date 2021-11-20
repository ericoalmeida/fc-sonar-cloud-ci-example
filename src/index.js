const { sum, sub, mult, div, mod, applyDiscount } = require('./math-calc-operations');

console.log(`Sum of 2 and 3 is: ${sum(2, 3)}`);
console.log(`Subtraction of 5 and 4 is: ${sub(5, 4)}`);
console.log(`Multiplication of 6 and 7 is: ${mult(6, 7)}`);
console.log(`Division of 6 and 2 is: ${div(6, 2)}`);
console.log(`Module of 10 and 3 is: ${mod(10, 2)}`);

console.log(`250.00 with 25% off is: ${applyDiscount(250, 25)}`);
