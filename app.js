let selectedSeed = null;
let selectedPot = null;

document.querySelectorAll('.seed').forEach(seed => {
    seed.addEventListener('click', () => {
        selectedSeed = seed.id;
        document.getElementById('message').innerText = 'You selected a seed!';
    });
});

document.querySelectorAll('.pot').forEach(pot => {
    pot.addEventListener('click', () => {
        selectedPot = pot.id;
        document.getElementById('message').innerText = 'You selected a pot!';
    });
});

// When the user clicks to plant
document.querySelector('.planting-area').addEventListener('click', () => {
    if (selectedSeed && selectedPot) {
        document.getElementById('message').innerText = 'Planting...';

        // Simulate flower blooming
        setTimeout(() => {
            let flower = document.getElementById('plant');
            flower.style.width = "100px"; // Flower size
            flower.style.height = "100px";
            flower.style.bottom = "50px";
            flower.style.backgroundColor = getRandomFlowerColor();
            flower.style.transition = 'width 1s, height 1s, bottom 1s';

            document.getElementById('message').innerText = 'Your flower is blooming!';
        }, 1000);
    } else {
        document.getElementById('message').innerText = 'Please select both a seed and a pot first!';
    }
});

// Helper function to get random flower color
function getRandomFlowerColor() {
    const colors = ['#FF69B4', '#FFB6C1', '#FFD700', '#98FB98', '#FF6347'];
    return colors[Math.floor(Math.random() * colors.length)];
}
