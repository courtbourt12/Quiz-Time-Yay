var opening = document.querySelector("header");
var closing = document.querySelector(".Results");
var begin = document.querySelector(".start");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var questions = [1,2,3,4,5,6];
console.log(questions);

one.style.display = "none";
two.style.display = "none";
three.style.display = "none";
four.style.display = "none";
five.style.display = "none";
six.style.display = "none";
closing.style.display = "none";

var Question = function () {
    opening.style.display = "none";

    var next = Math.floor(Math.random(questions)*questions.length);
    if (next===0) {
        one.style.display="block";
    } else if (next===1) {
        two.style.display="block";
    } else if (next===2) {
        three.style.display="block";
    } else if (next===3) {
        four.style.display="block";
    } else if (next===4) {
        five.style.display="block";
    } else if (next===5) {
        six.style.display = "block;"
    }
    console.log(next);
    questions.splice(next,1);
    console.log(questions);
    }

var nextQuestion = function () {
    for (var i=0; i<questions.length; i++) {
        var nextUp = Math.floor(Math.random(questions[i])*questions.length);
    }
    console.log(nextUp); 

    
}

begin.addEventListener("click", Question);