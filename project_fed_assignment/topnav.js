document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (currentPage === href || 
            (currentPage === '' && href === 'Homepage.html') || 
            (currentPage === undefined && href === 'Homepage.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
        
        link.addEventListener('click', function(e) {
            if (href === '#') {
                e.preventDefault();
            }
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const navSearch = document.querySelector('.nav-search-input');
    if (navSearch) {
        navSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    window.location.href = 'Hawkerpage.html?q=' + encodeURIComponent(query);
                }
            }
        });
    }
    
    const cartCountElement = document.getElementById('cartCount');
    
    function updateCartCount() {
        if (cartCountElement) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountElement.textContent = totalItems;
            if (totalItems > 0) {
                cartCountElement.style.display = 'flex';
            } else {
                cartCountElement.style.display = 'none';
            }
        }
    }
    
    updateCartCount();
    
    window.addEventListener('storage', function(e) {
        if (e.key === 'cart') {
            updateCartCount();
        }
    });
    
    const profileIcon = document.querySelector('.profile-pic-nav');
    if (profileIcon && !profileIcon.classList.contains('active')) {
        const currentPage = window.location.pathname.split('/').pop() || 'Homepage.html';
        localStorage.setItem('previousPage', currentPage);
    }
});