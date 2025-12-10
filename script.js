document.addEventListener('DOMContentLoaded', function() {
    try {
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIconOpen = document.getElementById('menu-icon-open');
        const menuIconClose = document.getElementById('menu-icon-close');

        if (mobileMenuButton && mobileMenu && menuIconOpen && menuIconClose) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                menuIconOpen.classList.toggle('hidden');
                menuIconClose.classList.toggle('hidden');
            });
        }

        // Contact form handling
        const contactForm = document.getElementById('contact-form');
        const successMessage = document.getElementById('success-message');

        if (contactForm && successMessage) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const submitButton = contactForm.querySelector('button[type="submit"]');
                
                // Show loading state
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                
                // Get form data
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData.entries());
                console.log('Form submitted with data:', data);

                // Simulate a network request
                setTimeout(() => {
                    // In a real app, you'd handle the server response here.
                    // For this demo, we just hide the form and show the success message.
                    contactForm.style.display = 'none';
                    successMessage.classList.remove('hidden');
                }, 1500); // 1.5 second delay
            });
        }

        // FAQ Accordion
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('.faq-icon');

                answer.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        });

        // Update footer year
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
        
        // Pre-fill contact form from URL parameter
        const messageTextarea = document.getElementById('message');
        if (messageTextarea) {
            const urlParams = new URLSearchParams(window.location.search);
            const project = urlParams.get('project');
            if (project) {
                messageTextarea.value = `Hello, I'm interested in learning more about the "${project}" project. Please provide more details.`;
            }
        }
    } catch (error) {
        console.error("An error occurred in the site's JavaScript:", error);
    }
});