const listMenu = document.querySelector('.lista-menu');
const menu = document.querySelector('#menu');

function mostrarMenu() {
    
    if (listMenu.style.display === 'block') {
        listMenu.style.display = 'none';
    } else {
        listMenu.style.display = 'block'
    }
 }

menu.addEventListener('click',mostrarMenu)