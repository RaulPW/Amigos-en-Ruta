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
  
  
  //Que solo se produzca el evento en la página index.html
  if (window.location.pathname.includes("index.html") || window.location.pathname.includes("Amigos-en-Ruta")) {
    let current_exp = 0;
    const POSICION = document.querySelectorAll(".card-exp");
    // Variables para almacenar las flechas
    const arrowLeft = document.getElementById("arrow-left");
    const arrowRight = document.getElementById("arrow-right");

    // Función para actualizar la visibilidad de las tarjetas y el estado de las flechas
    function updateCarousel() {
      POSICION.forEach((card, index) => {
        //Actual tarjeta
        if (index === current_exp) {
          card.style.left = "50%";
          card.style.transform = "translateX(-50%)";
          card.style.opacity = "1";
          card.style.zIndex = "1";
        } else if (index > current_exp) {
          card.style.left = "-100%"; // Mueve la tarjeta a la izquierda fuera de la vista
          card.style.transform = "translateX(-50%)"; // Mantén el transform para coherencia
          card.style.opacity = "0";
          card.style.zIndex = "0";
        } else {
          card.style.left = "100%"; // Mueve la tarjeta a la derecha fuera de la vista
          card.style.transform = "translateX(-50%)"; // Mantén el transform para coherencia
          card.style.opacity = "0";
          card.style.zIndex = "0";
        }
      });

      // Actualiza la visibilidad de las flechas
      arrowLeft.style.display = current_exp === 0 ? "none" : "initial";
      arrowRight.style.display = current_exp === POSICION.length - 1 ? "none" : "initial";
    }
    // Inicializar el carrusel al cargar la página
    // Llama a updateCarousel() al inicio para posicionar la primera tarjeta correctamente
    updateCarousel();

    arrowRight.onclick = function () {
      if (current_exp < POSICION.length - 1) {
        current_exp++;
        updateCarousel();
      }
    };

    arrowLeft.onclick = function () {
      if (current_exp > 0) {
        current_exp--;
        updateCarousel();
      }
    };
  } 
});

/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/

// Evento cuando hacemos scroll en el blog y vayan apareciendo los articulos.

// verificar la URL del archivo actual antes de ejecutar el evento

// Almacenamos en una constante todos los articulos
const ARTICULOS = document.querySelectorAll(".art-blog");

// Creamos variable para almacenar la altura máxima que nos servirá para un bucle for
let hw = window.innerHeight;

// Variable para poder ir acceder a cada uno de los elementos (ARTICULOS[article_actual])
//let article_actual = 0;

function aparecerArticulo() {
  ARTICULOS.forEach((article) => {
    // guardo en una variable la posición top del articulo.
    const POSICION = article.getBoundingClientRect().top;
    const APARECER = hw - hw / 5;

    console.log("posicion:" + POSICION + "aparacer: " + APARECER);

    if (POSICION < APARECER) {
      console.log("AHORA");
      article.style.opacity = "1";
      article.style.transform = "scale(1)";
    }
  });
}
