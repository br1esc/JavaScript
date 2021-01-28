'use strict'

const times = [60, 75, 79, 80, 55, 59];
const suma= times.reduce((acumulator, currentValue)=> acumulator + currentValue);

console.log( 'la suma de los valores del Array es = '+ suma)

const media= suma / times.length;

console.log( ' El valor medio del Array es = ' + media);