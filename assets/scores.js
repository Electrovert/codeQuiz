// score 
var score = 0;
// instructional message
var instructions = "There is 15 seconds for each question. 10 seconds will be removed from your score for each incorrect answer.";
// variable for questions & keeping track of questions.
var question;
var currentQuestion = 0;
// variables for indication of correct/incorrect answer
var correct = "Correct";
var incorrect = "Sorry, that is incorrect";
// time variables,15 seconds for each question. -10 seconds for each incorrect answer
var timeLimit = 15 * questions.length;
var penalty = 10;
var quizTimer;
var timer = timeLimit;

// Question && answer functions
function renderPage(question, questionNum) {
  if ((questionNum >= questions.length) || (timer === 0)) {
    endGame();
  };
// questins
  $("#question").text(question.title);
// answers
  question.choices.forEach(function (choice, index) {
    $("#" + index).text(choice);
  });

};

// endGame function brings you to high scores page
function endGame() {
  clearInterval(quizTimer);
  timer = Math.max(0, timer);

  window.open("./highscores.html");
  
};


$(document).ready(function () {
// click on start button, hide start button
    $("#startQuiz").click(function () {
    $("#startQuiz").hide();
    $("#instructions").text(instructions);
    // timer to countdown and display time left
    quizTimer = setInterval(function () {
      timer--;
      var minutes = Math.floor(timer / 75);
      var seconds = timer - minutes * 75;
      $("#timer").text("Timer: " + minutes + ":" + seconds);
    }, 1000);

    // answers for the questions  
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

  // Question 5
  $("#5").click(function (event) {
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