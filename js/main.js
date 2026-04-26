// --- Cursor Personalizado ---
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');

// Desactivar en pantallas pequeñas por seguridad
if (window.innerWidth > 991) {
    document.addEventListener('mousemove', e => {
        if(cursor && follower) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }
    });

    document.querySelectorAll('a, button, .custom-card, .filter-btn, input, textarea, .nav-link').forEach(el => {
        el.addEventListener('mouseenter', () => follower?.classList.add('hovering'));
        el.addEventListener('mouseleave', () => follower?.classList.remove('hovering'));
    });
}

// --- Spotlight Dinámico en Cards ---
document.querySelectorAll('.custom-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// --- Typed JS (Efecto de Escritura) ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof Typed !== 'undefined') {
        new Typed('.typed-text', {
            strings: [
                "Estudiante de Ingeniería Informática.",
                "Enfoque en Desarrollo Web Full Stack.",
                "Creador de Videojuegos y lógica Backend.",
                "Programador en C#, Luau, JS y Python."
            ],
            typeSpeed: 40,
            backSpeed: 20,
            backDelay: 2000,
            loop: true
        });
    }
});

// --- Añadir clase 'scrolled' al navbar al hacer scroll ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// --- Resaltar sección activa en el Navbar ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// --- Iniciar Vanta, AOS y Filtros ---
document.addEventListener('DOMContentLoaded', () => {
    // Vanta.js
    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "body",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3b82f6,      // Líneas azules
            backgroundColor: 0x0f172a, // Fondo primario
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00,
            showDots: true
        });
    }

    // AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ once: true, offset: 50, duration: 800 });
    }

    // Filtros de Proyectos
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => { item.style.display = 'none'; }, 300);
                }
            });
        });
    });
});
