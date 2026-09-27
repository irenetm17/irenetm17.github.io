// Seleccionamos el header
const header = document.querySelector('header');

// Escuchamos el evento de "hacer scroll" en la ventana
window.addEventListener('scroll', () => {
    // Si bajamos más de 50 píxeles...
    if (window.scrollY > 50) {
        // Hacemos el header un poco transparente
        header.style.backgroundColor = 'rgba(255, 255, 255, 0,9)'; 
    } else {
        // Si volvemos arriba del todo, lo ponemos blanco sólido otra vez
        header.style.backgroundColor = 'white';
    }
});