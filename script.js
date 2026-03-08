// Translations object
const translations = {
    en: {
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.education': 'Education',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.title': "Hello, I'm Matteo",
        'hero.subtitle': 'A minimalistic portfolio',
        'hero.description': "Welcome to my portfolio website. I create clean, functional, and beautiful digital experiences.",
        'skills.title': 'Skills',
        'skills.dev': 'Development',
        'skills.tools': 'Tools & Others',
        'skills.personal': 'Personal',
        'education.title': 'Education',
        'exp1.title': 'Industrial Design Student',
        'exp1.company': 'at "Transilvania" University Of Brasov',
        'exp1.desc': 'My studies focus on developing skills in product design, creativity, and technical problem-solving, combining engineering principles with aesthetics to create functional and innovative products.',
        'exp2.title': 'Mathematics & Computer Science',
        'exp2.company': 'at "Edmond Nicolau" Technical College',
        'exp2.desc': 'During this time, I developed strong analytical and problem-solving skills, with a focus on mathematics, computer science, and logical thinking.',
        'projects.title': 'Projects',
        'project1.title': 'Project One',
        'project1.desc': 'A minimalistic design project showcasing clean aesthetics and functionality.',
        'project2.title': 'Project Two',
        'project2.desc': 'An innovative solution built with modern technologies and best practices.',
        'project3.title': 'Project Three',
        'project3.desc': 'A creative endeavor that pushes the boundaries of design and technology.',
        'contact.title': 'Get In Touch',
        'contact.text': 'Feel free to reach out for collaborations or just a friendly hello.',
        'common.website': 'Visit Website'
    },
    ro: {
        'nav.about': 'Despre',
        'nav.skills': 'Abilități',
        'nav.education': 'Educație',
        'nav.projects': 'Proiecte',
        'nav.contact': 'Contact',
        'hero.title': 'Salut, sunt Matteo',
        'hero.subtitle': 'Un portofoliu minimal',
        'hero.description': 'Bine ai venit pe site-ul meu portofoliu. Creez experiențe digitale curate, funcționale și frumoase.',
        'skills.title': 'Abilități',
        'skills.dev': 'Dezvoltare',
        'skills.tools': 'Instrumente & Altele',
        'skills.personal': 'Personale',
        'education.title': 'Educație',
        'exp1.title': 'Student Design Industrial',
        'exp1.company': 'la Universitatea "Transilvania" Brașov',
        'exp1.desc': 'Studiile mele se concentrează pe dezvoltarea abilităților în design de produs, creativitate și rezolvarea problemelor tehnice, combinând principiile ingineresti cu estetica pentru a crea produse funcționale și inovatoare.',
        'exp2.title': 'Matematică & Informatică',
        'exp2.company': 'la Colegiul Tehnic "Edmond Nicolau"',
        'exp2.desc': 'În această perioadă, am dezvoltat abilități puternice de analiză și rezolvare a problemelor, cu accent pe matematică, informatică și gândire logică.',
        'projects.title': 'Proiecte',
        'project1.title': 'Proiect Unu',
        'project1.desc': 'Un proiect de design minimal care prezintă estetica curată și funcționalitatea.',
        'project2.title': 'Proiect Doi',
        'project2.desc': 'O soluție inovatoare construită cu tehnologii moderne și cele mai bune practici.',
        'project3.title': 'Proiect Trei',
        'project3.desc': 'O încercare creativă care împinge limitele designului și tehnologiei.',
        'contact.title': 'Contactează-mă',
        'contact.text': 'Simte-te liber să mă contactezi pentru colaborări sau doar pentru un salut prietenos.',
        'common.website': 'Vizitează Site-ul'
    }
};

// Current language
let currentLang = 'en';

// Smooth scrolling for navigation links
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

// Active section highlighting on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (newTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', newTheme);
    }
    
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Language Toggle with animation
const langToggle = document.querySelector('.lang-toggle');
const langEn = document.querySelector('.lang-en');
const langRo = document.querySelector('.lang-ro');

// Check for saved language preference
const savedLang = localStorage.getItem('language');
if (savedLang) {
    currentLang = savedLang;
    updateLanguage(savedLang);
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ro' : 'en';
    localStorage.setItem('language', currentLang);
    updateLanguage(currentLang);
});

function updateLanguage(lang) {
    // Update toggle button appearance
    if (lang === 'en') {
        langEn.classList.add('active');
        langRo.classList.remove('active');
    } else {
        langRo.classList.add('active');
        langEn.classList.remove('active');
    }
    
    // Get all translatable elements
    const translatableElements = document.querySelectorAll('[data-i18n]');
    
    // Add fade out animation
    translatableElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-10px)';
        element.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    });
    
    // Update content after fade out
    setTimeout(() => {
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Fade in
        translatableElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 150);
}

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerIcon = hamburger.querySelector('i');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
const mobileThemeToggle = document.querySelector('.mobile-menu .theme-toggle');
const mobileLangToggle = document.querySelector('.mobile-menu .lang-toggle');
const mobileLangEn = document.querySelector('.mobile-menu .lang-en');
const mobileLangRo = document.querySelector('.mobile-menu .lang-ro');

// Sync theme state between desktop and mobile toggles
function syncThemeToggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const mobileIcon = mobileThemeToggle.querySelector('i');
    
    if (currentTheme === 'dark') {
        mobileIcon.classList.remove('fa-moon');
        mobileIcon.classList.add('fa-sun');
    } else {
        mobileIcon.classList.remove('fa-sun');
        mobileIcon.classList.add('fa-moon');
    }
}

// Sync language state between desktop and mobile toggles
function syncLangToggle() {
    if (currentLang === 'en') {
        mobileLangEn.classList.add('active');
        mobileLangRo.classList.remove('active');
    } else {
        mobileLangRo.classList.add('active');
        mobileLangEn.classList.remove('active');
    }
}

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
    
    syncThemeToggle();
    syncLangToggle();
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    });
});

mobileThemeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (newTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', newTheme);
    }
    
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    syncThemeToggle();
});

mobileLangToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ro' : 'en';
    localStorage.setItem('language', currentLang);
    updateLanguage(currentLang);
    syncLangToggle();
});

// ==================== ENTERTAINMENT FEATURES ====================

// 1. Typewriter Effect for Subtitle
const subtitle = document.querySelector('.subtitle');
const originalText = subtitle.getAttribute('data-i18n');

function typeWriter() {
    const texts = {
        en: 'A minimalistic portfolio',
        ro: 'Un portofoliu minimal'
    };
    const text = texts[currentLang] || texts.en;
    let i = 0;
    subtitle.textContent = '';
    subtitle.classList.add('typewriter-wrapper');
    
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    
    function type() {
        if (i < text.length) {
            subtitle.textContent = text.substring(0, i + 1);
            subtitle.appendChild(cursor);
            i++;
            setTimeout(type, 80);
        }
    }
    type();
}

// Run typewriter on load and on language change (DISABLED)
// setTimeout(typeWriter, 1200);
// const originalUpdateLanguage = updateLanguage;
// updateLanguage = function(lang) {
//     originalUpdateLanguage(lang);
//     setTimeout(typeWriter, 150);
// };

// 2. Skill Tag Click Sparkle Effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        this.classList.remove('clicked');
        void this.offsetWidth; // Trigger reflow
        this.classList.add('clicked');
        
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 500);
    });
});


