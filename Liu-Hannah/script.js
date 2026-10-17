function peppapig() {
    let gradeInput = document.getElementById('grade-input');
    let grade = gradeInput.value;

    if (grade == 6) {
        let answer = 'You are vertically challenged and an idiot noob! Scram!';
        let answerDisplay = document.getElementById('answer-display');
        answerDisplay.innerHTML = answer;
    }
    else if (grade == 7) {
        let answer = 'Peppa: Welcome, 7th grader! You should look around here. Ask some 8th grade JCLers about what it is like if you are unsure. You can do Varsity OR JV Latin League, conventions, and much more. We have a lot of events, such as Ludi de Octobres/Novembres (A fun event where you take 1-3 tests and spend the rest of the day playing), State Latin Convention (Kind of similar to Ludi but longer-over a period of ~3 days), and parties in our very own classrooms! AND, you can run for officer. Being an officer is a great experience. SO, JOIN JCL!! Ask George for more info.';
        let answerDisplay = document.getElementById('answer-display');
        answerDisplay.innerHTML = answer;
    }
    else if (grade == 8) {
        let answer = 'Peppa: Welcome to JCL. Wow, 8th grade JCL is SO fun! You should definitely check things out here. As an 8th grader, you are going to love this. You can run for officer, do Varsity Latin League, and much more. We have a lot of events, such as Ludi de Octobres/Novembres (A fun event where you take 1-3 tests and spend the rest of the day playing), State Latin Convention (Kind of similar to Ludi but longer-over a period of ~3 days), and parties in our very own classrooms! JOIN JCL!! Ask George for more info.';
        let answerDisplay = document.getElementById('answer-display');
        answerDisplay.innerHTML = answer;

    }
    else {
        let answer = 'Peppa: We only help with JCL at middle school! Scram!';
        let answerDisplay = document.getElementById('answer-display');
        answerDisplay.innerHTML = answer;
    }
}
//Peppa: Welcome, young 6th grader! JCL is the best club, and I'm totally not biased. 
function georgepig() {
    let gradeInput = document.getElementById('grade-input');
    let grade = gradeInput.value;
    if (grade == 6 || grade == 7 || grade == 8) {
        let answer = 'Geoge: FAQs- <br> Do I have to be in Latin to be in JCL? <br> NO. We had a loyal JCLer, Ally Horan, who takes Spanish but is incredible at Mythology. Join if you are like her, or if you just want to hang out and learn! <br> <br> Which room is it in? <br> 202 in Main Hall. <br> <br> Which teacher runs it? <br> Ms. Masoni, our wonderful Latin teacher. <br> <br> What is Latin League? <br> Latin League is a fun competition for JCLers of all grades. We work in teams to answer a 100 question test during all of L2, so players can skip the line in Lunch sometimes as to not be late. The questions are divided into multiple Latin/Mythy based categories, and the first rounds are super beginner friendly. <br> <br> I have more questions. Who do I ask? <br> Ms. Masoni! You can email her at lisa.masoni@harker.org, or you can drop by her room (202 in Main Hall). <br> Hope to see you at JCL!';
        let answerDisplay = document.getElementById('answer-display');
        answerDisplay.innerHTML = answer;
    }
    else {
        let answer = 'George: We only help with JCL at middle school! Scram!';
        let answerDisplay = document.getElementById('answer-display');
        answerDisplay.innerHTML = answer;
    }
}
function eviepig() {
    let gradeInput = document.getElementById('grade-input');
    let grade = gradeInput.value;
    if (grade == 6 || grade == 7 || grade == 8) {
        let answer = 'Evie: WAHH! GO AWAY! POOOO! ME RAH RAH RAHH!';
        let answerDisplay = document.getElementById('answer-display');
        answerDisplay.innerHTML = answer;
    }
    else {
        let answer = 'Evie: Didnt my bwother and sista tell you to GO AWAY???';
        let answerDisplay = document.getElementById('answer-display');
        answerDisplay.innerHTML = answer;
    }
}