document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        if (!icon.hasAttribute('href') || icon.getAttribute('href') === '#') {
            const iconClass = icon.querySelector('i').className;
            
            if (iconClass.includes('fa-facebook-f')) {
                icon.href = 'https://www.facebook.com/';
                icon.target = '_blank';
            } else if (iconClass.includes('fa-instagram')) {
                icon.href = 'https://www.instagram.com/';
                icon.target = '_blank';
            } else if (iconClass.includes('fa-twitter')) {
                icon.href = 'https://twitter.com/';
                icon.target = '_blank';
            } else if (iconClass.includes('fa-youtube')) {
                icon.href = 'https://www.youtube.com/';
                icon.target = '_blank';
            } else if (iconClass.includes('fa-tiktok')) {
                icon.href = 'https://www.tiktok.com/';
                icon.target = '_blank';
            }
        }
    });
    
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
            });
        }
    });
});