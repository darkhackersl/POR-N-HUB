document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a scroll-to-top button
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

    // Copy to clipboard functionality
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const command = this.getAttribute('data-command');
            navigator.clipboard.writeText(command).then(() => {
                const successMessage = this.nextElementSibling;
                successMessage.style.display = 'inline';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });

    // Matrix effect
    const matrix = document.querySelector('.matrix');
    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        matrix.innerHTML = drops.map((y, index) => {
            const text = String.fromCharCode(0x30A0 + Math.random() * 96);
            drops[index] = y > window.innerHeight ? 0 : y + 20;
            return `<div style="left: ${index * 20}px; top: ${y}px;">${text}</div>`;
        }).join('');
    }

    setInterval(drawMatrix, 50);
});
