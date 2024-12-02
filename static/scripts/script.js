document.addEventListener('DOMContentLoaded', function () {
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
  
    // Главный слайдер
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    let currentIndex = 0;
    let sliderInterval;
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
    }
  
    // Предыдущий слайд
    prevButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Предотвращаем всплытие
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });
  
    // Следующий слайд
    nextButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Предотвращаем всплытие
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });
  
    // Автоматическое переключение слайдов каждые 5 секунд
    function startAutoSlide() {
        sliderInterval = setInterval(() => {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            showSlide(currentIndex);
        }, 7500);
    }
  
    function stopAutoSlide() {
        clearInterval(sliderInterval);
    }
  
    // Показать первый слайд при загрузке
    showSlide(currentIndex);
  
    // Запуск автоматического переключения слайдов
    startAutoSlide();
  
    // Обработка формы подписки
    const subscribeForm = document.getElementById('subscribe-form');
    const subscribeNotification = document.getElementById('subscribe-notification');
  
    subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Предотвращаем стандартное поведение формы
  
        // Здесь можно добавить код для отправки данных формы на сервер
        // Например, с использованием fetch или XMLHttpRequest
  
        // Показываем уведомление
        subscribeNotification.style.display = 'block';
        subscribeNotification.classList.add('show');
  
        // Скрываем уведомление через 3 секунды
        setTimeout(() => {
            subscribeNotification.classList.remove('show');
            setTimeout(() => {
                subscribeNotification.style.display = 'none';
            }, 300); // Скрываем после завершения анимации
        }, 3000);
    });
  });
  