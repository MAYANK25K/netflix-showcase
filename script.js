/**
 * =====================================================================
 * APP LOGIC
 * =====================================================================
 * Contains logic for:
 * 1. FAQ Accordion (Expand/Collapse)
 * 2. Trending Carousel (Horizontal Scroll)
 * =====================================================================
 */

/**
 * FAQ Accordion Controller
 * Attaches click event listeners to all FAQ buttons.
 * Implements "exclusive opening" (closing other panels when one is opened).
 */
document.querySelectorAll('.faq-item button').forEach(btn => {
    btn.addEventListener('click', function() {
        // Toggle the 'active' class for the +/- icon rotation
        this.classList.toggle('active');
        
        // Select the answer panel immediately following the button
        const panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
            // Case 1: Panel is open -> Close it
            panel.style.maxHeight = null;
        } else {
            // Case 2: Panel is closed -> Open it
            
            // Step A: Close all other open panels first (Accordion behavior)
            document.querySelectorAll('.faq-answer').forEach(p => p.style.maxHeight = null);
            document.querySelectorAll('.faq-item button').forEach(b => b.classList.remove('active'));
            
            // Step B: Open the clicked panel by setting height to scrollHeight
            this.classList.add('active');
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

/**
 * Horizontal Carousel Logic
 * Handles the left/right navigation for the 'Trending Now' slider.
 */
const slider = document.getElementById('slider');

// Defensive check: Ensure slider exists before attaching listeners
if(slider) {
    const leftBtn = document.getElementById('slideLeft');
    const rightBtn = document.getElementById('slideRight');

    // Scroll Left
    if(leftBtn) {
        leftBtn.addEventListener('click', () => {
            slider.scrollBy({ 
                left: -slider.clientWidth, // Scroll by one screen width
                behavior: 'smooth' 
            });
        });
    }

    // Scroll Right
    if(rightBtn) {
        rightBtn.addEventListener('click', () => {
            slider.scrollBy({ 
                left: slider.clientWidth, 
                behavior: 'smooth' 
            });
        });
    }
}