function enterClick(){
    let money = Number(document.getElementById("inputId").value);
    if (money <= 1000) {
        let answerDisplay = document.getElementById("answer-display");
        answerDisplay.innerHTML = "THAT LITTLE? MORE THAN $1000 YOU POOR PERSON!";
    }

    if (money > 1000) {
        let answerDisplay = document.getElementById("answer-display");
        answerDisplay.innerHTML = "Eh that's enough I guess";
    }
}