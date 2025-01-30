const menu_desktop = document.getElementById('menu_desktop');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
    menu_desktop.classList.toggle('collapsed');
});

const menu_mobile = document.getElementById('menu_mobile');
const menuToggle_mobile = document.getElementById('menuToggle_mobile');

menuToggle_mobile.addEventListener('click', () => {
    console.log("Entrei")
    menu_mobile.classList.toggle('collapsed');
});