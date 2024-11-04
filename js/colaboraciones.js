const myCarousel = document.getElementById('carouselExampleInterval');
const audio1=document.getElementById('audioPlayer1');
const audio2=document.getElementById('audioPlayer2');
const audio3=document.getElementById('audioPlayer3');
const audio4=document.getElementById('audioPlayer4');

// Reproduce la primer cancion al abrir el modal
var modalColaboraciones = document.getElementById('modalColaboraciones');
modalColaboraciones.addEventListener('shown.bs.modal', function () {
   audio1.play();
   stopAudios('audioPlayer1');
});

// Detener el audio al cerrar el modal
modalColaboraciones.addEventListener('hidden.bs.modal', function () {
   stopAudios();
});

// Al cambair el slide, se reproduce la canción según al slide al que hayas cambiado
myCarousel.addEventListener('slide.bs.carousel', event => {
   let slideActual = event.to;
    if(slideActual == 0)  {
         audio1.play();
         stopAudios('audioPlayer1');
    } else if(slideActual == 1)  {
         audio2.play();
         stopAudios('audioPlayer2');
    } else if(slideActual == 2)  {
         audio3.play();
         stopAudios('audioPlayer3');
    } else if(slideActual == 3)  {
         audio4.play();
         stopAudios('audioPlayer4');
    }
})

// Detengo todos los audios menos el que suena actualmente
//  para evitar que queden sonando varios audios al mismo tiempo
function stopAudios(id) {
   var audios = document.getElementsByTagName('audio');
   
   for (var i = 0; i < audios.length; i++) {
    if (id != null && audios[i].id === id) {
      audios[i].play();
    } else {
      audios[i].pause();
      audios[i].currentTime = 0;
    }
  }
}

