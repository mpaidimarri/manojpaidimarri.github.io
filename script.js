document.addEventListener("DOMContentLoaded", function() {
    var ctaButton = document.querySelector('.cta-button');
    
    // Change background color on hover
    ctaButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#0056b3';
    });

    ctaButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#007bff';
    });
});
