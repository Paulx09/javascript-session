// Obtener el botón y el párrafo del HTML
const boton = document.getElementById('miBoton');
const parrafo = document.getElementById('parrafoInicial');

// Definir una función que se ejecutará cuando se haga clic en el botón
function cambiarTexto() {
    parrafo.textContent = "¡El texto ha cambiado gracias a JavaScript!";
    parrafo.style.color = "blue"; // Opcional: Cambiar color
}

// Añadir un "escuchador de eventos" al botón
// Cuando el botón reciba un 'click', se ejecutará la función 'cambiarTexto'
boton.addEventListener('click', cambiarTexto);