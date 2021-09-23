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
var startButton = document.getElementById("start");
var lastPage = document.querySelector("Results");


// Variables for HTML placeholders.

var amIRight = document.getElementById("RightorWrong");
var timer = document.getElementById("countdown");