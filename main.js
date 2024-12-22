const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const scoreDisplay = document.getElementById("score");

let playerX = window.innerWidth / 2;
let enemyX = Math.random() * window.innerWidth;
let enemyY = -50;
let score = 0;
let isGameOver = false;

// Move the player
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && playerX > 0) {
    playerX -= 20;
  } else if (e.key === "ArrowRight" && playerX < window.innerWidth - 50) {
    playerX += 20;
  }
  player.style.left = `${playerX}px`;
});

// Enemy movement
function moveEnemy() {
  if (isGameOver) return;

  enemyY += 10;
  if (enemyY > window.innerHeight) {
    // Reset enemy position and increase score
    enemyY = -50;
    enemyX = Math.random() * (window.innerWidth - 50);
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }

  enemy.style.top = `${enemyY}px`;
  enemy.style.left = `${enemyX}px`;

  // Check for collision
  if (
    enemyY + 50 >= window.innerHeight - 70 &&
    enemyX + 50 >= playerX &&
    enemyX <= playerX + 50
  ) {
    isGameOver = true;
    alert(`Game Over! Your score is ${score}`);
    window.location.reload();
  }

  requestAnimationFrame(moveEnemy);
}

// Initialize game
player.style.left = `${playerX}px`;
enemy.style.left = `${enemyX}px`;
enemy.style.top = `${enemyY}px`;

moveEnemy();
