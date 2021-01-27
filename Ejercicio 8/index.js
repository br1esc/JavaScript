'use strict'
const solicitud = prompt('Escribe aquí una frase')
function info(texto){
    var resuelve = 'La frase '+ solicitud +' está formada por ';
    if (texto === texto.toUpperCase()){
        resuelve +="MAYÚSCULAS";
    }else if ( texto===texto.toLowerCase()){
        resuelve +="minúsculas";
    } else {
        resuelve +="MAYÚSCULAS y minúsculas";
    }
   return resuelve 
}
alert(info(solicitud));