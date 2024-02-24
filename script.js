const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('MMMMM espero que no haya estado jugando con el NO. Pero bueno Feli, no esté triste por lo que dicen los demás. Usted es preciosa tal como es');
});

const noBtn = document.querySelector('#noBtn');

// Función para mover el botón 'No'
function moveNoButton() {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
}

// Evento para dispositivos con mouse
noBtn.addEventListener('mouseover', moveNoButton);

// Eventos para dispositivos táctiles
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Previene la acción por defecto de seguir el dedo
    moveNoButton();
});
noBtn.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Previene la acción por defecto de seguir el dedo
    moveNoButton();
});
