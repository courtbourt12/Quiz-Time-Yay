var begin = document.querySelector(".start");
var firstQuestion = document.querySelector("#one");
var secondQuestion = document.querySelector("#two");
var thirdQuestion = document.querySelector("#three");
var fourthQuestion = document.querySelector("#four");
var fifthQuestion = document.querySelector("#five");
var sixthQuestion = document.querySelector("#six");
var homePage = document.querySelector("header");
var quiz = document.querySelector(".theQuiz");

quiz.style.display="none";

var toQuestion1 = function () {
    homePage.style.display = "none";
    firstQuestion.style.display = "block";

}

begin.addEventListener("click", toQuestion1);