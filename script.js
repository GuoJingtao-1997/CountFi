document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip links with just "#"

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for any fixed headers
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example of loading placeholder images with placeholders
    const placeholderImages = document.querySelectorAll('img[src^="images/"]');
    placeholderImages.forEach(img => {
        // You can replace this with actual image loading logic when images are available
        img.onerror = function () {
            this.src = `https://via.placeholder.com/600x400?text=${this.alt || 'RiderCount Image'}`;
        };
    });
}); 