var opening = document.querySelector("header");
var closing = document.querySelector(".Results");
var begin = document.querySelector(".start");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var questions = [0,1,2,3,4,5];
const buttonwrong = document.querySelectorAll(".wrong");
const buttonright = document.querySelectorAll(".correct");
var right = document.querySelector("#yup");
var wrong = document.querySelector("#nope");
console.log(questions);

var count=0;

one.style.display = "none";
two.style.display = "none";
three.style.display = "none";
four.style.display = "none";
five.style.display = "none";
six.style.display = "none";
closing.style.display = "none";
right.style.display = "none";
wrong.style.display = "none";

var Question = function () {
    opening.style.display = "none";

    var next = Math.floor(Math.random(questions)*questions.length);
    if (next===questions[0]) {
        one.style.display="block";
    } else if (next===questions[1]) {
        two.style.display="block";
    } else if (next===questions[2]) {
        three.style.display="block";
    } else if (next===questions[3]) {
        four.style.display="block";
    } else if (next===questions[4]) {
        five.style.display="block";
    } else if (next===questions[5]) {
        six.style.display = "block;"
    }
    console.log(next);
    questions.splice(next,1, "used");
    console.log(questions);
    }



var nextQuestionWrong = function () {

    // for (var i=0; i<questions.length; i++) {
    //     var nextUp = Math.floor(Math.random(questions[i])*questions.length);
    // }
    var nextUp = Math.floor(Math.random(questions[6])*questions.length);
    if (nextUp===questions[1]) {
        one.style.display="block";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    } else if (nextUp===questions[2]) {
        one.style.display = "none";
        two.style.display="block";
        three.style.display = "none";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    } else if (nextUp===questions[3]) {
        one.style.display = "none";
        two.style.display = "none";
        three.style.display="block";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    } else if (nextUp===questions[4]) {
        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display="block";
        five.style.display = "none";
        six.style.display = "none";
    } else if (nextUp===questions[5]) {
        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display = "none";
        five.style.display="block";
        six.style.display = "none";
    } else if (nextUp===questions[6]) {
        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "block;"
    } else{
        for (var i=0; i<questions.length; i++) {
            var nextUp = Math.floor(Math.random(questions[i])*questions.length);
        }
    }
    console.log(nextUp);
    questions.splice(nextUp, 1, "used");
    console.log(questions);
    console.log(nextUp); 
    wrong.style.display="block";
    count--;
    console.log(count);
}

var nextQuestionRight = function () {

    var nextUp = Math.floor(Math.random(questions[6])*questions.length);
    if (nextUp===questions[1]) {
        one.style.display="block";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    } else if (nextUp===questions[2]) {
        one.style.display = "none";
        two.style.display="block";
        three.style.display = "none";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    } else if (nextUp===questions[3]) {
        one.style.display = "none";
        two.style.display = "none";
        three.style.display="block";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    } else if (nextUp===questions[4]) {
        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display="block";
        five.style.display = "none";
        six.style.display = "none";
    } else if (nextUp===questions[5]) {
        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display = "none";
        five.style.display="block";
        six.style.display = "none";
    } else if (nextUp===questions[6]) {
        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "block;"
    } else{
        for (var i=0; i<questions.length; i++) {
            var nextUp = Math.floor(Math.random(questions[i])*questions.length);
        }
    }
    console.log(nextUp);
    questions.splice(nextUp, 1, "used");
    console.log(questions);
    console.log(nextUp); 
    right.style.display="block";
    count++;
    console.log(count);
}

begin.addEventListener("click", Question);
buttonwrong.forEach(function () {
    addEventListener("click", nextQuestionWrong);
});
buttonright.forEach(function () {
    addEventListener("click", nextQuestionRight);
});
