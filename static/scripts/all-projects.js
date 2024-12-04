document.addEventListener('DOMContentLoaded', () => {
  const projectLinks = document.querySelectorAll('.project-link');

  projectLinks.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      // Закрываем все открытые блоки, кроме текущего
      const projectCards = document.querySelectorAll('.project-details');
      projectCards.forEach((details) => {
        if (details !== button.previousElementSibling) {
          details.classList.remove('show');
          const otherButton = details.nextElementSibling;
          if (otherButton) otherButton.textContent = 'Подробнее';
        }
      });

      // Переключаем состояние текущего блока
      const projectDetails = button.previousElementSibling;
      const isCurrentlyVisible = projectDetails.classList.contains('show');
      projectDetails.classList.toggle('show', !isCurrentlyVisible);
      button.textContent = isCurrentlyVisible ? 'Подробнее' : 'Скрыть';
    });
  });
});
