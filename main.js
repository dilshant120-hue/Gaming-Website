// --- Navbar Scroll Effect ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Mobile Navigation ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- Support Form Handling ---
const supportForm = document.getElementById('support-form');
const formStatus = document.getElementById('form-status');

if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        
        // Basic get values
        const name = document.getElementById('name').value;
        const type = document.getElementById('issue-type').value;
        
        // Change button text temporarily
        const btn = supportForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            
            // Show success message
            formStatus.style.color = '#00ff44'; // Green success color
            formStatus.textContent = `Thanks ${name}! A technician will ping you shortly regarding your ${type} issue.`;
            
            // Reset form
            supportForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        }, 1500);
    });
}
