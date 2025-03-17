// Existing button functionality
document.querySelectorAll('.request-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert(`Has solicitado: ${productName}`);
    });
});

// Enhanced Load more functionality with smoother animations
const loadMoreBtn = document.getElementById('loadMoreBtn');
const extraProducts = document.querySelectorAll('.extra-product');
const productsSection = document.querySelector('.products-section');

loadMoreBtn.addEventListener('click', async function() {
    const isShowing = extraProducts[0].style.display === 'block';
    loadMoreBtn.disabled = true; // Prevent double-clicking during animation
    
    if (isShowing) {
        // Hide products with improved animation
        loadMoreBtn.textContent = 'Ocultando...';
        
        // Scroll back to products section smoothly
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Animate each product with a stagger effect
        for (let i = extraProducts.length - 1; i >= 0; i--) {
            const product = extraProducts[i];
            setTimeout(() => {
                product.classList.add('hiding');
            }, (extraProducts.length - i - 1) * 50);
        }
        
        // Wait for animations to complete
        await new Promise(resolve => setTimeout(resolve, 600));
        
        extraProducts.forEach(product => {
            product.style.display = 'none';
            product.classList.remove('hiding');
        });
        
        loadMoreBtn.textContent = 'Ver más productos';
    } else {
        // Show products with improved animation
        loadMoreBtn.textContent = 'Cargando...';
        
        // First set display to block but keep opacity 0
        extraProducts.forEach(product => {
            product.style.display = 'block';
            product.style.opacity = '0';
            product.style.transform = 'scale(0.8) translateY(20px)';
        });
        
        // Force a reflow to ensure the initial state is rendered
        extraProducts[0].offsetHeight;
        
        // Animate each product with a stagger effect
        extraProducts.forEach((product, index) => {
            setTimeout(() => {
                product.style.opacity = '1';
                product.style.transform = 'scale(1) translateY(0)';
            }, index * 50);
        });
        
        loadMoreBtn.textContent = 'Ver menos productos';
    }
    
    // Re-enable button after animation
    setTimeout(() => {
        loadMoreBtn.disabled = false;
    }, 600);
});

// Initialize extra products as hidden
extraProducts.forEach(product => {
    product.style.display = 'none';
});

// Add stagger animation to initial products
document.querySelectorAll('.product-card:not(.extra-product)').forEach((card, index) => {
    card.style.animationDelay = `${index * 100}ms`;
});