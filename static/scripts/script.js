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

    const scrollUp = document.getElementById('scrollUp');

// Показываем стрелку, когда страница прокручена вниз на 300px
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollUp.style.display = 'block';
        scrollUp.classList.remove('fade-out');
        scrollUp.classList.add('fade-in');
    } else {
        scrollUp.classList.remove('fade-in');
        scrollUp.classList.add('fade-out');
    }
});

// При клике на стрелку прокручиваем страницу вверх
scrollUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
});
