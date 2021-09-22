var begin = document.querySelector(".start");
var next = document.querySelector(".n");
var nextright = document.querySelector(".correct");
var nextnext = document.querySelector(".nn");
var nextnextnext = document.querySelector(".nnn");
var nextnextnextnext = document.querySelector(".nnnn");
var nextnextnextnextnext = document.querySelector(".nnnnn");
var nextnextnextnextnextnext = document.querySelector(".nnnnnn");
var firstQuestion = document.querySelector("#one");
var secondQuestion = document.querySelector("#two");
var thirdQuestion = document.querySelector("#three");
var fourthQuestion = document.querySelector("#four");
var fifthQuestion = document.querySelector("#five");
var sixthQuestion = document.querySelector("#six");
var homePage = document.querySelector("header");
var quiz = document.querySelector(".theQuiz");
var solutions = document.querySelector(".solution")
var finals = document.querySelector(".Results");
var right = document.querySelector("#yep");
var wrong = document.querySelector("#nope");
var whatsit = document.querySelector("#RightorWrong");

firstQuestion.style.display="none";
secondQuestion.style.display="none";
thirdQuestion.style.display="none";
fourthQuestion.style.display="none";
fifthQuestion.style.display="none";
sixthQuestion.style.display="none";
finals.style.display="none";


var toQuestion1 = function () {
    homePage.style.display = "none";
    firstQuestion.style.display = "block"; 
    right.style.display="none";
    wrong.style.display="block";
}

var toQuestion1Right = function () {
    homePage.style.display = "none";
    firstQuestion.style.display = "block"; 
    right.style.display="block";
    wrong.style.display="none";
}

var toQuestion2 = function () {
    firstQuestion.style.display = "none";
    secondQuestion.style.display = "block";  
}

var toQuestion3 = function () {
    secondQuestion.style.display = "none";
    thirdQuestion.style.display = "block";   
}

var toQuestion4 = function () {
    thirdQuestion.style.display = "none";
    fourthQuestion.style.display = "block"; 
}

var toQuestion5 = function () {
    fourthQuestion.style.display = "none";
    fifthQuestion.style.display = "block";
}

var toQuestion6 = function () {
    fifthQuestion.style.display = "none";
    sixthQuestion.style.display = "block";  
}

var finalResults = function () {
    sixthQuestion.style.display = "none";
    finals.style.display="block";  
}

if (correct===true){
    whatsit.innerHTML = "Correct";
} else if (wrong===true){
    whatsit.innerHTML = "Correct";
}    



begin.addEventListener("click", toQuestion1Right);
next.addEventListener("click", toQuestion2);
nextnext.addEventListener("click", toQuestion3);
nextnextnext.addEventListener("click", toQuestion4);
nextnextnextnext.addEventListener("click", toQuestion5);
nextnextnextnextnext.addEventListener("click", toQuestion6);
nextnextnextnextnextnext.addEventListener("click", finalResults);
