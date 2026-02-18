// ==================== LANGUAGE TOGGLE ====================
const translations = {
    en: {
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'hero.greeting': 'Hello, I\'m',
        'hero.title': 'Student / <span class="gradient-text">Developer</span> / Designer',
        'hero.summary': 'Professional with experience in business management and web development, combining strategic business vision with technical skills. I have worked in team leadership, operational management and sales, focusing on results and customer satisfaction. I also participated in the development of responsive web and mobile applications, prioritizing user experience, usability and performance.',
        'hero.cta.primary': 'Let\'s Talk',
        'hero.code.passion': '"Creating solutions"',
        'experience.title': 'Experience',
        'experience.subtitle': 'Professional',
        'experience.jobs.job1.title': 'Web Developer',
        'experience.jobs.job1.company': 'AD Soluções Dev — Brasília, Brazil',
        'experience.jobs.job1.period': 'Web and mobile applications development',
        'experience.jobs.job2.title': 'Store Manager',
        'experience.jobs.job2.company': 'Bicicletaria — Brasília, Brazil',
        'experience.jobs.job2.period': 'Team leadership and operational management',
        'experience.jobs.job3.title': 'Sales Agent',
        'experience.jobs.job3.company': 'Bicicletaria — Brasília, Brazil',
        'experience.jobs.job3.period': 'Sales and customer service',
        'skills.title': 'Skills',
        'skills.subtitle': '& Technologies',
        'skills.categories.dev': '💻 Development',
        'skills.categories.design': '🎨 Design & Creativity',
        'skills.categories.ai': '🤖 AI & Engines',
        'skills.categories.office': '📊 Office & Soft Skills',
        'skills.soft.creativity': 'Creativity',
        'skills.soft.conflict': 'Conflict Resolution',
        'skills.soft.communication': 'Good Communication',
        'skills.soft.teamwork': 'Teamwork',
        'contact.title': 'Let\'s <span class="gradient-text">Talk?</span>',
        'contact.text': 'I\'m always open to new opportunities and partnerships. Let\'s create something amazing together!',
        'footer.text': 'Made with 💜 by Paulo Henrique'
    },
    pt: {
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.skills': 'Skills',
        'nav.contact': 'Contato',
        'hero.greeting': 'Olá, eu sou',
        'hero.title': 'Estudante / <span class="gradient-text">Desenvolvedor</span> / Designer',
        'hero.summary': 'Profissional com experiência em gestão comercial e desenvolvimento web, unindo visão estratégica de negócios a competências técnicas. Atuei em liderança de equipe, gestão operacional e vendas, com foco em resultados e satisfação do cliente. Também participei do desenvolvimento de aplicações web e mobile responsivas, priorizando experiência do utilizador, usabilidade e desempenho.',
        'hero.cta.primary': 'Vamos Conversar',
        'hero.code.passion': '"Criar soluções"',
        'experience.title': 'Experiência',
        'experience.subtitle': 'Profissional',
        'experience.jobs.job1.title': 'Desenvolvedor Web',
        'experience.jobs.job1.company': 'AD Soluções Dev — Brasília, Brasil',
        'experience.jobs.job1.period': 'Desenvolvimento de aplicações web e mobile',
        'experience.jobs.job2.title': 'Gerente de Loja',
        'experience.jobs.job2.company': 'Bicicletaria — Brasília, Brasil',
        'experience.jobs.job2.period': 'Liderança de equipe e gestão operacional',
        'experience.jobs.job3.title': 'Agente de Vendas',
        'experience.jobs.job3.company': 'Bicicletaria — Brasília, Brasil',
        'experience.jobs.job3.period': 'Vendas e atendimento ao cliente',
        'skills.title': 'Skills',
        'skills.subtitle': '& Tecnologias',
        'skills.categories.dev': '💻 Desenvolvimento',
        'skills.categories.design': '🎨 Design & Criatividade',
        'skills.categories.ai': '🤖 IA & Engines',
        'skills.categories.office': '📊 Office & Soft Skills',
        'skills.soft.creativity': 'Criatividade',
        'skills.soft.conflict': 'Resolução de Conflitos',
        'skills.soft.communication': 'Boa Comunicação',
        'skills.soft.teamwork': 'Trabalho em Equipe',
        'contact.title': 'Vamos <span class="gradient-text">Conversar?</span>',
        'contact.text': 'Estou sempre aberto a novas oportunidades e parcerias. Me chama pra gente criar algo incrível juntos!',
        'footer.text': 'Feito com 💜 por Paulo Henrique'
    }
};

let currentLang = 'en';

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key === 'hero.title') {
                el.innerHTML = translations[lang][key];
            } else if (key === 'contact.title') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        const flag = langToggle.querySelector('.lang-flag');
        const text = langToggle.querySelector('.lang-text');
        if (lang === 'en') {
            flag.textContent = '🇧🇷';
            text.textContent = 'PT';
        } else {
            flag.textContent = '🇺🇸';
            text.textContent = 'EN';
        }
    }
    
    localStorage.setItem('preferredLang', lang);
}

function initLanguageToggle() {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    currentLang = savedLang;
    updateLanguage(savedLang);
    
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'pt' : 'en';
            updateLanguage(currentLang);
        });
    }
}

// ==================== CURSOR GLOW EFFECT ====================
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

// Initialize language toggle
initLanguageToggle();
