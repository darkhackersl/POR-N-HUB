// Add your JavaScript code here for additional interactivity if needed
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Add a scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '⬆️';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Create falling coding objects
    const codingObjects = ['<i class="fas fa-code"></i>', '<i class="fas fa-laptop-code"></i>', '<i class="fas fa-terminal"></i>'];
    const container = document.querySelector('body');

    for (let i = 0; i < 5; i++) {
        const fallElement = document.createElement('div');
        fallElement.classList.add('fall');
        fallElement.innerHTML = codingObjects[Math.floor(Math.random() * codingObjects.length)];
        container.appendChild(fallElement);
    }
});
