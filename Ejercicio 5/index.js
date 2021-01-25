
var DNI = prompt ( 'Indica solo el numero de DNI:', '')
console.log(DNI, 'tu dni')

var letras= ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var Letrausuario = prompt ( 'Indica la letra:' )

if ( DNI < 0 || DNI > 999999999 ){ 
    alert('No es un DNI valido')
} else {
    var LetraDNI = letras[DNI % 23];
   if (LetraDNI != Letrausuario){
    alert('No es un DNI valido') 
   } else {
       alert (' Tu número de DNI y letra son correctos')
   }
}
