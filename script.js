// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Portfolio Peternakan siap!');

    // Intersection Observer for Lazy Loading Animation
    const sections = document.querySelectorAll('.section, .footer');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scrolling for Navbar Links
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.querySelector(link.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
