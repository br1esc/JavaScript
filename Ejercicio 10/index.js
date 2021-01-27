const numbers = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const pares = numbers.filter(number=>number%2==0);
const impares = numbers.filter(number=>number %2!==0);

console.log('Pares ' +pares);
console.log('Impares ' +impares);