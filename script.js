let tips = [];

// Fetch tips from JSON file
fetch('tips.json')
    .then(response => response.json())
    .then(data => {
        tips = data.tips;
        showRandomTip();
    })
    .catch(error => {
        console.error('Error loading tips:', error);
        document.getElementById('tip-text').textContent = 'Error loading tips. Please try again later.';
    });

// Function to get a random tip
function getRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
}

// Function to display a random tip
function showRandomTip() {
    const tipText = document.getElementById('tip-text');
    
    // Add fade-out effect
    tipText.style.opacity = '0';
    
    setTimeout(() => {
        tipText.textContent = getRandomTip();
        // Add fade-in effect
        tipText.style.opacity = '1';
    }, 300);
}

// Add click event listener to the button
document.getElementById('new-tip-btn').addEventListener('click', showRandomTip);

// Add transition effect to tip text
document.getElementById('tip-text').style.transition = 'opacity 0.3s ease';