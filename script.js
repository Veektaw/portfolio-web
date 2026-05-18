// ==================== NAVIGATION ==================== //
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open (mobile)
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable body scroll
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ==================== ACTIVE NAVIGATION LINK ==================== //
const sections = document.querySelectorAll('section');

function setActiveNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// ==================== SMOOTH SCROLL ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== SCROLL REVEAL ANIMATION ==================== //
// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobileDevice = window.matchMedia('(max-width: 768px)').matches;

function reveal() {
    const reveals = document.querySelectorAll('.timeline-item, .skill-category, .education-card, .contact-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        // Reduce threshold for mobile for faster reveals
        const elementVisible = isMobileDevice ? 100 : 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.timeline-item, .skill-category, .education-card, .contact-item');
    reveals.forEach(element => {
        if (!prefersReducedMotion) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
    });
});

// Use requestAnimationFrame for better performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            reveal();
            ticking = false;
        });
        ticking = true;
    }
});

reveal(); // Check on page load

// ==================== TYPING EFFECT ==================== //
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle && !prefersReducedMotion) {
    const originalText = heroSubtitle.textContent;
    // Don't show typing effect on very small screens for better performance
    const showTypingEffect = !isMobileDevice || window.innerWidth > 480;
    
    if (showTypingEffect) {
        heroSubtitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                heroSubtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
}

// ==================== SCROLL TO TOP BUTTON ==================== //
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');

// Mobile-responsive sizing
const isMobile = window.matchMedia('(max-width: 768px)').matches;
const buttonSize = isMobile ? '45px' : '50px';
const buttonBottom = isMobile ? '20px' : '30px';
const buttonRight = isMobile ? '20px' : '30px';

scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: ${buttonBottom};
    right: ${buttonRight};
    width: ${buttonSize};
    height: ${buttonSize};
    background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: ${isMobile ? '1rem' : '1.2rem'};
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    transition: all 0.3s ease;
    z-index: 999;
    -webkit-tap-highlight-color: transparent;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Touch-friendly hover effects
if (!isMobile) {
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.transform = 'translateY(-5px)';
        scrollToTopBtn.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.5)';
    });

    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.transform = 'translateY(0)';
        scrollToTopBtn.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
    });
}

// Add touch feedback for mobile
scrollToTopBtn.addEventListener('touchstart', () => {
    scrollToTopBtn.style.transform = 'scale(0.95)';
});

scrollToTopBtn.addEventListener('touchend', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
});

// ==================== STATS COUNTER ANIMATION ==================== //
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, stepTime);
}

// Trigger counter animation when stats section is in view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                if (!isNaN(target)) {
                    animateCounter(stat, target);
                }
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    observer.observe(aboutSection);
}

// ==================== FORM VALIDATION (if you add a contact form later) ==================== //
// This is a placeholder for future form implementation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ==================== CONSOLE MESSAGE ==================== //
console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cIf you\'re interested in working together, feel free to reach out!', 'font-size: 14px; color: #06b6d4;');
console.log('%cEmail: Iyayi.ose.victor@gmail.com', 'font-size: 12px; color: #cbd5e1;');
