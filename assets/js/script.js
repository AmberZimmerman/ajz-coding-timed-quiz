// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// An alert to tell you when a question was right
// An alert to tell you when a question was wrong
// When timer runs out a place to enter your initials
// Submit button for initials
// Highscore page with initials and score
// Button to go back
// Button to clear score
// key value pairs

// Needed global variables
// Score - Number
// Time - Number
// Timer - Function
// High Scores - Array
// Questions - Array
// Start Button - HTML Element
// Question Tracker

// Functions
// Start Game
// End Game
// Reset Game
// Start Timer
// Stop Timer
// Subract from Timer for Wrong Answers
// Render Questions w/ Choices
// Check for Correct Answer
// Advance to next Question
// Update Score
// Update High Score

// On Click Events
// Start Button
// Choice Buttons
// Reset Button
// View High Scores

let quizQuestions = [
  {
    // index of 0
    // question and answers 1
    numb: 1,
    question:
      "Complete the title of this Salvador Dali Painting: Gala Contemplating the Mediterranean Sea which at Twenty Meters Becomes the Portrait of ____",
    answer: "Abraham Lincoln",
    options: [
      "Thomas Edison",
      "Alexander Hamilton",
      "Abraham Lincoln",
      "Sigmund Freud",
    ],
  },
  {
    // index of 1
    // question and answers 2
    numb: 2,
    question:
      "Caravaggio employed this technique during the Baroque period and made it a dominant stylistic element",
    answer: "Tenebrism",
    options: ["Tempera painting", "Impasto", "Tenebrism", "Grisaille"],
  },
  {
    // question and answers 3
    numb: 3,
    question:
      "Between 1900-1905, Henri Matisse was part of a group called the Fauves, otherwise known as",
    answer: "Wild Beasts",
    options: [
      "Delicate Brush",
      "Colorful Children",
      "Wild Beasts",
      "Joyful Painters",
    ],
  },
  {
    // question and answers 4
    numb: 4,
    question:
      "During Frida Kahlo's first solo exhibit, she was not supposed to attend but instead surprised guests by",
    answer:
      "Arriving on a stretcher before being placed in her bed in the middle of the exhibit",
    options: [
      "Propelling from the ceiling into the middle of the room",
      "Dancing into the room surrounded by monkeys",
      "Arriving on a stretcher before being placed in her bed in the middle of the exhibit",
      "Disguising herself as a man",
    ],
  },
  {
    // question and answers 5
    numb: 5,
    question:
      "This artist let her husband take credit for being the creator of her Big Eye paintings. She finally proved to be the true artist by live painting in a court battle",
    answer: "Margaret Keane",
    options: [
      "Barbara Stearn",
      "Artemesia Gentileschi",
      "Margaret Keane",
      "Georgia O'Keefe",
    ],
  },
];

let questionNumber = 0;
let score = 0;
let secondsLeft = 75;
let highScores = [];
let timerInterval;

// Declaring variables that select html elements
const startBtn = document.getElementById("start-btn");

const startContainer = document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");

const answers = document.getElementById("answers");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");

const timer = document.querySelector(".timer");
const countdown = document.getElementById("countdown");
const goBack = document.getElementById("back");
const clear = document.getElementById("clear");
let option = document.querySelectorAll(".option");
const answerBtn = document.querySelector(".answer-btn");

// Function to start the quiz
startBtn.onclick = function () {
  startContainer.style.display = "none";
  questionContainer.style.visibility = "visible";
  answers.style.visibility = "visible";
  advanceQuestion();
  // showQuestions();
  beginTimer(secondsLeft);
};

// Function to show question and options
function showQuestions() {
  questionContainer.innerText = quizQuestions[questionNumber].question;

  // for loop that will create a button for each of the options in each index of the array then appends it to the html so that it displays
  for (let i = 0; i < quizQuestions[questionNumber].options.length; i++) {
    let generatedButton = document.createElement("button");
    generatedButton.innerText = quizQuestions[questionNumber].options[i];
    answers.append(generatedButton);

    // gives each element it's own data attribute
    // storing data into a html element for each button so that each button could be refered to specifically later
    // button looks like <button data-option: "Abraham Lincoln"/> or whatever the text is in each one
    generatedButton.setAttribute(
      "data-option",
      quizQuestions[questionNumber].options[i]
    );

    // since this is in the for loop, it now adds an event listener to each button and .this allows us to identify exactly what button is clicked based on its data set assigned on line 165. Which we then get to by saying this.dataset followed by the word that is after the dash.
    generatedButton.addEventListener("click", function clicky() {
      console.log(this);
      let selectedOption = this.dataset.option;
      console.log(selectedOption);

      if (selectedOption === quizQuestions[questionNumber].answer) {
        console.log("you're right");
        this.style.backgroundColor = "green";
        this.style.borderColor = "green";
        score++;
        console.log(score);

        // removes the buttons so that when the new ones are generated the former ones don't remain
        answers.innerHTML = "";

        advanceQuestion();
      } else {
        console.log("you eat a frog eye");
        secondsLeft = secondsLeft - 10;
        // change button to red
        this.style.backgroundColor = "red";
        this.style.borderColor = "red";

        answers.innerHTML = "";

        advanceQuestion();
      }
    });
  }
  console.log(quizQuestions[questionNumber]);
}

function advanceQuestion() {
  if (questionNumber < 4) {
    questionNumber++;
    showQuestions(questionNumber);
  } else {
    endgame();
  }
}

function endgame() {
  console.log("game is over");
  questionContainer.innerText = "Game Over";

  clearInterval(timerInterval);

  timer.style.display = "none";
  const scoreEl = document.createElement("div");
  scoreEl.innerText = `Your Score: ${secondsLeft}`;
  answers.appendChild(scoreEl);
}

// Select the timer element by its class
let timerEl = document.querySelector(".timer");

// Create a function that will start the countdown once called and set the interval in a variable so that it could be saved or cleared later
function beginTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds remaining";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // Need to call a function to enter in your initials to save highscore
      endgame();
    }
  }, 1000);
}

// Function to restart the quiz
goBack.onclick = function () {
  startBtn.style.display = "visible";
  startContainer.style.display = "visible";
  questionContainer.style.visibility = "none";
};
