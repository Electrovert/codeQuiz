{
    title: "Commonly used data types DO NOT include:";
    choices: ["strings", "booleans", "alerts", "numbers"];
    answer: "alerts";
  };
  {
    title: "The condition in an if / else statement is enclosed within ____.";
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"];
    answer: "parentheses";
  };
  {
    title: "CSS is the language that _____ your HTML";
    choices: ["styles", "reads", "hosts", "alerts"];
    answer: "styles";
  };
  {
    title: "Front-end development describes:";
    choices: ["Saving user's input", "Styling a website's interface", "Managing projects on a team", "None of the above"];
    answer: "Styling a website's interface";
  };
  {
    title: "DOM is an acronym for what?:";
    choices: ["Display original material", "Denote order manipulation", "Discography of Macklemore", "Document object model"];
    answer: "Document object model";
  };
  {
    title: "Javascript makes websites _____";
    choices: ["Hyper Taco Model Lady", "Hyper Tools Marketing Language", "Hypertext Markup Language", "Hyper Technique Model Language"];
    answer: "Hypertext Markup Language";
  };


// variables

// score variable
var score = 0;

var instructions = "You have 15 seconds to answer, 10 seconds will be removed from your score for each incorrect answer.";

// variable for questions & the current question user is on
var question;
var currentQuestion = 0;

// variables for correct/incorrect answer
var correct = "You're correct!";
var incorrect = "Sorry, that is incorrect";

// time related variables

var timeLimit = 15 * questions.length;
var penalty = 10;
var quizTimer;
var timer = timeLimit;

// will stop game if all questions are answered or timer runs out of time
function renderPage(question, questionNum) {
  if ((questionNum >= questions.length) || (timer === 0)) {
    endGame();
  };

  $("#question").text(question.title);

  question.choices.forEach(function (choice, index) {
    $("#" + index).text(choice);
  });

};

function endGame() {
  clearInterval(quizTimer);
  timer = Math.max(0, timer);

  window.open("./highscores.html");
  
};

// new score page
$(document).ready(function () {

    $("#quizStart").click(function () {
    $("#quizStart").hide();
    $("#instructions").text(instructions);

    // timer needed to decrement and display time
    quizTimer = setInterval(function () {
      timer--;
      var minutes = Math.floor(timer / 60);
      var seconds = timer - minutes * 60;
      $("#timer").text("Timer: " + minutes + ":" + seconds);
    }, 1000);

    // creating the answers for the question   
    for (var i = 0; i < questions[0].choices.length; i++) {
      $("#answers").append("<li id='" + i + "'></li>");
    };

    renderPage(questions[currentQuestion], currentQuestion);

    // question compare answer, if correct/incorrect display correct message, if incorrect deduct the time consequence
    $("#0").click(function (event) {
      event.preventDefault();
      if (questions[currentQuestion].answer == 0) {
        $("#instructions").text(correct);
      } 
      else {
        $("#instructions").text(incorrect);
        timer = Math.max(timer - penalty, 0); 
      }; 
      currentQuestion++;
      renderPage(questions[currentQuestion], currentQuestion);
    }); 

    // repeat for 1
    $("#1").click(function (event) {
      event.preventDefault();

      if (questions[currentQuestion].answer == 1) {
        $("#instructions").text(correct);
      } 
      else {
        $("#instructions").text(incorrect);
        timer = Math.max(timer - penalty, 0); 
      };  
      currentQuestion++;
      renderPage(questions[currentQuestion], currentQuestion);
    }); 

  // repeat for 2
    $("#2").click(function (event) {
      event.preventDefault();
      if (questions[currentQuestion].answer == 2) {
        $("#instructions").text(correct);
      } 
      else {
        $("#instructions").text(incorrect);
        timer = Math.max(timer - penalty, 0); 
      };  
      currentQuestion++;
      renderPage(questions[currentQuestion], currentQuestion);
    }); 

 
  // repeat for 3  
    $("#3").click(function (event) {
      event.preventDefault();
      if (questions[currentQuestion].answer == 3) {
        $("#instructions").text(correct);
      }
      else {
        $("#instructions").text(incorrect);
        timer = Math.max(timer - penalty, 0); 
      }; 
      currentQuestion++;
      renderPage(questions[currentQuestion], currentQuestion);

    });


  });


}); 

var counter = 0;
var questIndex = 0;
var seconds
var timerInterval;

function startTimer(){
    clearInterval(timerInterval);
    seconds = 0;
    timerInterval = setInterval(function(){
        console.log(seconds, timerInterval);
        seconds++;
        
            if(questIndex > questions.length){
                clearInterval(timerInterval);
                questionText();
            }
        }
    , 1000);
    
}
function questionText() {
    startTimer();