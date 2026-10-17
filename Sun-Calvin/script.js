let targetY = Math.floor(Math.random() * 18) + 10
let targetX = Math.floor(Math.random() * 60) + 70
let points = 0;
let pointsRef = document.getElementById("score")
let timerRef = document.getElementById("time")
let timeLeft = 20
let targets = document.getElementById("targets")
function addPoints(pointsToAdd) {
    points += pointsToAdd
    console.log(points)
    pointsRef.innerHTML = "<h1> Score: " + points + "</h1>"
    spawnTarget()
}
function removeTime() {
    timeLeft -= 1
    if (timeLeft <= 0) {
        targets.innerHTML = "<h1>                TIME UP! Score was " + points + "</h1>"

    }
    else {
        timerRef.innerHTML = "<h1> Time: " + timeLeft + "</h1>"
    }
}
function startTimer() {
    setInterval(removeTime, 1000)

}
function spawnTarget() {
    targetY = Math.floor(Math.random() * 18) + 8
    targetX = Math.floor(Math.random() * 60) + 8
    targets.innerHTML = "<div id=\"target\" alt=\"Target\" height=\"275\" style=\"top: " + targetY + "rem; left: " + targetX + "rem;\"><img src=\"Target.png\" alt=\"Target\" height=\"275\"></div><div id =\"outer3\" style = \"top: " + (targetY + 0.5) + "rem; left: " + (targetX + 0.438) + "rem;\" onclick=\"addPoints(2)\"></div><div id =\"outer2\" style = \"top: " + (targetY + 2.175) + "rem; left: " + (targetX + 2.125) + "rem;\" onclick=\"addPoints(4)\"></div><div id =\"outer1\" style = \"top: " + (targetY + 3.844) + "rem; left: " + (targetX + 3.813) + "rem;\" onclick=\"addPoints(6)\"></div><div id =\"inner3\" style = \"top: " + (targetY + 5.513) + "rem; left: " + (targetX + 5.5) + "rem;\" onclick=\"addPoints(8)\"></div><div id =\"inner2\" style = \"top: " + (targetY + 7.181) + "rem; left: " + (targetX + 7.125) + "rem;\" onclick=\"addPoints(10)\"></div><div id =\"inner1\" style = \"top: " + (targetY + 7.906) + "rem; left: " + (targetX + 7.875) + "rem;\" onclick=\"addPoints(15)\"></div>"
}
function startGame() {
    console.log("started game")
    spawnTarget()
    console.log("spawned first target")
    startTimer()
    console.log("started timer")
}
function clickedOnTarget() {
    targets.innerHTML = "<h1 id = \"addedPoints\" style=\"top: " + (targetY + 7) + "rem; left: " + (targetX + 6.5) + "rem; \">+ 200</h1>";
    setTimeout(spawnTarget, 1000);
}

