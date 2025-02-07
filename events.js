// Evento para que se visualicen los itinerarios

// Guardamos en una variable todos los botones para abrir el diálogo
let btnTripOpen = document.getElementsByClassName("btn-trip-open");

// Guardamos en una variable todos los botones para cerrar el diálogo
let btnTripClose = document.getElementsByClassName("btn-trip-close");

// ABRIR DIALOG
// Bucle for para recorrer todos los botones para que cuando se apriete en uno de ellos
// extraemos su valor de data-target, para saber que cuadro de dialogo abrir, ya que el valor del id
// del cuadro de dialogo y el data-target del botón coinciden
for (let i = 0; i < btnTripOpen.length; ++i) {
  btnTripOpen[i].onclick = function () {
    openDialog = btnTripOpen[i].getAttribute("data-target");
    document.getElementById(openDialog).showModal();
  };
}

// CERRAR DIALOG
// Uso de .closest que recorre el elemento y sus padres (dirigiéndose hacia la raiz del documento)
// hasta encontrar un nodo que coincida con el CSS selector especificado.
for (let i = 0; i < btnTripClose.length; ++i) {
  btnTripClose[i].onclick = function () {
    let closeDialog = btnTripClose[i].closest(".d-trip");
    closeDialog.close();
  };
}

/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/

// Evento carrousel sobre las tarjetas populares

document.addEventListener("DOMContentLoaded", function () {
  let current_exp = 0;
  const POSICION = document.querySelectorAll(".card-exp");
  // Variables para almacenar las flechas
  let al = document.getElementById("arrow-left");
  let ar = document.getElementById("arrow-right");



  POSICION[current_exp].style.opacity = '1'

  function checkWidth () {
    if(document.documentElement.clientWidth < 1000) {
      POSICION[current_exp].style.left = '15%'
    }
  }
  




  document.getElementById("arrow-right").onclick = function () {
    // Creamos una condición para desplazar la tarjeta visible en pantalla y que aparezca la que se encuentra a su izquierda. Entra en la condición si el valor de la tarjeta actual es inferior la cantidad máxima de tarjeta que disponemos.
    if (current_exp < 3) {
      // Desplazamos la tarjeta visible a la derecha y bajamos su opacidad.
      POSICION[current_exp].style.left = "110%";
      POSICION[current_exp].style.opacity = "0";
      // Sumamos 1 para que la tarjeta activa pase a la siguiente.
      current_exp++;
      // Desplazamos la siguiente tarjeta hacia la derecha y subimos la opacidad.
      POSICION[current_exp].style.left = "15%";
      POSICION[current_exp].style.opacity = "1";
      // Nos aseguramos que el botón con flecha hacia la derecha siga activo.
      ar.style.display = "initial";
    }
    // Creamos condición para que cuando hayamos llegado a la última tarjeta disponible, ya no se pueda tener la opción de desplazar hacia la derecha
    if (current_exp === 3) {
      console.log("AQUI");
      ar.style.display = "none";
    }
    al.style.display = "initial";
    // carrousel();
  };

  document.getElementById("arrow-left").onclick = function () {
    // Creamos una condición para desplazar la tarjeta visible en pantalla y que aparezca la que se encuentra a su izquierda. Entra en la condición si el valor de la tarjeta actual es inferior la cantidad máxima de tarjeta que disponemos.
    console.log(current_exp)
    if (current_exp > 0) {
      // Desplazamos la tarjeta visible a la izquierda y bajamos la opacidad.
      POSICION[current_exp].style.left = "-110%";
      POSICION[current_exp].style.opacity = "0";

      // Sumamos 1 para que la tarjeta activa pase a la siguiente.
      current_exp--;
      // Desplazamos la siguiente tarejta hacia la izquierda. 
      POSICION[current_exp].style.left = "15%"; 
      POSICION[current_exp].style.opacity = "1";
      // Nos aseguramos que el botón con flecha hacia la izquierda siga activo.
      ar.style.display = "initial";
    }
    // Creamos condición para que cuando hayamos llegado a la última tarjeta disponible, ya no se pueda tener la opción de desplazar hacia la izquierda
    if (current_exp === 0) {
      console.log("AQUI");
      al.style.display = "none";
    }

  };

});

