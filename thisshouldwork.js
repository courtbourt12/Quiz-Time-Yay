// Variables connecting to each HTML question set.

var question1 =document.getElementById("one");
var question2 = document.getElementById("two");
var question3 = document.getElementById("three");
var question4 = document.getElementById("four");
var question5 = document.getElementById("five");
var question6 = document.getElementById("six");

// Variables connecting to each HTML right answer per question.

var correctA1 = document.querySelector(".correct1");
var correctA2 = document.querySelector(".correct2");
var correctA3 = document.querySelector(".correct3");
var correctA4 = document.querySelector(".correct4");
var correctA5 = document.querySelector(".correct5");
var correctA6 = document.querySelector(".correct6");

// Constructing arrays for each HTML wrong answer group per question.

const wrongA1 = document.querySelectorAll(".wrong1");
const wrongA2 = document.querySelectorAll(".wrong2");
const wrongA3 = document.querySelectorAll(".wrong3");
const wrongA4 = document.querySelectorAll(".wrong4");
const wrongA5 = document.querySelectorAll(".wrong5");
const wrongA6 = document.querySelectorAll(".wrong6");

// Variables for the starting elements and the final page.

var firstPage = document.querySelector("header");
var startButton = document.querySelector(".start");
var lastPage = document.querySelector(".Results");
var enterInitials = document.querySelector(".initials").value;
var submitScore = document.querySelector(".submit");
var retake = document.querySelector(".redo");
var clearScores = document.querySelector(".clear");


// Variables for HTML placeholders.

var amIRight1 = document.getElementById("WrongorRight1");
var amIRight2 = document.getElementById("WrongorRight2");
var amIRight3 = document.getElementById("WrongorRight3");
var amIRight4 = document.getElementById("WrongorRight4");
var amIRight5 = document.getElementById("WrongorRight5");
var lastQuestionResult = document.getElementById("finalQuestion");
var clock = document.getElementById("countdown");
var remainingTime = document.getElementById("score");
var score1 = document.querySelector("#topScore");
var lastScore = localStorage.getItem("Score");
var time = 90;

// Hide all HTML but the header.

question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";
question6.style.display = "none";
lastPage.style.display = "none";

// Adding variable for the countdown function.

function runTheClock() {setInterval(function() {
    time--;
    clock.textContent = time + " seconds left";
}, 1000);
};

// Function for clicking start button.

var beginTheQuiz = function (){
    runTheClock();
    firstPage.style.display = "none";
    question1.style.display = "block";
};

var beginTheQuizAgain = function (){
    location.reload();
};

// Displaying question 2 and showing right or wrong answer results.

var question1Right = function () {
    question1.style.display = "none";
    question2.style.display = "block";
    amIRight1.innerHTML = "Right!";
};

var question1Wrong = function () {
    question1.style.display = "none";
    question2.style.display = "block";
    time-=5;
    amIRight1.innerHTML = "Wrong!";
};

// Displaying question 3 and showing right or wrong answer results.

var question2Right = function () {
    question2.style.display = "none";
    question3.style.display = "block";
    amIRight2.innerHTML = "Right!";
};

var question2Wrong = function () {
    question2.style.display = "none";
    question3.style.display = "block";
    time-=10;
    amIRight2.innerHTML = "Wrong!";
};

// Displaying question 4 and showing right or wrong answer results.

var question3Right = function () {
    question3.style.display = "none";
    question4.style.display = "block";
    amIRight3.innerHTML = "Right!";
};

var question3Wrong = function () {
    question3.style.display = "none";
    question4.style.display = "block";
    time-=10;
    amIRight3.innerHTML = "Wrong!";
};

// Displaying question 5 and showing right or wrong answer results.

var question4Right = function () {
    question4.style.display = "none";
    question5.style.display = "block";
    amIRight4.innerHTML = "Right!";
};

var question4Wrong = function () {
    question4.style.display = "none";
    question5.style.display = "block";
    time-=10;
    amIRight4.innerHTML = "Wrong!";
};

// Displaying question 6 and showing right or wrong answer results.

var question5Right = function () {
    question5.style.display = "none";
    question6.style.display = "block";
    amIRight5.innerHTML = "Right!";
};

var question5Wrong = function () {
    question5.style.display = "none";
    question6.style.display = "block";
    time-=10;
    amIRight5.innerHTML = "Wrong!";
};

// Hiding the remaining questions and displaying the final page.

var question6Right = function () {
    question6.style.display = "none";
    lastPage.style.display = "block";
    lastQuestionResult.textContent = "Right!"
    clock.style.display = "none";
    var finalScore = time;
    remainingTime.textContent = finalScore;
   
    // Adding the data to local storage.

    var lastScore = localStorage.getItem("finalScore");
    var lastInitial = localStorage.getItem("enterInitials");
    
    var logData = function () {
        if (lastScore<finalScore) {
            score1.textContent="1. " + enterInitials + " - " + finalScore + "- You beat it this time!";
        } else {
            score1.textContent="1. " + lastInitial + " - " + lastScore + "- You didn't beat it this time :(";
        };
        
        localStorage.setItem("Initials", enterInitials);
    }
    localStorage.setItem("Score", finalScore);
    submitScore.addEventListener("click", logData);
};

var question6Wrong = function () {
    question6.style.display = "none";
    lastPage.style.display = "block";
    lastQuestionResult.textContent = "Wrong!"
    time-=10;
    clock.style.display = "none";
    var finalScore = time;
    remainingTime.textContent =finalScore;
    
    // Adding the data to local storage.

    var lastScore = localStorage.getItem("finalScore");
    var lastInitial = localStorage.getItem("enterInitials");
    
    var logData = function () {
        if (lastScore<finalScore) {
            score1.textContent="1. " + enterInitials + " - " + finalScore + "- You beat it this time!";
        } else {
            score1.textContent="1. " + lastInitial + " - " + lastScore + "- You didn't beat it this time :(";
        };
        localStorage.setItem("Initials",enterInitials);
    }
    localStorage.setItem("Score", finalScore);
    submitScore.addEventListener("click", logData);
};

// Function for reseting the high scores.

var resetScores = function () {
    localStorage.clear("finalScore");
    localStorage.clear("enterInitials");
}



// Adding event listeners to the "wrong answer" buttons.

wrongA1.forEach(wrongA1 => {
    wrongA1.addEventListener("click", question1Wrong);
})
wrongA2.forEach(wrongA2 => {
    wrongA2.addEventListener("click", question2Wrong);
})
wrongA3.forEach(wrongA3 => {
    wrongA3.addEventListener("click", question3Wrong);
})
wrongA4.forEach(wrongA4 => {
    wrongA4.addEventListener("click", question4Wrong);
})
wrongA5.forEach(wrongA5 => {
    wrongA5.addEventListener("click", question5Wrong);
})
wrongA6.forEach(wrongA6 => {
    wrongA6.addEventListener("click", question6Wrong);
})

// Adding event listeners to the "right answer" buttons.

correctA1.addEventListener("click", question1Right);
correctA2.addEventListener("click", question2Right);
correctA3.addEventListener("click", question3Right);
correctA4.addEventListener("click", question4Right);
correctA5.addEventListener("click", question5Right);
correctA6.addEventListener("click", question6Right);

// Adding an event listener to the start button.

startButton.addEventListener("click", beginTheQuiz);
retake.addEventListener("click", beginTheQuizAgain);
clearScores.addEventListener("click", resetScores);
