// ============================================================
// PORTFOLIO JAVASCRIPT - Enhanced Interactivity & Animations
// ============================================================

// Typing Animation
const textSequence = [
    "Web Developer",
    "Cybersecurity Enthusiast",
    "Future Tech Professional"
];

let textIndex = 0;
let charIndex = 0;

function typeText() {
    const typingElement = document.querySelector(".typing");
    
    if (!typingElement) return;

    if (charIndex < textSequence[textIndex].length) {
        typingElement.textContent += textSequence[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    const typingElement = document.querySelector(".typing");
    
    if (!typingElement) return;

    if (charIndex > 0) {
        typingElement.textContent = textSequence[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % textSequence.length;
        setTimeout(typeText, 500);
    }
}

// ============================================================
// Scroll Animations with Intersection Observer
// ============================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// ============================================================
// Auto-fill skill bars on scroll
// ============================================================

const skillObserverOptions = {
    threshold: 0.5
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('filled')) {
            const progressBar = entry.target.querySelector('.progress');
            if (progressBar) {
                progressBar.style.animation = 'fillBar 1.5s ease-out forwards';
                entry.target.classList.add('filled');
            }
        }
    });
}, skillObserverOptions);

// ============================================================
// Smooth scroll enhancement for navigation
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================================
// Navbar animation on scroll
// ============================================================

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar?.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar?.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
});

// ============================================================
// Remove loader after animation completes
// ============================================================

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        if (loader) {
            loader.style.pointerEvents = 'none';
        }
    }, 3000);
});

// ============================================================
// Hover ripple effect for cards
// ============================================================

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 139, 171, 0.1), white)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'white';
    });
});

// ============================================================
// Initialize animations on DOM ready
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    // Start typing animation
    typeText();
    
    // Observe elements for scroll animations
    document.querySelectorAll('.fade-in, .slide-in, .zoom-in').forEach(element => {
        observer.observe(element);
    });
    
    // Observe skill bars for animation
    document.querySelectorAll('.skill').forEach(skill => {
        skillObserver.observe(skill);
    });
    
    // Observe cards
    document.querySelectorAll('.card, .timeline-item, .cyber-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });
    
    // Add animation delays for gallery items
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animation = `fadeIn 0.8s ease-out forwards`;
        item.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Active nav link on scroll
    updateActiveNavLink();
});

// ============================================================
// Update active nav link based on scroll position
// ============================================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = 0;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            current = index;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    if (navLinks[current]) {
        navLinks[current].classList.add('active');
    }
}

window.addEventListener('scroll', updateActiveNavLink);

// ============================================================
// Parallax effect for hero background
// ============================================================

const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ============================================================
// Enhanced accessibility - keyboard navigation
// ============================================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any modals or overlays if they exist
    }
    
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        // Could open a search modal if needed
    }
});

// ============================================================
// Performance optimization - throttle scroll events
// ============================================================

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================================
// Cursor effect (optional enhancement)
// ============================================================

const interactiveElements = document.querySelectorAll('.btn, .card, .nav-link, button');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.05)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
    });
});

// ============================================================
// Contact Form Submission
// ============================================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show success message
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon!`);
        
        // Reset form
        contactForm.reset();
        
        // In a real scenario, you would send this data to a server
        console.log('Form submitted:', { name, email, message });
    });
}

// ============================================================
// Console welcome message
// ============================================================

console.log('%c✨ Welcome to Imaan\'s Portfolio! ✨', 'font-size: 18px; color: #ff8fab; font-weight: bold;');
console.log('%cFeel free to explore and enjoy the animations!', 'font-size: 14px; color: #3a3a3a;');