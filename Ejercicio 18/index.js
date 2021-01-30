/* A) Nº de enlaces TOTAL.*/
const enlace = document.getElementsByTagName('a');
/* B)  Penúltima dirección de la página.*/
const penultweb = enlace[enlace.length - 1].href;
/* C)  Nº de enlaces del 3er párrafo.*/
const tercerparraf = document.getElementById('third-paragraph');
const enlaces3p = tercerparraf.getElementsByTagName('a').length;

/* Para mostrar en pantalla A.*/
const resultadoA = document.querySelector('#Aid');
resultadoA.innerHTML= `En esta página hay ${enlace.length} enlaces a otras webs`;
/* Para mostar B, hay que crear el elemento e incluirlo al DOM :*/

const resultadoB=document.createElement('p');
const contenidoB= document.createTextNode('La penúltima web mostrada es: '+ penultweb+'.');
resultadoB.appendChild(contenidoB);
const resultados= document.querySelector('.results');
resultados.appendChild(resultadoB);

/* Para mostrar en pantalla C.*/

const resultadoC = document.querySelector('#Cid');
resultadoC.innerHTML= `En esta página hay ${enlaces3p} enlaces a otras webs en el tercer párrafo`;

