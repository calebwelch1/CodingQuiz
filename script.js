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
var startTimer = 3;
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
let questionIndex = undefined;
let shuffle = undefined;

nextButton.addClass("hide")
answerButtons.addClass("hide")
startButton.on("click", game)
$("#questionContainer").addClass("hide")

function game() {
    // alert("started!")
    startButton.addClass("hide");
    nextButton.removeClass("hide");
    answerButtons.removeClass("hide");
    $("#timer").removeClass("hide");
    questionEl.removeClass("hide")
    $("#questionContainer").removeClass("hide")

    shuffle = questions.sort(() => Math.random() - .5)
    questionIndex = 0;

    nextQuestions()
};
function nextQuestions() {
    clear()
    chooseQuestion(shuffle[questionIndex]);

};
function clear() {
    nextButton.addClass("hide")
    while (document.querySelector(".answerButtonsEl").firstChild) {
        document.querySelector(".answerButtonsEl").removeChild
            (document.querySelector(".answerButtonsEl").firstChild)
    }
}
function chooseQuestion(thisquestion) {
    // for some reason $("#please") won't work. Spent an hour figuring out to just use querySelector
    document.querySelector("#please").innerHTML = thisquestion.question
    thisquestion.answers.forEach(answer => {
        let button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", correctAnswer)
        document.querySelector(".answerButtonsEl").appendChild(button)
    })
};

function correctAnswer(ans) {
    let selectedButton = ans.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    // convert to Array so we can use a for each loop on it. 
    Array.from(document.querySelector(".answerButtonsEl").children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.removeClass("hide")
};
function setStatusClass(ans, correct) {
    clearStatus(ans)
    if (correct) {
        ans.addClass("correct")
    } else {
        ans.addClass("wrong")
    }
}
function clearStatus(ans) {
    ans.removeClass("correct")
    ans.removeClass("wrong")
}
var questions = [
    {
        question: "what is 1?",
        answers: [
            { text: '4', correct: false },
            { text: '1', correct: true }
        ]
    }
];

// proud i got this far but honestly I have no idea how to proceed.
// trying to retrieve correct or false from the clicked answer but not sure how to make it work or implement this.
// i'm very confused

// window.onload = function () {
//     if (window.jQuery) {
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }