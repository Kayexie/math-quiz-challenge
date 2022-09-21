var startQuiz = document.querySelector("#startQuiz");//button
var quizOne = document.querySelector(".quizOne")//quizone
var countDown = document.querySelector("#secondleft")//p of seconds left
var correctAnswer = document.querySelectorAll("#correctAnswer")//right option button
var finalScore = document.querySelector("#score")//final score value
var message = document.querySelectorAll("#message")//show correct or wrong message
var timer = document.querySelector(".timer") //countdown timer

console.log(finalScore)
console.log(timer)



var score = [];


// set the count down;
secondlefts = 90;

console.log(typeof secondlefts)


function setTimer() {
    var timeInterval = setInterval(function() {
        secondlefts--;
        countDown.textContent = secondlefts + " seconds left";
        if(secondlefts === 0) {
            clearInterval(timeInterval)
        }
    },1000)
};

startQuiz.addEventListener("click", setTimer);

// // if click the button, the button color would change;
// document.body.addEventListener("click", function(event) {
//         var element = event.target;
//     if (element.matches("button") === true) {
//         element.setAttribute("style", "background-color: pink")
//     }
// });


//if click the correct button, would add 10 to score array if wrong would minus 10s

function checkAnswer (event) {
    var element = event.target; 
      if(element.matches("#correctAnswer") === true) {
         score.push('9');
         finalScore.textContent = score
      } else {
        var newseconds = secondlefts - 10
        countDown.textContent = (secondlefts - 10) + " seconds left"
        //?? how to make the secondsleft stay -10

      }};

document.body.addEventListener("click", checkAnswer)

//if click the button, the page would change;

var firstPage = document.querySelector(".firstPage")//1
var secondPage = document.querySelector(".quizOne")//2
var thirdPage = document.querySelector(".quizTwo")//3
var forthPage = document.querySelector(".quizThree")//4
var fifthPage = document.querySelector(".fifthPage")//5 alldone
var SixthPage = document.querySelector(".SixthPage")//6 highscore

var quizOneButton = $(".quizOneButton");
var quizTwoButton = $(".quizTwoButton");
var quizThreeButton = $(".quizThreeButton");
var viewHighScore = $(".viewHighScore");
var starAgain = $(".starAgain");

console.log(firstPage)
console.log(quizThreeButton)

firstPage.setAttribute("style", "display: block");
secondPage.setAttribute("style", "display: none");
thirdPage.setAttribute("style", "display: none");
forthPage.setAttribute("style", "display: none");
fifthPage.setAttribute("style", "display: none");
SixthPage.setAttribute("style", "display: none");

function showSecondPage (event) {
   var element = event.target;
        if (element.matches("button") === true) {
            firstPage.setAttribute("style", "display: none");
            secondPage.setAttribute("style", "display: block");
        }
    }

function showeThirdPage (event) {
        var element = event.target;
             if (element.matches("button") === true) {
                 secondPage.setAttribute("style", "display: none");
                 thirdPage.setAttribute("style", "display: block");
             }
         }

function showeForthPage (event) {
            var element = event.target;
                 if (element.matches("button") === true) {
                     thirdPage.setAttribute("style", "display: none");
                     forthPage.setAttribute("style", "display: block");
                 }
             }


function showeFifthPage (event) {
            var element = event.target;
                     if (element.matches("button") === true) {
                         forthPage.setAttribute("style", "display: none");
                         fifthPage.setAttribute("style", "display: block");
                     }
                 }
                 
function showeSixthPage (event) {
            var element = event.target;
                    if (element.matches("button") === true) {
                        fifthPage.setAttribute("style", "display: none");
                        SixthPage.setAttribute("style", "display: block");
                             }
                         }
                     
startQuiz.addEventListener("click", showSecondPage);
quizOneButton.on("click", showeThirdPage);
quizTwoButton.on("click", showeForthPage);
quizThreeButton.on("click", showeFifthPage);
viewHighScore.on("click", showeSixthPage);










