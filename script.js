const elementAnimacao = document.querySelectorAll('.card')
const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    });
}, {
    threshold: 0.6
});

elementAnimacao.forEach((el) => observador.observe(el));

// cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

const links = document.querySelectorAll('a, button');

links.forEach(link => {
  link.addEventListener('mouseenter', () => cursor.classList.add('active'));
  link.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});