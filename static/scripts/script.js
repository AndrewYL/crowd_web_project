// static/scripts/common.js

document.addEventListener('DOMContentLoaded', function () {
    // Общие скрипты

    // Боковое меню
    const burgerMenu = document.querySelector('#burger-menu');
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('#overlay');
    const projectsMenuToggle = document.querySelector('#projects-menu-toggle');
    const submenuContainer = document.querySelector('.submenu-container');

    // Открытие/закрытие бокового меню
    const toggleMenu = () => {
        const isMenuOpen = sideMenu.classList.toggle('open');
        overlay.classList.toggle('show', isMenuOpen);
        burgerMenu.classList.toggle('open', isMenuOpen);
        document.body.classList.toggle('no-scroll', isMenuOpen);
    };

    burgerMenu.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Открытие/закрытие подменю
    projectsMenuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        submenuContainer.classList.toggle('open');
    });

    // Закрытие бокового меню при клике на ссылку, кроме "Проекты"
    sideMenu.addEventListener('click', (event) => {
        const isSubmenu = event.target.closest('.submenu-container');
        if (event.target.tagName === 'A' && !isSubmenu && event.target !== projectsMenuToggle) {
            toggleMenu();
        }
    });

    // Предотвращение закрытия подменю при клике вне
    document.addEventListener('click', (e) => {
        if (!submenuContainer.contains(e.target) && e.target !== projectsMenuToggle) {
            // Не закрываем подменю
        }
    });

    // Остановка всплытия кликов внутри подменю
    submenuContainer.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
