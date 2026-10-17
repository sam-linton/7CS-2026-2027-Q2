let countdown = null;
let audio = new Audio("https://www.dropbox.com/scl/fi/h1aa3eu1a4pv23y5r2gig/lazychillzone-air-raid-siren-225303.mp3?rlkey=p0ebf68vj9b4ytybca455a0cz&st=2obmki48&raw=1");
audio.loop = true;
let disclaimer = document.getElementById("warning");
disclaimer.textContent = "Make sure to turn up sound!"
function startTimer() {
    clearInterval(countdown); 

    let hr = parseInt(document.getElementById("hr").value) || 0;
    let min = parseInt(document.getElementById("min").value) || 0;
    let sec = parseInt(document.getElementById("sec").value) || 0;
    //the || means if the value is null, make it 0
    let display = document.getElementById("timerDisplay");
    let disclaimer = document.getElementById("warning");


    if (hr === 0 && min === 0 && sec === 0) return; 

    countdown = setInterval(function() {
        if (hr === 0 && min === 0 && sec === 0) {
            clearInterval(countdown);
            display.textContent = "Time's Up!";
            audio.play()
            disclaimer.textContent = "this siren is obviousely fake";
            return;
            //so if there is nothnig in there, it will automatically stop as a safety to prevent negatives
        }
        
        //ok imma explain this thing down below
        if (sec === 0) {
            if (min === 0) {
                hr = hr - 1;       
                min = 59;   
                sec = 59;   
                //so yeah if seconds are zero and minutes are zero but the timer is not up then hour needs to go down
            } else {
                min = min - 1;      
                sec = 59;   
                //e.x. 5:00 min --> 4:59 min
            }
        } else {
            sec = sec - 1;   
            //4:59 --> 4:58       
        }
        //all of dis is just random calculating stuff with the numbrs
        
        let formattedHr = String(hr); 
        let formattedMin = String(min).padStart(2, '0');
        //so with pad, the first number checks if the variable has 2 digits, if not it adds a 0
        //looks better
        let formattedSec = String(sec).padStart(2, '0');


        display.textContent = `${formattedHr}.${formattedMin}.${formattedSec}`;
    }, 1000);
    //more format shenanigans
}

function cancelTimer() {
    clearInterval(countdown);
    document.getElementById("timerDisplay").textContent = "0.00.00";
    audio.pause()
    audio.currentTime = 0;
    disclaimer.textContent = "Make sure to turn up sound!"
    //cancels
}
