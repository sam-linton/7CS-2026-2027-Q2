const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const message = document.getElementById("message");

let coins = Number(localStorage.getItem("coins")) || 0;
let collection = JSON.parse(
    localStorage.getItem("collection") || "[]"
);

let jumping = false;
let playing = true;
let cactusX = 600;
let cactusCount = 1;
let cactusGap = 15;
let hasJumped = false;

const blooks = [
    { name: "Beagle", emoji: "🐶", rarity: "Common", chance: 50 },
    { name: "Poodle", emoji: "🐩", rarity: "Rare", chance: 25 },
    { name: "Golden Retriever", emoji: "🐕", rarity: "Epic", chance: 14 },
    { name: "Labrador", emoji: "🐕‍🦺", rarity: "Common", chance: 8 },
    { name: "Siberian Husky", emoji: "🐺", rarity: "Legendary", chance: 3 }
];

// Update coins and collection
function updateScreen() {
    document.getElementById("coins").textContent = coins;
    document.getElementById("total").textContent = collection.length;

    localStorage.setItem("coins", coins);
    localStorage.setItem("collection", JSON.stringify(collection));

    showCollection();
}

// Show collected Blooks
function showCollection() {
    const area = document.getElementById("collection");
    area.innerHTML = "";

    if (collection.length === 0) {
        area.innerHTML = "<p>You haven't collected any Blooks yet!</p>";
        return;
    }

    collection.forEach(function(blook) {
        const card = document.createElement("div");
        card.className = "blook " + blook.rarity;

        card.innerHTML = `
            <div class="blook-emoji">${blook.emoji}</div>
            <p><b>${blook.name}</b></p>
            <p>${blook.rarity}</p>
        `;

        area.appendChild(card);
    });
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

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault();
        jump();
    }
});

// Dino game
setInterval(function() {
    if (!playing) return;

    // Move the cactus group
    cactusX -= 8;

    // Check whether the entire group has passed
    if (cactusX < -40 - (cactusCount - 1) * cactusGap) {
        if (hasJumped) {
            coins++;
            updateScreen();
        }

        hasJumped = false;

        // Randomly choose 1, 2, or 3 cactuses
        cactusCount = Math.floor(Math.random() * 3) + 1;
        cactusX = 600;
    }

    // Display the cactus group
    cactus.style.left = cactusX + "px";
    cactus.textContent = Array(cactusCount).fill("🌵").join(" ");

    // Get the dino's position
    const dinoBottom = parseFloat(
        getComputedStyle(dino).bottom
    );

    // Check collision with every cactus
    const cactusWidth = 30;
    const cactusSpacing = cactusGap;
    const dinoLeft = 50;
    const dinoRight = 85;

    for (let i = 0; i < cactusCount; i++) {
        const currentCactusX = cactusX + i * cactusSpacing;

        if (
            currentCactusX < dinoRight &&
            currentCactusX + cactusWidth > dinoLeft &&
            dinoBottom < 30
        ) {
            playing = false;
            message.textContent = "Game Over! Click RESTART.";
            break;
        }
    }
}, 30);

// Restart without losing coins
function restart() {
    playing = true;
    jumping = false;
    hasJumped = false;
    cactusX = 600;
    cactusCount = 1;

    dino.classList.remove("jump");
    dino.style.bottom = "0px";
    cactus.style.left = "600px";
    cactus.textContent = "🌵";

    message.textContent = "";
}

// Buy a pack for 10 coins
function buyPack() {
    const result = document.getElementById("result");

    if (coins < 10) {
        result.textContent = "Not enough coins! Play to earn more.";
        return;
    }

    coins -= 10;

    // Pick a random Blook
    let number = Math.random() * 100;
    let chosen;

    for (let blook of blooks) {
        number -= blook.chance;

        if (number < 0) {
            chosen = blook;
            break;
        }
    }

    collection.push(chosen);

    const duplicates = collection.filter(function(blook) {
        return blook.name === chosen.name;
    }).length;

    result.textContent =
        "You got " + chosen.emoji + " " + chosen.name +
        "! Rarity: " + chosen.rarity +
        ". You own " + duplicates + " of this character.";

    updateScreen();
}

// Reset the Blook collection
function resetBlooks() {
    const confirmReset = confirm(
        "Warning! This will delete all your Blooks!"
    );

    if (!confirmReset) return;

    collection = [];
    localStorage.removeItem("collection");

    document.getElementById("result").textContent =
        "Your Blooks have been reset! Your coins are safe.";

    updateScreen();
}

// Load saved data
updateScreen(); 