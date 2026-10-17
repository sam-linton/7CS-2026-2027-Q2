
    function changeStory(choice) {
        const storyText = document.getElementById("story-text");
        const btnContainer = document.getElementById("btn-container");
        const imgContainer = document.getElementById("img-container/image")[0];
   
        if (choice === 'scary_path') {
            storyText.innerText = "You walk down the path and encounter a dragon..."
            btnContainer.innerHTML = `<button onclick="changeStory('fight')">Pick up sword and fight</button><button onclick="changeStory('hide')">You find a rock and hide beneath it</button>`;
            imgContainer.src = "Dragon.jpeg"
        } else if (choice === 'fight') {
            storyText.innerText = "You are in the fight zone..."
            btnContainer.innerHTML =  `<button onclick="changeStory('reset')">You died reset`
        } if (choice === 'reset') {
           storyText.innerText = "You wake up at the edge of a spooky forest... You see two things, a dark scary path and a spooky haunted cabin.";
           btnContainer.innerHTML = `<button onclick="changeStory('scary_path')">Walk down the scary path`;
        } if (choice === 'hide') {
           storyText.innerText = "You have waited really long and now the dragon is tired and starts to sleep";
           btnContainer.innerHTML = `<button onclick="changeStory('gold')">Steal the gold guarded by the dragon</button><button onclick="changeStory('victory')">Kill the dragon</button>`;
        } if (choice === 'victory') {
            storyText.innerText = "YOU WONNN!!!!! you have impressed your village with 1 Million gold coins";
           btnContainer.innerHTML = `<button onclick="changeStory('trophy')">Get trophy`;
        } else if (choice === 'gold') {
            storyText.innerText = "The dragon heard you going to steal his gold and is awakened"
            btnContainer.innerHTML = `<button onclick= "changeStory('reset')">You died reset`;
        } if (choice === 'trophy') {
            storyText.innerText = "Congrats i guess"
            btnContainer.innerHTML = `<button onclick= "changeStory('reset')">congrats! reset`;
        }
}