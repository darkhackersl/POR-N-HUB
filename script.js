document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".reveal-up", {
        scrollTrigger: {
            trigger: ".reveal-up",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    });

    // Create matrix effect
    function createMatrix() {
        const matrixContainer = document.querySelector('.matrix');
        const columns = Math.floor(window.innerWidth / 20);
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.style.left = `${i * 20}px`;
            column.style.animationDuration = `${Math.random() * 5 + 2}s`;
            matrixContainer.appendChild(column);

            for (let j = 0; j < 30; j++) {
                const char = document.createElement('span');
                char.innerText = String.fromCharCode(0x30A0 + Math.random() * 96);
                column.appendChild(char);
            }
        }
    }

    createMatrix();
});
