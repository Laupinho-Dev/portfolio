// ==================== SKILL PAGE LANGUAGE TOGGLE ====================
const skillTranslations = {
    en: {
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'back': '← Back to Portfolio',
        'react.desc': 'Development of modern web interfaces and reusable components',
        'projects.title': 'Projects',
        'react.ecommerce.desc': 'Complete e-commerce with product list, functional shopping cart, real-time total calculation, fake login system and 3-step simulated checkout. Developed with Context API for global state management.',
        'project.code': 'Code',
        'project.demo': 'View Demo →',
        'footer.text': 'Made with 💜 by Paulo Henrique',
        'js.desc': 'Dynamic, interactive and full-stack web programming',
        'js.kanban.desc': 'Complete Trello-style Kanban system with drag-and-drop, customizable columns, editable cards with priorities and localStorage persistence. Developed with React, @dnd-kit and Context API for complex state management.',
        'flutter.desc': 'Multi-platform mobile application development with Dart',
        'typescript.desc': 'Typed JavaScript for safer and more scalable code',
        'uiux.desc': 'User experience-focused interface design',
        'design.desc': 'Creation of visual identities, materials and creative pieces',
        'prompt.desc': 'Prompt optimization to extract the best from AI models',
        'picsart.desc': 'Photo editing and creative mobile art creation',
        'canvas.desc': 'Design and creation of visual pieces with online tools',
        'comfyui.desc': 'AI image generation through node-based workflows',
        'unity.desc': '2D/3D games and interactive experiences development',
        'unreal.desc': 'High-quality 3D experiences and games development',
        'coming.title': 'Coming Soon',
        'coming.desc': 'I\'m working on future projects, news coming soon.',
        'coming.tag': 'Coming Soon'
    },
    pt: {
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.skills': 'Skills',
        'nav.contact': 'Contato',
        'back': '← Voltar ao Portfólio',
        'react.desc': 'Desenvolvimento de interfaces web modernas e componentes reutilizáveis',
        'projects.title': 'Projetos',
        'react.ecommerce.desc': 'E-commerce completo com lista de produtos, carrinho funcional, cálculo de total em tempo real, sistema de login fake e checkout simulado em 3 etapas. Desenvolvido com Context API para gerenciamento de estado global.',
        'project.code': 'Código',
        'project.demo': 'Ver Demo →',
        'footer.text': 'Feito com 💜 por Paulo Henrique',
        'js.desc': 'Programação web dinâmica, interativa e full-stack',
        'js.kanban.desc': 'Sistema de Kanban estilo Trello completo com drag-and-drop, colunas personalizáveis, cards editáveis com prioridades e persistência no localStorage. Desenvolvido com React, @dnd-kit e Context API para gerenciamento de estado complexo.',
        'flutter.desc': 'Desenvolvimento de aplicativos mobile multiplataforma com Dart',
        'typescript.desc': 'JavaScript tipado para código mais seguro e escalável',
        'uiux.desc': 'Design de interfaces focado na experiência do usuário',
        'design.desc': 'Criação de identidades visuais, materiais e peças criativas',
        'prompt.desc': 'Otimização de prompts para extrair o melhor de modelos de IA',
        'picsart.desc': 'Edição de fotos e criação de artes criativas mobile',
        'canvas.desc': 'Design e criação de peças visuais com ferramentas online',
        'comfyui.desc': 'Geração de imagens com IA através de workflows node-based',
        'unity.desc': 'Desenvolvimento de jogos e experiências interativas 2D/3D',
        'unreal.desc': 'Desenvolvimento de experiências 3D e jogos de alta qualidade',
        'coming.title': 'Em Breve',
        'coming.desc': 'Estou trabalhando em projetos futuros, novidades em breve.',
        'coming.tag': 'Em Breve'
    }
};

let currentLang = 'en';

function updateSkillLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (skillTranslations[lang][key]) {
            el.textContent = skillTranslations[lang][key];
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

function initSkillLanguageToggle() {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    currentLang = savedLang;
    updateSkillLanguage(savedLang);
    
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'pt' : 'en';
            updateSkillLanguage(currentLang);
        });
    }
}

// Initialize on page load
initSkillLanguageToggle();
