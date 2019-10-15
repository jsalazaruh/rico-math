var firstOperation = localStorage.getItem("operation");
var upRange = localStorage.getItem("range");
var questiNum = localStorage.getItem("questionNumber");
var sessTime = localStorage.getItem("sessionTime");

var max = parseInt(upRange);
var min = 0;
var questRight = 0;
var quantQuest = 0;

//make them global
var num1;
var num2;
var operators;

$(function() {
  loadNextQuestion();
  checkQuest(operators, quantQuest);
});

function loadNextQuestion() {
  operators = setOperator(firstOperation);
  num1 = getRandomInt(min, max);
  num2 = getRandomInt(min, max);
  displayQuestion(quantQuest);
}

function setOperator(firstOperation) {
  if (firstOperation === "ADD") {
    console.log("setOperation: ADD");
    return '+';
  } else if (firstOperation === "SUBTRACT") {
    console.log("setOperation: SUBTRACT");
    return '-';
  } else if (firstOperation === "MULTIPLY") {
    console.log("setOperation: MULTIPLY");
    return '*';
  } else if (firstOperation === "DIVIDE") {
    console.log("setOperation: DIVIDE");
    return '/';
  } else {
    return alert("Operator did not work!!");
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayQuestion() {
  var containerQuestion = $('#question');
  containerQuestion.text(`${num1} ${operators} ${num2} =`);
}

function checkQuest() {
  $(`#question-answer`).keyup(function(e) {
    if (e.which == 13) {
      $(this).after(function() {
        if (eval(num1 + operators + num2) == $(`#question-answer`).val()) {
          questRight++;
          console.log("RIGHT!!!" + questRight);
        }
        quantQuest++;
        if (quantQuest<questiNum) {
          $("#question-answer").val('');
          loadNextQuestion();
        }
        else {
          alert(`You answered: ${questRight} out of ${quantQuest}`);
        }
      });
    }
  });
}
