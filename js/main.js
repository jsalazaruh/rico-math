"use strict";
var sessTime = localStorage.getItem("sessionTime");

var QUIZ_AVAILABLE_SECONDS = sessTime;
var quizStartTime = QUIZ_AVAILABLE_SECONDS;
var countdownStarted = false;
var countdownTimeoutId = -1;
var numAnswersCorrect = 0;
var numAnswersGiven = 0;

function resetState() {
  numAnswersGiven = numAnswersCorrect = 0;
  countdownTimeoutId = -1;
  countdownStarted = false;
}

$('#start-quiz').click(function() {
  resetState();
  showStartLayout();

});

function showStartLayout() {
  $('#questionbox').show();
  $('#time-box').show();

  $('#start-quiz').hide();
  $('#results').hide();

  $('#question-answer').focus();
}

function showStartLayout() {

  $('#questionbox').show();
  $('#time-box').show();


  $('#start-quiz').hide();
  $('#results').hide();

  $('#question-answer').focus();
}

function updateTime() {
  quizStartTime--;

  if (quizStartTime < 0) {

    clearInterval(countdownTimeoutId);
    countdownTimeoutId = -1;
    quizStartTime = QUIZ_AVAILABLE_SECONDS;

    timeIsOver();

    return;
  }

  var progressPercent = (QUIZ_AVAILABLE_SECONDS - quizStartTime) / QUIZ_AVAILABLE_SECONDS * 100;
  $('#time-left').html(quizStartTime);
  $('#time-left-indicator').animate({'width': progressPercent + '%'}, 300);
}

function showEvaluationLayout() {
  $('#questionbox').hide();
  $('#time-box').hide();

  $('#start-quiz').css({'display': 'inline-block'});
  $('#results').show();

  $('#time-left').text(QUIZ_AVAILABLE_SECONDS);
  $('#time-left-indicator').css({'width': '0%'});

}

$(document).keypress(function(e) {
  if(e.which == 13 && $('#start-quiz').is(':visible')) {
    $('#start-quiz a').click();
  }
});

function timeIsOver() {
  showEvaluationLayout();
  var score = calculateScore();
  setEvaluation(score);

  function calculateScore() {
    var sliderMax = localStorage.getItem("range");

    if (sliderMax > 100) {
      sliderMax = 100;
    }

    return Math.ceil(numAnswersCorrect * (sliderMax / 10));
  }

  function setEvaluation(score) {
    var description = 'You scored <span class="score">' + score + '</span>';
    $('#results .description').html(description);
  }
}

$(function() {
  var $question = $('#question');
  var $answer = $('#question-answer');
  var currentQuestion;
  var factory = new QuestionFactory();

  setFirstQuestion();
  function setFirstQuestion() {
    currentQuestion = factory.nextQuestion();
    $question.text(currentQuestion.getDisplay());
    $answer.val('');
  }

  function setNewQuestion() {
    currentQuestion = factory.nextQuestion();
    $question.text(currentQuestion.getDisplay());
  }


  function evaluateAnswer() {
    if (countdownTimeoutId === -1) {
      countdownTimeoutId = setInterval(updateTime, 1000);
    }

    numAnswersGiven++;

    if (currentQuestion !== undefined && currentQuestion.getAnswer() == $answer.val()) {
      numAnswersCorrect++;
    }
    setNewQuestion();
    $answer.val('');
  }

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function submitInputPressed(e) {
    if(e === undefined || e.which == 13) {
      if ($answer.val().trim() !== '' && isNumber($answer.val())) {
        evaluateAnswer();
      }
      $answer.val('');
    }
  }

  $answer.keyup(function(e) {
     if ($answer.val() == currentQuestion.getAnswer()) {
        submitInputPressed();
      }
  });

});
