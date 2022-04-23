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

// Declaring variables to call elements
const startBtn = document.getElementById('start-btn');
const startContainer = document.getElementById('start-container');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answers = document.getElementById('answers');
const option1 = document.querySelector('.option1')
const option2 = document.querySelector('.option2')
const option3 = document.querySelector('.option3')
const option4 = document.querySelector('.option4')
const countdown = document.getElementById('countdown');
const goBack = document.getElementById('back');
const clear = document.getElementById('clear');
let option = document.querySelectorAll('.option');
let index = 0;

// Function to start the quiz
startBtn.onclick = function () {
    startBtn.style.display = "none";
    startContainer.style.display = "none";
    questionContainer.style.visibility = "visible";
    answers.style.visibility = "visible";
    showQuestions(index);
    beginTimer(secondsLeft);
}

// Function to show question and options

let queCount = 0;

function showQuestions(index){
    questionContainer.innerText = quizQuestions[index].question;
    option1.innerText = quizQuestions[index].options[0];
    option2.innerText = quizQuestions[index].options[1];
    option3.innerText = quizQuestions[index].options[2];
    option4.innerText = quizQuestions[index].options[3];

    console.log(quizQuestions[index])

     // const optionList = document.getElementById('answers');

    // while (optionList.firstChild) {
    //     optionList.removeChild(optionList.firstChild);
    //   }

    // for (let i = 0; i < quizQuestions[i].options.length; i++) {
    //     const element = document.createElement('button');
    //     element.textContent = quizQuestions[index].options[i];
    //     element.classList.add("anything");
    //     optionList.appendChild(element);
    //     console.log(element);   
    // }

}

document.addEventListener('click', function(){
   
    if (index < quizQuestions.length) {
        showQuestions(index);
        index++
    } else {
        startBtn.style.display = "visible";
        startContainer.style.display = "visible";
        questionContainer.style.visibility = "none";
        answers.style.visibility = "none";
    }
}); 




// Function to click right answer and display next question
// if (quizQuestions.answer == true) 

// disable buttons after click

function correctAnswer(event){
    console.log('event');
    const selection = document.querySelectorAll('button')
    if (selection.innerText === quizQuestions[index].answer) {
        queCount + 5;
        console.log(queCount)
    } else {
        secondsLeft - 5;
    }
}

function endgame() {
    
}



let quizQuestions = [
    {
        // index of 0
        // question and answers 1
        numb: 1,
        question: "Complete the title of this Salvador Dali Painting: Gala Contemplating the Mediterranean Sea which at Twenty Meters Becomes the Portrait of ____",
        answer: "Abraham Lincoln",
        options: [ 
            "Thomas Edison",
            "Alexander Hamilton",
            "Abraham Lincoln",
            "Sigmund Freud"
        ]
    },
    {
        // index of 1
        // question and answers 2
        numb: 2,
        question: "Caravaggio employed this technique during the Baroque period and made it a dominant stylistic element",
        answer: "Tenebrism",
        options: [ 
            "Tempera painting",
            "Impasto",
            "Tenebrism",
            "Grisaille"
        ]
    },
    {
        // question and answers 3
        numb: 3,
        question: "Between 1900-1905, Henri Matisse was part of a group called the Fauves, otherwise known as",
        answer: "Wild Beasts",
        options: [ 
            "Delicate Brush",
            "Colorful Children",
            "Wild Beasts",
            "Joyful Painters"
        ]
    },
    {
        // question and answers 4
        numb: 4,
        question: "During Frida Kahlo's first solo exhibit, she was not supposed to attend but instead surprised guests by",
        answer: "Arriving on a stretcher before being placed in her bed in the middle of the exhibit",
        options: [ 
            "Propelling from the ceiling into the middle of the room",
            "Dancing into the room surrounded by monkeys",
            "Arriving on a stretcher before being placed in her bed in the middle of the exhibit",
            "Disguising herself as a man"    
        ]
    },
    {
        // question and answers 5
        numb: 5,
        question: "This artist let her husband take credit for being the creator of her Big Eye paintings. She finally proved to be the true artist by live painting in a court battle",
        answer: "Margaret Keane",
        options: [ 
           "Barbara Stearn",
            "Artemesia Gentileschi",
            "Margaret Keane",
            "Georgia O'Keefe"
        ]
    }

    ]
// use dot notation to get values from an object
// console.log(quizQuestion[0].question)
// document.getElemenById("question").textValue = quizQuestions[0].question
// you can change the style of elements with javascript


// Select the timer element by its class
let timerEl = document.querySelector(".timer");

// Define max timer amount or start time at begining
let secondsLeft = 75;

// Create a function that will start the countdown once called and set the interval in a variable so that it could be saved or cleared later
function beginTimer() {
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining";

        if(secondsLeft === 0) {
            clearInterval
            (timerInterval);
            // Need to call a function to enter in your initials to save highscore
        }
    }, 1000);
}


// Function to restart the quiz
goBack.onclick = function () {
    startBtn.style.display = "visible";
    startContainer.style.display = "visible";
    questionContainer.style.visibility = "none";
}
