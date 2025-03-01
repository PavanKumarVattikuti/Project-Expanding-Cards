document.querySelectorAll('.panel').forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        document.querySelector('.panel.active').classList.remove('active');
        panel.classList.add('active');
    });
});