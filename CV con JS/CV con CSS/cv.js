document.getElementById("selector").addEventListener("change", mostrar);

function mostrar () {

  console.log(document.getElementById("selector").value)

    if (document.getElementById("selector").value == 'Mostrar todo'){

      document.getElementsByClassName("row-Formacion")[0].style.display='block';

      document.getElementsByClassName("row-Trabajo")[0].style.display='block';

    } else if (document.getElementById("selector").value == 'Experiencia Laboral'){

        document.getElementsByClassName("row-Formacion")[0].style.display = 'none'; 

        document.getElementsByClassName("row-Trabajo")[0].style.display = 'block';

    } else {

        document.getElementsByClassName("row-Formacion")[0].style.display = 'block';

        document.getElementsByClassName("row-Trabajo")[0].style.display = 'none';

    }

 };
