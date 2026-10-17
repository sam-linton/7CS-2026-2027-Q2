const canvas = document.getElementById("pongCanvas");
const context = canvas.getContext("2d");

const gameSettings = {
  easy: { ballSpeed: 4, aiSpeed: 2 },
  medium: { ballSpeed: 6, aiSpeed: 4 },
  hard: { ballSpeed: 9, aiSpeed: 7 }
};

let currentDifficulty = "easy";
let ballTrail = [];
let rainbowColor = 0;
let keyboardKeys = {};

let countdownNumber = 0;
let isGamePausedForCountdown = false;
let isGameOver = false;
let gameWinnerName = "";

const ball = {
  positionX: 300,
  positionY: 200,
  radius: 10,
  velocityX: 4,
  velocityY: 4
};

const playerPaddle = {
  positionX: 10,
  positionY: 160,
  score: 0
};

const computerPaddle = {
  positionX: 580,
  positionY: 160,
  score: 0
};

window.addEventListener("keydown", function(event) {
  keyboardKeys[event.key] = true;
});

window.addEventListener("keyup", function(event) {
  keyboardKeys[event.key] = false;
});

function setDifficulty(level, buttonElement) {
  currentDifficulty = level;
  
  const allButtons = document.querySelectorAll(".menu button");
  allButtons.forEach(function(button) {
    button.classList.remove("active");
  });
  
  buttonElement.classList.add("active");
  playerPaddle.score = 0;
  computerPaddle.score = 0;
  isGameOver = false;
  gameWinnerName = "";
  resetRound();
}

function resetRound() {
  ball.positionX = 300;
  ball.positionY = 200;
  
  playerPaddle.positionY = 160;
  computerPaddle.positionY = 160;
  
  const activeSpeed = gameSettings[currentDifficulty].ballSpeed;
  
  if (ball.velocityX > 0) {
    ball.velocityX = -activeSpeed;
  } else {
    ball.velocityX = activeSpeed;
  }
  
  if (Math.random() > 0.5) {
    ball.velocityY = activeSpeed - 1;
  } else {
    ball.velocityY = -(activeSpeed - 1);
  }
  
  ballTrail = [];
  startCountdown();
}

function startCountdown() {
  isGamePausedForCountdown = true;
  countdownNumber = 3;
  
  const countdownInterval = setInterval(function() {
    countdownNumber--;
    
    if (countdownNumber <= 0) {
      clearInterval(countdownInterval);
      isGamePausedForCountdown = false;
    }
  }, 1000);
}

function updateGame() {
  if (isGameOver || isGamePausedForCountdown) {
    return;
  }

  if (keyboardKeys["ArrowUp"]) {
    playerPaddle.positionY = Math.max(0, playerPaddle.positionY - 6);
  }
  if (keyboardKeys["ArrowDown"]) {
    playerPaddle.positionY = Math.min(320, playerPaddle.positionY + 6);
  }

  if (ball.velocityX > 0) {
    const aiCenter = computerPaddle.positionY + 40;
    const trackingSpeed = gameSettings[currentDifficulty].aiSpeed;
    
    if (aiCenter < ball.positionY - 15) {
      computerPaddle.positionY += trackingSpeed;
    }
    if (aiCenter > ball.positionY + 15) {
      computerPaddle.positionY -= trackingSpeed;
    }
  }
  computerPaddle.positionY = Math.max(0, Math.min(320, computerPaddle.positionY));

  ballTrail.unshift({ x: ball.positionX, y: ball.positionY });
  if (ballTrail.length > 10) {
    ballTrail.pop();
  }
  
  rainbowColor = (rainbowColor + 2) % 360;
  ball.positionX += ball.velocityX;
  ball.positionY += ball.velocityY;

  if (ball.positionY - ball.radius <= 0 || ball.positionY + ball.radius >= 400) {
    ball.velocityY = -ball.velocityY;
  }

  const paddles = [playerPaddle, computerPaddle];
  paddles.forEach(function(paddle) {
    const hitHorizontal = (ball.positionX + ball.radius >= paddle.positionX) && (ball.positionX - ball.radius <= paddle.positionX + 10);
    const hitVertical = (ball.positionY >= paddle.positionY) && (ball.positionY <= paddle.positionY + 80);
    
    if (hitHorizontal && hitVertical) {
      ball.velocityX = -ball.velocityX * 1.05;
      
      const bounceAngle = (ball.positionY - (paddle.positionY + 40)) / 40;
      const speedMultiplier = gameSettings[currentDifficulty].ballSpeed;
      ball.velocityY = bounceAngle * speedMultiplier;
    }
  });

  if (ball.positionX < 0) {
    computerPaddle.score++;
    if (computerPaddle.score >= 8) {
      isGameOver = true;
      gameWinnerName = "COMPUTER";
    } else {
      resetRound();
    }
  }
  if (ball.positionX > 600) {
    playerPaddle.score++;
    if (playerPaddle.score >= 8) {
      isGameOver = true;
      gameWinnerName = "PLAYER";
    } else {
      resetRound();
    }
  }
}

function drawGame() {
  context.clearRect(0, 0, 600, 400);
  
  context.fillStyle = "rgba(255, 255, 255, 0.15)";
  context.fillRect(299, 0, 2, 400);

  context.fillStyle = "#ffffff";
  context.fillRect(playerPaddle.positionX, playerPaddle.positionY, 10, 80);
  context.fillRect(computerPaddle.positionX, computerPaddle.positionY, 10, 80);

  ballTrail.forEach(function(trailPoint, index) {
    const trailingHue = (rainbowColor - index * 15) % 360;
    const trailingOpacity = 0.6 - index * 0.05;
    
    context.fillStyle = "hsla(" + trailingHue + ", 100%, 50%, " + trailingOpacity + ")";
    context.beginPath();
    context.arc(trailPoint.x, trailPoint.y, ball.radius - index * 0.5, 0, Math.PI * 2);
    context.fill();
  });

  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(ball.positionX, ball.positionY, ball.radius, 0, Math.PI * 2);
  context.fill();
  
  context.font = "30px Arial";
  context.fillText(playerPaddle.score, 150, 50);
  context.fillText(computerPaddle.score, 430, 50);

  if (isGameOver) {
    context.fillStyle = "rgba(0, 0, 0, 0.85)";
    context.fillRect(0, 0, 600, 400);

    context.fillStyle = "#ffffff";
    context.textAlign = "center";
    
    context.font = "bold 50px Arial";
    context.fillText("GAME OVER", 300, 160);
    
    context.font = "24px Arial";
    context.fillText(gameWinnerName + " WINS!", 300, 220);
    
    context.font = "16px Arial";
    context.fillStyle = "#aaaaaa";
    context.fillText("Click a difficulty button to play again", 300, 280);
    
    context.textAlign = "left";
  } else if (isGamePausedForCountdown) {
    context.font = "bold 60px Arial";
    context.fillStyle = "#ffffff";
    context.textAlign = "center";
    context.fillText(countdownNumber, 300, 220);
    context.textAlign = "left";
  }
}

function gameLoop() {
  updateGame();
  drawGame();
  requestAnimationFrame(gameLoop);
}

gameLoop();
