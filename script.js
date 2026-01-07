/**
 * =====================================================================
 * APP LOGIC
 * =====================================================================
 */

/**
 * FAQ Accordion Controller
 */
document.querySelectorAll('.faq-item button').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            document.querySelectorAll('.faq-answer').forEach(p => p.style.maxHeight = null);
            document.querySelectorAll('.faq-item button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

/**
 * Horizontal Carousel Logic
 */
const slider = document.getElementById('slider');

if(slider) {
    const leftBtn = document.getElementById('slideLeft');
    const rightBtn = document.getElementById('slideRight');

    if(leftBtn) {
        leftBtn.addEventListener('click', () => {
            slider.scrollBy({ 
                left: -slider.clientWidth,
                behavior: 'smooth' 
            });
        });
    }

    if(rightBtn) {
        rightBtn.addEventListener('click', () => {
            slider.scrollBy({ 
                left: slider.clientWidth, 
                behavior: 'smooth' 
            });
        });
    }
}

/* --- DATA SECURITY POPUP LOGIC --- */

// Function to open the "No Data Saved" popup
function showDataPopup() {
    const popup = document.getElementById('dataPopup');
    if (popup) {
        popup.style.display = 'flex';
    }
}

// Function to close the "No Data Saved" popup
function closeDataPopup() {
    const popup = document.getElementById('dataPopup');
    if (popup) {
        popup.style.display = 'none';
    }
}