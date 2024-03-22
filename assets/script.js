// Global variables 
var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var secondsLeft = 10;

var saveScoreBtn = document.getElementById("random");
var initialsInput = document.getElementById("initials");

// Global quiz array: This should contain an array of objects which contain the question and the choices (choices in an array)
// Global iterator variable: This will just be a number that changes when you display next question

// Functions: Timer Function, Quiz Logic (Display Questions and Choices), Event Listener (When you click on a choice, quiz functionality), Start Quiz Event Listener, End Quiz function, Save Score Function (Event listener, local storage)

// 1: Create an html button to the start, when this button is clicked on, it should start the timer and display the quiz (Event Listener)

// 2: Adding that event listener to your choices, then we can move on to the logic to check the choice, move on to the next question, determine if all questions have been answered

// 3: End Quiz function, when the timer reaches 0 or all of the questions have been answered, display a form where the user can save their initials and score using local storage

var quizArray = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Jupiter", "Mars", "Venus", "Saturn"],
    correctAnswer: 1
  }];
// Code Snippet taken from activity 9
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      endQuiz();
    }

  }, 1000);
};

// Create a display quiz function (Create and Append, Loop)

function endQuiz() {
    console.log('Quiz Ended');
    // Display the form for users to save initials and score 
};

startBtn.addEventListener("click", function() {
    // Call timer function and quiz display function
    setTime();
    // Call your display quiz function
});

saveScoreBtn.addEventListener("click", function() {
    console.log(secondsLeft + " " + initialsInput.value);
})