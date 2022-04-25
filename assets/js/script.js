// User Story
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

/**
 * Coding Quiz Challenge start page
 * Start Quiz button
 * Timer that starts counting down
 * At least five questions
 * Four answers for each question, three incorrect, one correct
 * An alert to tell you when a question was right
 * An alert to tell you when a question was wrong
 * Time subtracted when an answer is wrong
 * When timer runs out a place to enter your initials
 * Submit button for initials
 * Highscore page with initials and score
 * Button to go back
 * Button to clear score
 * may want to make seconds less a less than condition
 * key value pairs
 */

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

// Declaring variables to call elements
const startBtn = document.getElementById("start-btn");

const startContainer = document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");

const answers = document.getElementById("answers");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");

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
  showQuestions();
  beginTimer(secondsLeft);
};

// Function to show question and options


function showQuestions() {
  questionContainer.innerText = quizQuestions[questionNumber].question;


for (let i = 0; i < quizQuestions[questionNumber].options.length; i++) {
    console.log("im confused")
    let generatedButton = document.createElement("button");
    generatedButton.innerText = quizQuestions[questionNumber].options[i];
    answers.append(generatedButton)

    // gives each element it's own data attribute
    // storing data in html element butoon to refer to it later
    generatedButton.setAttribute("data-option", quizQuestions[questionNumber].options[i]);

    generatedButton.addEventListener("click", function clicky() {
        console.log(this)
        let selectedOption = this.dataset.option;
        console.log(selectedOption)

        if (selectedOption === quizQuestions[questionNumber].answer) {
            console.log("you're right")
            this.style.backgroundColor = "green";
            this.style.borderColor = "green";
            score++;
            console.log(score)

            answers.innerHTML = '';
            
            if (questionNumber < quizQuestions.length) {
                questionNumber++;
                showQuestions(questionNumber);

            answers.innerHTML = '';
               
        }
        } else {
            console.log("you eat a frog eye")
            secondsLeft = secondsLeft - 5;
            // change button to red
            this.style.backgroundColor = "red";
            this.style.borderColor = "red";
        }
    })
}

  console.log(quizQuestions[questionNumber]);
}


function getRightAnswer() {
  for (let i = 0; i < quizQuestions.length; i++) {
    questionAnswer.push(quizQuestions[i]["answer"]);
  }

  console.log(questionAnswer);
}


// function advanceQuestion() {
//   if (questionNumber < quizQuestions.length) {
//     showQuestions(questionNumber);
//     questionNumber++;
//   }
// }
console.log(answerBtn)


function userAnswer() {
  button.addEventListener("click", () => {
    const selection = document.querySelectorAll("btn");
    alert("hello");
    if (selection.innerText === quizQuestions[questionNumber].answer) {
      queCount + 5;
      console.log(queCount);
    } else {
      secondsLeft - 5;
    }
  });
}

// Function to click right answer and display next question
// if (quizQuestions.answer == true)

// disable buttons after click



function endgame() {
    console.log("game is over");
}


// use dot notation to get values from an object
// console.log(quizQuestion[0].question)
// document.getElemenById("question").textValue = quizQuestions[0].question
// you can change the style of elements with javascript

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
