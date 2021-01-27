'use strict';

const notas = [ 6, 7, 2, 9, 3, 4, 5, 8, 2 ];

var primeraForma = 0;
for (let i=0; i< notas.length ; i++ ){
    primeraForma += notas[i];
};
console.log ('Con el bucle FOR '+ primeraForma);

var segundaForma = 0;
for ( var nota of notas) {
    segundaForma += nota;
};

console.log ( 'Con el bucle For...of '+ segundaForma);
