// Obtén referencias a los elementos del botón toggle y del menú
const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');

// Añade un evento de clic al botón toggle
toggleButton.addEventListener('click', () => {
  // Toggle (alternar) la clase "menuOpen" en el menú
  menu.classList.toggle('menuOpen');
});
