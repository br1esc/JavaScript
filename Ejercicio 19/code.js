//Haz que cuando se haga click sobre el botón “Guardar”, salté un alert con un mensaje de guardado.
document.getElementById('boton1').addEventListener("click",alert1);
function alert1 (){
    alert("Los datos se han guardado.")
};
//Cuando hagamos foco sobre este input se pondrá de color amarillo y cuando se lo quitemos cambiará de color

document.getElementById('focus1').addEventListener("focusin",amarillo)
function amarillo(){
    document.getElementById('focus1').style.background = 'yellow';
}
document.getElementById('focus1').addEventListener("focusout",blanco)
function blanco(){
    document.getElementById('focus1').style.background = 'white';
}

//Dependiendo si escribamos una vocal o una consonante el contenido del input aparecerá de distinto color.

const inputxt =document.querySelector("#texto1");
         //las vocales se seleccionan por los caracteres Unicode del teclado
inputxt.addEventListener('keypress', letras);
function letras(event){
    const laLetra = event.keyCode;
    if (laLetra === 97 || laLetra === 101 || laLetra === 105 || laLetra === 111 || laLetra === 117){
        inputxt.style.color= '#a8323e';
    } else { 
        inputxt.style.color= '#32a836';
    }
};