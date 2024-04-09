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
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language"],
      correctAnswer: 0
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      choices: ["<style>", "<css>", "<script>", "<head>"],
      correctAnswer: 0
    },
    {
      question: "What does CSS stand for?",
      choices: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      correctAnswer: 1
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      choices: ["color", "font-color", "text-color", "font-style"],
      correctAnswer: 0
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      choices: ["boolean", "string", "number", "float"],
      correctAnswer: 3
    },
    {
      question: "Which method is used to stop setInterval() function from executing in JavaScript?",
      choices: ["clearInterval()", "stopInterval()", "endInterval()", "breakInterval()"],
      correctAnswer: 0
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
    var initials = initialsInput.value.trim(); // Get user initials and remove leading/trailing whitespace
    if (initials !== "") {
        var scoreData = {
            initials: initials,
            score: secondsLeft // Assuming secondsLeft represents the score
        };
        // Convert scoreData object to a JSON string and save it in local storage
        localStorage.setItem("scoreData", JSON.stringify(scoreData));
        console.log("Score saved:", scoreData);
        // Optionally, you can redirect the user to a different page or perform other actions here
    } else {
        console.log("Please enter your initials.");
    }
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
// Function to display saved scores
function displaySavedScores() {
    var savedScores = localStorage.getItem("scoreData"); // Retrieve the saved score data from local storage
    if (savedScores) {
        var scoreData = JSON.parse(savedScores); // Parse the JSON string back into an object
        // Display the saved initials and score in the HTML
        var savedScoresContainer = document.getElementById("savedScores");
        savedScoresContainer.innerHTML = "Initials: " + scoreData.initials + ", Score: " + scoreData.score;
    } else {
        console.log("No saved scores found.");
    }
}

// Call the function to display saved scores when the page loads
window.addEventListener("load", displaySavedScores);