const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let playerX = canvas.width / 2;
let playerY = canvas.height / 2;
const playerSize = 20;
const playerSpeed = 5;
const playerColor = 'blue';

// Key press state
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

// Event listeners for key presses
document.addEventListener('keydown', (event) => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = false;
    }
});

// Update game state
function update() {
    if (keys.ArrowUp && playerY > 0) {
        playerY -= playerSpeed;
    }
    if (keys.ArrowDown && playerY < canvas.height - playerSize) {
        playerY += playerSpeed;
    }
    if (keys.ArrowLeft && playerX > 0) {
        playerX -= playerSpeed;
    }
    if (keys.ArrowRight && playerX < canvas.width - playerSize) {
        playerX += playerSpeed;
    }
}

// Draw game elements
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the player
    ctx.fillStyle = playerColor;
    ctx.fillRect(playerX, playerY, playerSize, playerSize);
}

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
