const contactoForm = document.getElementsByClassName("formulario")[0];
const botonEnviar = document.getElementsByClassName("btn btn-primary")[0];
const fondo = document.getElementsByClassName("imagenJustin")[0];
const email = document.getElementsByClassName("form-control")[0];
const comentario = document.getElementById("floatingTextarea");

// Al hacer clic en el botón de empezar, ocultamos el botón y el formulario, y mostramos una imagen de justin
botonEnviar.addEventListener('click', function() {
    // Verifica que ambos campos no estén vacíos
    if (email.value.trim() === "" || comentario.value.trim() === "") {
        alert("Por favor, completa ambos campos antes de enviar.");
    } else {
        contactoForm.style.display = 'none';
        fondo.style.display = 'block';
    }
});
    
