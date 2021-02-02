//Haz que cuando se haga click sobre el botón “Guardar”, salté un alert con un mensaje de guardado.
document.getElementById('boton1').addEventListener("click,alert1");
function alert1 (){
    alert("Los datos se han guardado.")
};
//Cuando hagamos foco sobre este input se pondrá de color amarillo y cuando se lo quitemos cambiará de color
function amarillo(x){
    x.style.background = 'yellow';
}
function blanco (y){
    y.style.background= 'white';
}
//Dependiendo si escribamos una vocal o una consonante el contenido del input aparecerá de distinto color.

const letras = document.querySelector('.texto');

function revision (event) {
    const tipoletra = envent.wich;
    if(tipoletra === 97 || tipoletra === 101 || tipoletra === 111 || tipoletra === 117 ){
        letras.style.color= '#a8323e';
    } else {
        letras.style.color='#32a836';
    }
};
