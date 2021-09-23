# Quiz-Time-Yay
A timed quiz that keeps the score shown on the board. 

## HTML
---
<br>

### Content
---
The HTML consists of the first thing you would see when you open the webpage under the head tag, all of the questions with answers under the main tag, and all of the final page results under a section tag within the main tag. 

* The head tag has the title at the top, a short instructional statement for how the quiz works, and a start button. 

* The all of the questions are broken up into div tags with the answers in an unordered list as follows: 
```
<div>
<div> Question </div>
    <div> 
        <ul>
            <ol><Button> Answers <button></ol>
        </ul>
    </div>
</div>
```
* The final page has the high score, a textbox to input initials, and buttons to either clear the high scores or restart the quiz. 
<br>
<br>

### Elements, Classes, & Id's
---
<strong>First Page: </strong>
<br>

The whole first page is within the header tags to separate it from the rest of the HTML document.  The start button has a class of "start" for javascript use, and the rest of the text has its own classes for CSS styling use.

<br>
<br>
<strong>Questions:</strong>
<br>

Each question has its own element ID to group each question with its answers.  All of the questions are grouped into a questions class and all the answers are grouped into an answers class.  Within the unordered list, each individual question has two classes of answer, a wrong class and a right class.

<br>
<br>
<strong>Final Page</strong>
<br>

The last page is within its own section tags.  The displayed phrases of text are listed within their own div tags for CSS formatting purposes and have their own classes or id's as needed for styling.  The initials entry is within a label paired with text input and has a class of "initials."  The high score list is within its own set of div tags.


## CSS
---

## JavaScript
---
<br>

### Variables and Their Purposes
---
A variable was made for each question and answers group:


* Beginning with the start button, every click event hides one question and shows the next.  Before the start button was clicked, each question variable was set to be hidden to allow only the first page to show.  
<br>

A variable was made for each right answer per question, and one constructed array was made for all three wrong answers per question.  


* For each question, two functions were made.  One function was for right answers and one function was for wrong answers.  A click event was placed on the variable for each correct ansewer to start the right answer function and for the wrong answers to start the wrong answer functions.  
<br>

A variable was made for each button and text placeholder to enable click functions to be put on each button and ".textContent" to be used to input text into HTML.

### The Functions
---
Each new question shown has its own function and includes two nearly identical functions for the right and wrong answers.  The difference between the two functions per question are the time subtraction in the wrong answer function and the different text pop-ups to show whether the answer was right or wrong.
<br>
<br>
The tricky part was replacing the high scores using the local.storage functions.  The final score was set as a variable and logged to the local storage.  Before the next game score was logged, the local storage value was pulled into a variable.  An if-statement was used to compare the current score with the previously logged local storage score and the higher value was displayed on the leader board. 
<br>
<br>
A big issue I came across was being able to store a value for the initials into the local storage.  For some reason, the value was not being pulled from the user input.

The HTML code for the text input was the following: 
```
<label for="initials">Enter your initials here:</label>
<input type="text" id="initials" name="initials"/>
```
The following showed up to the user: <br>
<br>

<label for="initials">Enter your initials here:</label>
            <input type="text" id="initials" name="initials"/>

<br>
For some reason, the textbox would function; however, upon clicking the submit button provided to the users, nothing would log into the local storage or to the console. 




