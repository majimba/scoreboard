// Initialize score variables
let homeScore = 0;
let guestScore = 0;

// Score history for undo/redo functionality
let scoreHistory = [];
let currentHistoryIndex = -1;

// Get DOM elements
const homeScoreElement = document.getElementById('home-score');
const guestScoreElement = document.getElementById('guest-score');

// Function to save current state to history
function saveToHistory() {
    // Remove any future history if we're not at the end
    scoreHistory = scoreHistory.slice(0, currentHistoryIndex + 1);
    
    // Add current state to history
    scoreHistory.push({
        home: homeScore,
        guest: guestScore
    });
    
    // Limit history to last 20 moves
    if (scoreHistory.length > 20) {
        scoreHistory.shift();
    }
    
    currentHistoryIndex = scoreHistory.length - 1;
}

// Function to add points to a team's score
function addScore(team, points) {
    // Input validation
    if (!team || !points || points < 1 || points > 3) {
        console.error('Invalid input: team must be "home" or "guest", points must be 1, 2, or 3');
        return;
    }
    
    if (team === 'home') {
        homeScore += points;
        homeScoreElement.textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        guestScoreElement.textContent = guestScore;
    } else {
        console.error('Invalid team specified:', team);
        return;
    }
    
    // Save to history after each score change
    saveToHistory();
}

// Function to undo last score change
function undoScore() {
    if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
        const previousState = scoreHistory[currentHistoryIndex];
        homeScore = previousState.home;
        guestScore = previousState.guest;
        homeScoreElement.textContent = homeScore;
        guestScoreElement.textContent = guestScore;
        
        // Visual feedback
        homeScoreElement.style.transform = 'scale(1.05)';
        guestScoreElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            homeScoreElement.style.transform = 'scale(1)';
            guestScoreElement.style.transform = 'scale(1)';
        }, 200);
    }
}

// Function to redo score change
function redoScore() {
    if (currentHistoryIndex < scoreHistory.length - 1) {
        currentHistoryIndex++;
        const nextState = scoreHistory[currentHistoryIndex];
        homeScore = nextState.home;
        guestScore = nextState.guest;
        homeScoreElement.textContent = homeScore;
        guestScoreElement.textContent = guestScore;
        
        // Visual feedback
        homeScoreElement.style.transform = 'scale(1.05)';
        guestScoreElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            homeScoreElement.style.transform = 'scale(1)';
            guestScoreElement.style.transform = 'scale(1)';
        }, 200);
    }
}

// Function to reset both scores to 0
function resetScores() {
    homeScore = 0;
    guestScore = 0;
    homeScoreElement.textContent = homeScore;
    guestScoreElement.textContent = guestScore;
    
    // Clear history when resetting
    scoreHistory = [];
    currentHistoryIndex = -1;
    
    // Add a visual feedback animation
    homeScoreElement.style.transform = 'scale(1.1)';
    guestScoreElement.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        homeScoreElement.style.transform = 'scale(1)';
        guestScoreElement.style.transform = 'scale(1)';
    }, 200);
}

// Initialize scores on page load
document.addEventListener('DOMContentLoaded', function() {
    // Verify DOM elements exist
    if (!homeScoreElement || !guestScoreElement) {
        console.error('Score display elements not found');
        return;
    }
    
    homeScoreElement.textContent = homeScore;
    guestScoreElement.textContent = guestScore;
    
    // Initialize history with starting state
    saveToHistory();
    
    console.log('Basketball Scorecard initialized successfully!');
});
