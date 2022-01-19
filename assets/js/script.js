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
 * Doesn't have to be about coding
 * may want to make seconds less a less than condition
 * key value pairs
 */

let quizQuestions = [
    {
        // index of 0
        // question and answers 1
        question: "Complete the title of this Salvador Dali Painting: Gala Contemplating the Mediterranean Sea which at Twenty Meters Becomes the Portrait of ____",
        answer1: "Thomas Edison",
        answer2: "Alexander Hamilton",
        correctAns: "Abraham Lincoln",
        answer4: "Sigmund Freud"
    },
    {
        // index of 1
        // question and answers 2
        question: "Caravaggio employed this technique during the Baroque period and made it a dominant stylistic element",
        answer1: "Tempera painting",
        answer2: "Impasto",
        correctAns: "Tenebrism",
        answer4: "Grisaille"
    },
    {
        // question and answers 3
        question: "Between 1900-1905, Henri Matisse was part of a group called the Fauves, otherwise known as",
        answer1: "Delicate Brush",
        answer2: "Colorful Children",
        correctAns: "Wild Beasts",
        answer4: "Joyful Painters"
    },
    {
        // question and answers 4
        question: "During Frida Kahlo's first solo exhibit, she was not supposed to attend but instead surprised guests by",
        answer1: "Propelling from the ceiling into the middle of the room",
        answer2: "Dancing into the room surrounded by monkeys",
        correctAns: "Arriving on a stretcher before being placed in her bed in the middle of the exhibit",
        answer4: "Disguising herself as a man"    
    },
    {
        // question and answers 5
        question: "This artist let her husband take credit for being the creator of her Big Eye paintings. She finally proved to be the true artist by live painting in a court battle",
        answer1: "Barbara Stearn",
        answer2: "Artemesia Gentileschi",
        correctAns: "Margaret Keane",
        answer4: "Georgia O'Keefe"
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
