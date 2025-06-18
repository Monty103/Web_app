// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const currentId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add a simple animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = '0';
    setTimeout(() => {
        mainContent.style.transition = 'opacity 1s ease';
        mainContent.style.opacity = '1';
    }, 100);
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.className = savedTheme;
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// Sidebar Toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('main');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    main.classList.toggle('sidebar-active');
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('active');
        main.classList.remove('sidebar-active');
    }
});

// Navigation
const navLinks = document.querySelectorAll('.sidebar nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links and sections
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active-section'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Show corresponding section
        const sectionId = link.getAttribute('href').substring(1);
        document.getElementById(sectionId).classList.add('active-section');
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            main.classList.remove('sidebar-active');
        }
    });
});

// Featured Gallery Scrolling (Reverted to original working version)
const featuredContainer = document.querySelector('.featured-container');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

if (leftBtn && rightBtn && featuredContainer) {
    leftBtn.addEventListener('click', () => {
        featuredContainer.scrollBy({
            left: -350,
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', () => {
        featuredContainer.scrollBy({
            left: 350,
            behavior: 'smooth'
        });
    });
}

// Search functionality
const searchInput = document.querySelector('.search-container input');
const searchButton = document.querySelector('.search-container button');
const filterButtons = document.querySelectorAll('.filter-btn');

if (searchButton) {
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Implement search functionality here
            console.log('Searching for:', searchTerm);
        }
    });
}

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Implement filter functionality here
            console.log('Filter:', button.textContent);
        });
    });
}

// Login form
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        // Implement login functionality here
        console.log('Login attempt:', { email, password });
    });
}

// Add click handlers for chapters
document.querySelectorAll('.chapter').forEach(chapter => {
    chapter.addEventListener('click', () => {
        console.log('Chapter clicked:', chapter.textContent);
        // Implement chapter navigation here
    });
});

// Add click handlers for popular cards
document.querySelectorAll('.popular-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        console.log('Popular card clicked:', title);
        // Implement navigation to manga/comic page here
    });
});

// Add click handlers for featured items
document.querySelectorAll('.featured-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        console.log('Featured item clicked:', title);
        // Implement navigation to manga/comic page here
    });
}); 