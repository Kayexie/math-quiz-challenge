var startQuiz = document.querySelector("#startQuiz");//button
var quizOne = document.querySelector(".quizOne")//quizone
var countDown = document.querySelector("#secondleft")//p of seconds left
var correctAnswer = document.querySelectorAll("#correctAnswer")//right option button
var finalScore = document.querySelector("#score")//final score value
var message = document.querySelectorAll("#message")//show correct or wrong message
var timer = document.querySelector(".timer") //countdown timer
var wrong = $(".inCorrect")//button wrong
var initialsInput = document.getElementById("#initial")//input
var scorelist = $(".scoreli")
var oTime = document.getElementById('#oTime')


// set the count down & game stop


function quizOver () {
firstPage.setAttribute("style", "display: none");
secondPage.setAttribute("style", "display: none");
thirdPage.setAttribute("style", "display: none");
forthPage.setAttribute("style", "display: none");
fifthPage.setAttribute("style", "display: block");
}

function setTimer(event) {
    secondlefts = 60;
    var timeInterval = setInterval(function() {
        secondlefts--;
        countDown.textContent = secondlefts + " seconds left";
        if(secondlefts === 0) {
            clearInterval(timeInterval)
            alert("Time is Up")
            quizOver();
        }
    },700); 

wrong.on("click", function(){
    secondlefts -=10;
    countDown.textContent = secondlefts + " seconds left"
})

}

startQuiz.addEventListener("click", setTimer);

var score = 0;

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


var myScore = $('#score').val();
var initialsInput = $('#initial').val();



// function viewMyscore () {
//     var rank = {
//         myScore: score,
//         initialsInput: initialsInput.value,  
//           };

// localStorage.setItem("rank", JSON.stringify(rank));
// };

// function renderLastscore () {
//     var rankLi = JSON.parse(localStorage.getItem("rank"));
//     scorelist.append( initialsInput + myScore);
// }

// function viewMyscore () {

//     scorelist.append( initialsInput + myScore);
// };


               
startQuiz.addEventListener("click", showSecondPage);
quizOneButton.on("click", showeThirdPage);
quizTwoButton.on("click", showeForthPage);
quizThreeButton.on("click", showeFifthPage);

viewHighScore.on("click", function(event) {
event.preventDefault();
viewMyscore();
});









