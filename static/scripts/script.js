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
document.getElementById('project-files').addEventListener('change', function() {
    const fileCount = this.files.length;
    document.getElementById('file-count').textContent = fileCount > 0 ? `Выбрано файлов: ${fileCount}` : 'Выберите файлы';
  });
  const createProjectForm = document.getElementById('create-project-form');
const errorMessages = document.getElementById('error-messages');

createProjectForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Предотвращаем стандартное поведение формы

    // Очистка предыдущих сообщений об ошибках
    errorMessages.innerHTML = '';

    // Валидация формы
    let isValid = true;
    const projectName = document.getElementById('project-name').value.trim();
    const projectDescription = document.getElementById('project-description').value.trim();
    const projectCategory = document.getElementById('project-category').value;
    const projectStartDate = document.getElementById('project-start-date').value;
    const projectEndDate = document.getElementById('project-end-date').value;

    if (projectName === '') {
        isValid = false;
        errorMessages.innerHTML += '<p>Пожалуйста, введите название проекта.</p>';
    }

    if (projectDescription === '') {
        isValid = false;
        errorMessages.innerHTML += '<p>Пожалуйста, введите описание проекта.</p>';
    }

    if (projectCategory === '') {
        isValid = false;
        errorMessages.innerHTML += '<p>Пожалуйста, выберите категорию проекта.</p>';
    }

    if (projectStartDate === '') {
        isValid = false;
        errorMessages.innerHTML += '<p>Пожалуйста, выберите дату начала проекта.</p>';
    }

    if (projectEndDate === '') {
        isValid = false;
        errorMessages.innerHTML += '<p>Пожалуйста, выберите дату окончания проекта.</p>';
    }

    if (new Date(projectStartDate) > new Date(projectEndDate)) {
        isValid = false;
        errorMessages.innerHTML += '<p>Дата начала проекта не может быть позже даты окончания.</p>';
    }

    if (isValid) {
        // Если форма валидна, можно отправить данные на сервер или выполнить другие действия
        alert('Форма успешно отправлена!');
        // Очистка формы после отправки
        createProjectForm.reset();
        document.getElementById('file-count').textContent = 'Выберите файлы';
    }
});
  });
  