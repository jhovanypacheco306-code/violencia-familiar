// Scroll suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70; // Altura del navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Cerrar el menú móvil después de hacer clic
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Botón Scroll to Top
const btnScrollTop = document.getElementById('btnScrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        btnScrollTop.classList.add('show');
    } else {
        btnScrollTop.classList.remove('show');
    }

    // Navbar transparente/sólido
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
    } else {
        navbar.style.backgroundColor = '';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animación al hacer scroll (reveal elements)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.card, .gallery-item, img');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Prevenir envío del formulario (para demo)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado! (Esta es una demostración)');
    e.target.reset();
});

// Actualizar el año en el footer
const currentYear = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Mi Sitio Web. Todos los derechos reservados.`;
