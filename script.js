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