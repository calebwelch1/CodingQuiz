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

setInterval(function () {
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);//conversion miliseconds on seconds
    if (seconds < 10) seconds = "0" + seconds;
}, milliseconds)


