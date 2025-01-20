// Evento para que se visualicen los itinerarios

// Viaje Sport-01
document.getElementById("btn-show-sport-1").onclick = function () {
  document.getElementById("trip-description-sport-1").showModal();
};

document.getElementById("btn-close-sport-1").onclick = function () {
  document.getElementById("trip-description-sport-1").close();
};

// Viaje Sport-02
document.getElementById("btn-show-sport-2").onclick = function () {
  document.getElementById("trip-description-sport-2").showModal();
};

document.getElementById("btn-close-sport-2").onclick = function () {
  document.getElementById("trip-description-sport-2").close();
};

// Viaje Sport-03
document.getElementById("btn-show-sport-3").onclick = function () {
  document.getElementById("trip-description-sport-3").showModal();
};

document.getElementById("btn-close-sport-3").onclick = function () {
  document.getElementById("trip-description-sport-3").close();
};

/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/

// Viaje Culture-01
document.getElementById("btn-show-culture-1").onclick = function () {
  document.getElementById("trip-description-culture-1").showModal();
};

document.getElementById("btn-close-culture-1").onclick = function () {
  document.getElementById("trip-description-culture-1").close();
};

// Viaje Culture-02
document.getElementById("btn-show-culture-2").onclick = function () {
  document.getElementById("trip-description-culture-2").showModal();
};

document.getElementById("btn-close-culture-2").onclick = function () {
  document.getElementById("trip-description-culture-2").close();
};

// Viaje Culture-03
document.getElementById("btn-show-culture-3").onclick = function () {
  document.getElementById("trip-description-culture-3").showModal();
};

document.getElementById("btn-close-culture-3").onclick = function () {
  document.getElementById("trip-description-culture-3").close();
};

/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/

// Viaje Gastronomy-01
document.getElementById("btn-show-gastronomy-1").onclick = function () {
  document.getElementById("trip-description-gastronomy-1").showModal();
};

document.getElementById("btn-close-gastronomy-1").onclick = function () {
  document.getElementById("trip-description-gastronomy-1").close();
};

// Viaje Gastronomy-02
document.getElementById("btn-show-gastronomy-2").onclick = function () {
  document.getElementById("trip-description-gastronomy-2").showModal();
};

document.getElementById("btn-close-gastronomy-2").onclick = function () {
  document.getElementById("trip-description-gastronomy-2").close();
};

// Viaje Gastronomy-03
document.getElementById("btn-show-gastronomy-3").onclick = function () {
  document.getElementById("trip-description-gastronomy-3").showModal();
};

document.getElementById("btn-close-gastronomy-3").onclick = function () {
  document.getElementById("trip-description-gastronomy-3").close();
};

/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/

// Viaje adventure-01
document.getElementById("btn-show-adventure-1").onclick = function () {
  document.getElementById("trip-description-adventure-1").showModal();
};

document.getElementById("btn-close-adventure-1").onclick = function () {
  document.getElementById("trip-description-adventure-1").close();
};

// Viaje adventure-02
document.getElementById("btn-show-adventure-2").onclick = function () {
  document.getElementById("trip-description-adventure-2").showModal();
};

document.getElementById("btn-close-adventure-2").onclick = function () {
  document.getElementById("trip-description-adventure-2").close();
};

// Viaje adventure-03
document.getElementById("btn-show-adventure-3").onclick = function () {
  document.getElementById("trip-description-adventure-3").showModal();
};

document.getElementById("btn-close-adventure-3").onclick = function () {
  document.getElementById("trip-description-adventure-3").close();
};

/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/

// Viaje thematic-01
document.getElementById("btn-show-thematic-1").onclick = function () {
  document.getElementById("trip-description-thematic-1").showModal();
};

document.getElementById("btn-close-thematic-1").onclick = function () {
  document.getElementById("trip-description-thematic-1").close();
};

// Viaje thematic-02
document.getElementById("btn-show-thematic-2").onclick = function () {
  document.getElementById("trip-description-thematic-2").showModal();
};

document.getElementById("btn-close-thematic-2").onclick = function () {
  document.getElementById("trip-description-thematic-2").close();
};

// Viaje thematic-03
document.getElementById("btn-show-thematic-3").onclick = function () {
  document.getElementById("trip-description-thematic-3").showModal();
};

document.getElementById("btn-close-thematic-3").onclick = function () {
  document.getElementById("trip-description-thematic-3").close();
};


/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/



let currentIndex = 2;

function updateCarousel() {

  const carouselItems = document.querySelectorAll('.card-topic');
  carouselItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.style.opacity = '1';
      item.style.transform = 'scale(1)';
    } else {
      item.style.opacity = '0.5';
      item.style.transform = 'scale(0.8)';
    }
  });
}

function nextSlide() {
  alert('Funciona')
  if (currentIndex < 4) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

// Inicializar el carrusel
updateCarousel();
