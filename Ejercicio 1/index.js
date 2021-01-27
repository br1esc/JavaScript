// base 16*23
//altura 13
//Volumen= base * altura
const volumen =16*23*13
console.log('volumen', volumen +' cm3');

//Area= al+ 2ab

const al = 23*13;
const ab = 16*23;
const Area = al+ 2*ab;
console.log( 'Area', Area + ' cm2');


//Generalización:
const base = 23;
const alto = 13;
const ancho = 16;
 
const volumenfinal = base * alto* ancho;
console.log('volumenfinal', volumenfinal+ 'cm3')

const areafinal = base * alto + 2 * base * ancho
console.log ('areafinal', areafinal + ' cm2')