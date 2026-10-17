let word = "APPLE";
let guessed = [];
let wrong = 0;

function guessLetter() {
    let input = document.getElementById("guess");
    let letter = input.value.toUpperCase();
    input.value = "";

    if (!/^[A-Z]$/.test(letter) || guessed.includes(letter) || wrong >= 6) {
        return;
    }

    guessed.push(letter);

    if (!word.includes(letter)) {
        wrong++;
        document.getElementById("wrong").textContent = wrong;
    }

    let display = [...word].map(l => guessed.includes(l) ? l : "_").join(" ");
    document.getElementById("word").textContent = display;

    if (![...word].some(l => !guessed.includes(l))) {
        document.getElementById("message").textContent = "You win!";
    } else if (wrong === 6) {
        document.getElementById("message").textContent = "You lose! Word: " + word;
    } else {
        document.getElementById("message").textContent = "Keep guessing!";
    }
}