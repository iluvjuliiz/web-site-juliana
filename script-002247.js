
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-card');
    const buttons = document.querySelectorAll('.main-nav a');

    sections.forEach(section => {
        section.classList.remove('active-card');
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);

    if (!activeSection) {
        console.error('No existe esta sección:', sectionId);
        return;
    }

    activeSection.classList.add('active-card');

    const activeButton = Array.from(buttons).find(button => {
        return button.getAttribute('href') === '#' + sectionId;
    });

    if (activeButton) {
        activeButton.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.main-nav a');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
            history.replaceState(null, '', '#' + sectionId);
        });
    });

    const initialSection = window.location.hash.substring(1) || 'portada';
    showSection(initialSection);
});
