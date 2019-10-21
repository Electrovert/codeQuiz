// variables

// score variable
var score = 0;
// instructional message
var instructions = "You have 15 seconds for each question, 10 seconds will be removed from your score for each incorrect answer.";
// variable for questions & the current question user is on
var question;
var currentQuestion = 0;
// variables for indication of correct/incorrect answer
var correct = "CORRECT! KEEP IT MOVING!";
var incorrect = "INCORRECT! MINUS 10 POINTS!";
// time related variables, limit making the timer 15 seconds for each question, -10 time/score penalty, timer variables
var timeLimit = 15 * questions.length;
var penalty = 10;
var quizTimer;
var timer = timeLimit;

// question & answer content function, if timer is 0 or questions reach the end of the length end game
function renderPage(question, questionNum) {
  if ((questionNum >= questions.length) || (timer === 0)) {
    endGame();
  };
// question content
  $("#question").text(question.title);
// answer choice content
  question.choices.forEach(function (choice, index) {
    $("#" + index).text(choice);
  });

};

// end game function opens highscore page and clears timer
function endGame() {
  clearInterval(quizTimer);
  timer = Math.max(0, timer);

  window.open("./highscores.html");
  
};

// once page is loaded...
$(document).ready(function () {
// click on start button, hide start button, change message on the page 
    $("#quizStart").click(function () {
    $("#quizStart").hide();
    $("#instructions").text(instructions);
    // timer needs to countdown and display time
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

// Comparing the user's answer against the correct answer
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

    // Question 1
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

  // Question 2
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

 
  // Question 3
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

// Question 4
    $("#4").click(function (event) {
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