// Trigger the watering animation and then blooming
window.onload = () => {
    // Start the curtain opening animation
    document.querySelector('.left').style.transform = 'translateX(100%)';
    document.querySelector('.right').style.transform = 'translateX(-100%)';

    setTimeout(() => {
        // Watering process - Simulate the watering can appearing
        document.querySelector('.watering-can').style.opacity = 1;

        // Simulate water pouring
        setTimeout(() => {
            document.querySelector('.seed').style.opacity = 0;  // Seed will disappear as it "grows"
            document.querySelector('.flower').style.opacity = 1;  // Flower starts to bloom
        }, 3000);  // Watering finishes after 3 seconds

    }, 1000);  // Wait for 1 second before starting the watering process
};
