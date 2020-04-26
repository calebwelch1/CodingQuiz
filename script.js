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
// THEN I can save my initials and score


//                                                                  To Do
//I. Start button to initialize
//II. Timer
//III. Questions/Buttons
//IV. Answer correct or false
//V. Score
//VI. Game Over
//VII. ScoreBoard - localStorage
// 

var startBtn = $("#startButton")

// setInterval(function () {
//     var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);//conversion miliseconds on seconds
//     if (seconds < 10) seconds = "0" + seconds;
// }, milliseconds)
var startTimer = 5;
var time = startTimer * 60;
var countDownEl = document.querySelector("#timer")

function countdown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    // template literal only works with a ` backtick! not single quote
    // template literal syntax ${updating Var or Func}
    countDownEl.innerHTML = `${minutes}:${seconds}`
    time--;
    if (minutes === 0 && seconds === 0) {
        countDownEl.innerHTML = "Game Over!"
    };
};
//setInterval calls a function every x milliseconds (function, milliseconds)
setInterval(countdown, 1000);

// initialize buttons

var startButton = $("#startButton");
var nextButton = $("#nextButton");
var answer1 = $("#answer1");
var answer2 = $("#answer2");
var answer3 = $("#answer3");
var answer4 = $("#answer4");
var questionContainer = $(".questions");
var answerButtons = $(".answer-btn");
var questionEl = $("#question")
var questionIndex = 0;

nextButton.addClass("hide")
answerButtons.addClass("hide")
startButton.on("click", game)

function game() {
    // alert("started!")
    startButton.addClass("hide");
    nextButton.removeClass("hide");
    answerButtons.removeClass("hide");
    nextQuestions()
};
function nextQuestions() {
    chooseQuestion(questions[questionIndex]);

};
function chooseQuestion(question) {
    questionEl.innerText = questions.question
};
function answer() {

};

var questions = [
    {
        question: "what is 1",
        answers: [
            { text: '4', correct: false },
            { text: '1', correct: true }
        ]
    }
]
// window.onload = function () {
//     if (window.jQuery) {
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }