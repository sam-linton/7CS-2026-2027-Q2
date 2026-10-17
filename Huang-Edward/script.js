const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const message = document.getElementById("message");

let coins = Number(localStorage.getItem("coins")) || 0;

let jumping = false;
let playing = true;
let cactusX = 600;
let hasJumped = false;

// Update and save coins
function updateScreen() {
    document.getElementById("coins").textContent = coins;
    localStorage.setItem("coins", coins);
}

// Jump with SPACE
function jump() {
    if (jumping || !playing) return;

    jumping = true;
    hasJumped = true;
    dino.classList.add("jump");
}

dino.addEventListener("animationend", function() {
    dino.classList.remove("jump");
    jumping = false;
});

// Detect SPACE key
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault();
        jump();
    }
});

// Move cactus and check collisions
setInterval(function() {
    if (!playing) return;

    cactusX -= 8;

    if (cactusX < -40) {
        cactusX = 600;

        if (hasJumped) {
            coins++;
            updateScreen();
        }

        hasJumped = false;
    }

    cactus.style.left = cactusX + "px";

    const dinoBottom = parseFloat(
        getComputedStyle(dino).bottom
    );

    if (cactusX < 85 && cactusX > 20 && dinoBottom < 30) {
        playing = false;
        message.textContent = "Game Over! Click RESTART.";
    }
}, 30);

// Restart without losing coins
function restart() {
    playing = true;
    jumping = false;
    hasJumped = false;
    cactusX = 600;

    dino.classList.remove("jump");
    dino.style.bottom = "0px";
    cactus.style.left = "600px";

    message.textContent = "";
}

// Load saved coins
updateScreen();