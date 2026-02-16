// Cursor Glow Effect
const cursorGlow = document.querySelector('.cursor-glow');

if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.9)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Typing effect for the code block (optional enhancement)
const codeLines = document.querySelectorAll('.code-block code');

codeLines.forEach(line => {
    line.style.opacity = '1';
});

// Add hover effect to skill tags
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        skillTags.forEach(otherTag => {
            if (otherTag !== this) {
                otherTag.style.opacity = '0.5';
            }
        });
    });
    
    tag.addEventListener('mouseleave', function() {
        skillTags.forEach(otherTag => {
            otherTag.style.opacity = '1';
        });
    });
});

// Console easter egg
console.log('%c👋 Olá, recrutador!', 'font-size: 20px; color: #8b5cf6; font-weight: bold;');
console.log('%cGostou do portfólio? Entre em contato: phziin061@gmail.com', 'font-size: 14px; color: #a0a0b0;');
console.log('%cFeito com 💜 por Paulo Henrique', 'font-size: 14px; color: #ec4899;');
