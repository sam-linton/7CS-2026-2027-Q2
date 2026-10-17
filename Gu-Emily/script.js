let count = 0;

function clickMonies() {
    console.log('click')
    count = count + 1;

    let countDisplay = document.getElementById("count-display");
    countDisplay.innerHTML = count;

    if (count == 10) {
    console.log("pass");
    count = count + 1;
    alert("Level Up (+2)");
    }

    if (count >= 10) {
    console.log("pass");
    count = count + 1;
    }

    if (count == 50) {
    console.log("pass");
    alert("Level Up (+4)");
    }

    if (count >= 50) {
    console.log("pass");w 
    count = count + 2;
    }

    if (count == 100) {
    console.log("pass");
    alert("Level Up (+4)");
    }

    if (count >= 100) {
    console.log("pass");
    count = count + 2;
    }

}

function resetPressed() {
    alert("Resetting!");
    count = 0;
    let countDisplay = document.getElementById("count-display");
    countDisplay.innerHTML = count;
}
