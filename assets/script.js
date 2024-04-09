// Global variables
var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var secondsLeft = 10;
var saveScoreBtn = document.getElementById("random");
var initialsInput = document.getElementById("initials");


// Global quiz array: This should contain an array of objects which contain the question and the choices (choices in an array)
// Global iterator variable: This will just be a number that changes when you display next question

// Functions: Timer Function, Quiz Logic (Display Questions and Choices), Event Listener (When you click on a choice, quiz functionality), Start Quiz Event Listener, End Quiz function, Save Score Function (Event listener, local storage)

var quizArray = [
  {
    question: "Is an array 0 index?",
    choices: ["yes","no"],
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Jupiter", "Mars", "Venus", "Saturn"],
    correctAnswer: 1
  }
];

var currentQuestionIndex = 0;

// Display Quiz Function
function displayQuiz() {
    var currentQuestion = quizArray[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    var choices = document.getElementById("choices");
    choices.innerHTML = "";
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = document.createElement("button");
        choice.textContent = currentQuestion.choices[i];
        choice.setAttribute("data-index", i);
        choice.addEventListener("click", function(event) {
            var userChoice = parseInt(event.target.getAttribute("data-index"));
            if (userChoice === currentQuestion.correctAnswer) {
                // Correct answer logic
                console.log("Correct!");
            } else {
                // Incorrect answer logic
                console.log("Incorrect!");
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < quizArray.length) {
                displayQuiz();
            } else {
                endQuiz();
            }
        });
        choices.appendChild(choice);
    }
}

// Start Quiz Event Listener
startBtn.addEventListener("click", function() {
    setTime(); // Add this line to call the setTime function
    displayQuiz();
});

// End Quiz Function
function endQuiz() {
    console.log('Quiz Ended');
    // Display the form for users to save initials and score
    document.getElementById("quizSection").style.display = "none";
    document.getElementById("save-score").style.display = "block";
}

// Save Score Function
saveScoreBtn.addEventListener("click", function() {
    console.log(secondsLeft + " " + initialsInput.value);
    // You can implement local storage logic here
});
// Set Time Function
function setTime()
{
    var timer = setInterval(function() {
        if (secondsLeft > 0) {
            secondsLeft--;
            timerEl.textContent = "Time: " + secondsLeft;
        }
        if (secondsLeft <= 0 || currentQuestionIndex >= quizArray.length)
        {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}