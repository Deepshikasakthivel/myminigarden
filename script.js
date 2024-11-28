let selectedSeed = null;
let plantGrowing = false;

// Seed types and their characteristics
const seedTypes = {
    rose: {
        color: '#e57373',
        height: '70px',
    },
    tulip: {
        color: '#fbc02d',
        height: '100px',
    },
    sunflower: {
        color: '#ffeb3b',
        height: '120px',
    }
};

// Seed selection event
document.querySelectorAll('.seed').forEach(seed => {
    seed.addEventListener('click', function() {
        selectedSeed = this.getAttribute('data-type');
        document.getElementById('waterButton').disabled = false; // Enable watering
        document.getElementById('plant').classList.remove('rose', 'tulip', 'sunflower');
        document.getElementById('plant').classList.add(selectedSeed); // Add the selected seed class
        document.getElementById('plant').style.height = '0px'; // Reset height before growing
        showTooltip('Plant the
