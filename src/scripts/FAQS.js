document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.closest('.faq-item');
        faqItem.classList.toggle('active');
        
        const toggle = question.querySelector('.faq-toggle');
        toggle.textContent = faqItem.classList.contains('active') ? '-' : '+';
    });
});