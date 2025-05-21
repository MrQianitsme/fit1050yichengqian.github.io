
// Scroll fade-in animation
window.addEventListener('scroll', () => {
    const destinations = document.querySelectorAll('.destination');
    destinations.forEach(dest => {
        const rect = dest.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            dest.classList.add('visible');
        }
    });

    // Show/hide back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Scroll to top
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Image popup
    const overlay = document.getElementById('popupOverlay');
    const overlayImg = document.querySelector('#popupOverlay img');
    document.querySelectorAll('.destination img').forEach(img => {
        img.addEventListener('click', () => {
            overlay.style.display = 'flex';
            overlayImg.src = img.src;
        });
    });
    overlay.addEventListener('click', () => overlay.style.display = 'none');

    // Trigger scroll event once on load
    window.dispatchEvent(new Event('scroll'));
});
