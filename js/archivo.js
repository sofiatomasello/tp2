const contactoForm = document.getElementsByClassName("formulario")[0];
const botonEnviar = document.getElementsByClassName("btn btn-primary")[0];
const fondo = document.getElementsByClassName("imagenJustin")[0];
const email = document.getElementsByClassName("form-control")[0];
const comentario = document.getElementById("floatingTextarea");
const textoform= document.getElementsByClassName("textocontacto")[0];

// Al hacer clic en el botón de empezar, ocultamos el botón y el formulario, y mostramos una imagen de justin
botonEnviar.addEventListener('click', function() {
    // Verifica que ambos campos no estén vacíos
    if (email.value.trim() === "" || comentario.value.trim() === "") {
       alert("Por favor, completa ambos campos antes de enviar.");
    } else if(!validarEmail()) {
       alert("Tu email no es válido, utiliza @.");
    } else {
        $('#emailModal').modal('show');
        contactoForm.style.display = 'none';
        textoform.style.display='none';
        fondo.style.display = 'block';

    }
});
    

function validarEmail() {
    const email = document.getElementById('floatingInput').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (regex.test(email)) {
      // El email es válido
      return true;
    } else {
      // El email es inválido
      return false;
    }
  }