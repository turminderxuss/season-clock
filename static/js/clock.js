/**
 * Season Clock JavaScript
 * 
 * Handles the clock hand position calculation and information modal functionality.
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const clockHand = document.querySelector('.clock-hand');
    const infoButton = document.getElementById('info-button');
    const infoModal = document.getElementById('info-modal');
    const closeButton = document.querySelector('.close-button');
    
    /**
     * Calculate the position of the clock hand based on the current date
     * 
     * The calculation maps 365 days to 360 degrees, with an offset to align
     * the hand position with the winter solstice at the top of the clock.
     * 
     * @returns {number} The rotation angle in degrees
     */
    function calculateHandPosition() {
        const now = new Date();
        const startOfYear = new Date(now.getFullYear(), 0, 0);
        const diff = now - startOfYear;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        
        // Map day of year to degrees (0-360)
        // In the reference, January starts at the top with purple (winter colors)
        let degrees = (dayOfYear / 365) * 360;
        
        return degrees;
    }
    
    /**
     * Update the clock hand position
     */
    function updateClockHand() {
        const degrees = calculateHandPosition();
        clockHand.style.transform = `translateX(-50%) rotate(${degrees}deg)`;
    }
    
    // Open the modal when the info button is clicked
    infoButton.addEventListener('click', function() {
        infoModal.style.display = 'block';
    });
    
    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        infoModal.style.display = 'none';
    });
    
    // Close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === infoModal) {
            infoModal.style.display = 'none';
        }
    });
    
    // Initialize the clock hand position
    updateClockHand();
    
    // Update the clock hand position every minute
    setInterval(updateClockHand, 60000);
});