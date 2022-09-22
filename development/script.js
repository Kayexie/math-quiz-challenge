var startQuiz = document.querySelector("#startQuiz");//button
var quizOne = document.querySelector(".quizOne")//quizone
var countDown = document.querySelector("#secondleft")//p of seconds left
var correctAnswer = document.querySelectorAll("#correctAnswer")//right option button
var finalScore = document.querySelector("#score")//final score value
var message = document.querySelectorAll("#message")//show correct or wrong message
var timer = document.querySelector(".timer") //countdown timer
var highScoreList = document.querySelector(".highScoreList")
var wrong = $(".inCorrect")//button wrong
var initialsInput = document.getElementById("#initial")//input


// set the count down & game stop


console.log(typeof secondlefts)

function timeOut () {
firstPage.setAttribute("style", "display: none");
secondPage.setAttribute("style", "display: none");
thirdPage.setAttribute("style", "display: none");
forthPage.setAttribute("style", "display: none");
fifthPage.setAttribute("style", "display: block");
SixthPage.setAttribute("style", "display: none");
noTime.textContent = "Time Out!"
}

function setTimer(event) {
    secondlefts = 30;
    var timeInterval = setInterval(function() {
        secondlefts--;
        countDown.textContent = secondlefts + " seconds left";
        if(secondlefts === 0) {
            clearInterval(timeInterval)
            alert("Time is Up")
        }
    },1000); 

wrong.on("click", function(){
    secondlefts -=10;
    countDown.textContent = secondlefts + " seconds left"
})

}

startQuiz.addEventListener("click", setTimer);


score = 0;

console.log(score)
function checkAnswer (event) {
        var element = event.target; 
          if(element.matches("#correctAnswer") === true) {
            score = score +10;
             finalScore.textContent = score;}   
        };        
     
document.body.addEventListener("click", checkAnswer)


var highscore = $("#score").val();
var initialsInput = $("#initial").val();

console.log(highscore)
console.log(initialsInput)

// create function to handle view high score button;

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
                 

var rank = {
    finalScore: finalScore.value,
    initialsInput: initialsInput.value,  
    };

function showeSixthPage (event) {
    var element = event.target;
   if (element.matches("button") === true) {
   fifthPage.setAttribute("style", "display: none");
   SixthPage.setAttribute("style", "display: block");
        }                
   localStorage.setItem("rank", JSON.stringify(rank));
   showRank()
    };

function showRank() {
    var rankLi = JSON.parse(localStorage.getItem("rank"));
    highScoreList.innerHTML = rankLi;
    
}
                     
startQuiz.addEventListener("click", showSecondPage);
quizOneButton.on("click", showeThirdPage);
quizTwoButton.on("click", showeForthPage);
quizThreeButton.on("click", showeFifthPage);
viewHighScore.on("click", showeSixthPage);

console.log(quizOneButton)









