document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-project-form');
    const errorMessages = document.getElementById('error-messages');
    const fileSelect = document.getElementById('file-select');
    const fileInput = document.getElementById('project-files');
    const fileNamesDiv = document.getElementById('file-names');

    fileSelect.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const fileCount = e.target.files.length;
        fileSelect.textContent = fileCount ? `Выбрано файлов: ${fileCount}` : 'Выберите файлы';

        fileNamesDiv.innerHTML = ''; // Очистка предыдущих имен файлов

        if (fileCount > 0) {
            const fileNames = Array.from(e.target.files).map(file => file.name).join(', ');
            fileNamesDiv.textContent = fileNames;
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        errorMessages.innerHTML = ''; // Очистка ошибок

        let isValid = true;
        const projectName = document.getElementById('project-name').value.trim();
        const projectDescription = document.getElementById('project-description').value.trim();
        const projectCategory = document.getElementById('project-category').value;
        const startDate = document.getElementById('project-start-date').value;
        const endDate = document.getElementById('project-end-date').value;

        if (!projectName) {
            isValid = false;
            errorMessages.innerHTML += '<p>Введите название проекта.</p>';
        }

        if (!projectDescription) {
            isValid = false;
            errorMessages.innerHTML += '<p>Введите описание проекта.</p>';
        }

        if (!projectCategory) {
            isValid = false;
            errorMessages.innerHTML += '<p>Выберите категорию.</p>';
        }

        if (new Date(startDate) > new Date(endDate)) {
            isValid = false;
            errorMessages.innerHTML += '<p>Дата начала не может быть позже даты окончания.</p>';
        }

        if (isValid) {
            alert('Проект успешно создан!');
            form.reset();
            fileSelect.textContent = 'Выберите файлы';
            fileNamesDiv.textContent = '';
        }
    });
});
