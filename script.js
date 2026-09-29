// Seleccionamos el header
const header = document.querySelector('header');

// Escuchamos el evento de "hacer scroll" en la ventana
window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
        // Hacemos el header un poco transparente
        header.style.backgroundColor = 'rgba(169, 124, 213, 0.8)'; 
    } else {
        // Si volvemos arriba del todo, lo ponemos blanco sólido otra vez
        header.style.backgroundColor = 'rgb(169, 124, 213)';
    }
});

// === POPUP (MODAL) PARA FOTOS ===

// Seleccionamos los elementos del HTML
const popup = document.getElementById('fondo-popup');
const imagenPopup = document.getElementById('imagen-popup');
const textoPopup = document.getElementById('texto-popup');
const botonCerrar = document.getElementById('cerrar-popup');

// Seleccionamos TODOS los cuadros que tengan la clase "abrir-popup"
const botonesFoto = document.querySelectorAll('.abrir-popup');

// Le decimos a cada cuadro qué hacer al hacerle clic
botonesFoto.forEach(boton => {
    boton.addEventListener('click', () => {
        // Leemos la ruta de la foto y el texto que pusimos en el HTML
        const rutaFoto = boton.getAttribute('data-foto');
        const textoLienzo = boton.getAttribute('data-texto');
        
        // Se los inyectamos al popup
        imagenPopup.src = rutaFoto;
        textoPopup.textContent = textoLienzo;
        
        // Le quitamos la clase "oculto" al fondo para que aparezca
        popup.classList.remove('oculto');
    });
});

// Cerramos el popup al darle a la X
botonCerrar.addEventListener('click', () => {
    popup.classList.add('oculto');
});

// ¡Extra! Cerramos el popup también si haces clic fuera de la foto (en el fondo oscuro)
popup.addEventListener('click', (evento) => {
    if (evento.target === popup) {
        popup.classList.add('oculto');
    }
});