// static/scripts/index.js

document.addEventListener('DOMContentLoaded', function () {
    // Специфические скрипты для главной страницы

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

        // Показываем уведомление
        subscribeNotification.style.display = 'block';
        subscribeNotification.classList.add('show');
        subscribeNotification.classList.remove('hide');

        // Скрываем уведомление через 3 секунды
        setTimeout(() => {
            subscribeNotification.classList.remove('show');
            subscribeNotification.classList.add('hide');
            setTimeout(() => {
                subscribeNotification.style.display = 'none';
            }, 300); // Скрываем после завершения анимации
        }, 3000);
    });
});
