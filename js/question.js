var firstOperation = localStorage.getItem("operation");
var upRange = localStorage.getItem("range");
var questiNum = localStorage.getItem("questionNumber");
var sessTime = localStorage.getItem("sessionTime");

var max = parseInt(upRange);
var min = 0;

$(function() {
  getQuestion();
});

function setOperator(firstOperation) {
  if(firstOperation === "ADD") {
    console.log("setOperation: ADD");
    return '+';
  } else if(firstOperation === "SUBTRACT") {
      console.log("setOperation: SUBTRACT");
      return '-';
  } else if(firstOperation === "MULTIPLY") {
      console.log("setOperation: MULTIPLY");
      return '*';
  } else if(firstOperation === "DIVIDE") {
      console.log("setOperation: DIVIDE");
      return '/';
  } else {
      return alert("Operator did not work!!");
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuestion() {
  var results = [];
  var questRight = 0;
  var operators = setOperator(firstOperation);
  var num1 = getRandomInt(min,max);
  var num2 = getRandomInt(min,max);
  $('#question').html(num1 + ' ' + operators + ' ' + num2 + ' = ');
  $('#question-answer').keyup(function(e) {
    if(e.which == 13) {
      $('#question-answer').attr('disabled', true);
      $(this).attr('disabled', true);
      $(this).after(function() {
        if(eval(num1 + operators + num2) == $('#question-answer').val()) {
          questRight++;
          console.log("RIGHT!!!");
        }
      });
    }
  });
}







// function updateResults() {
//     $('#json').html(JSON.stringify(results));
// }

// console.log(creatingQuest(numQuest));
// console.log(getRandomInt(min,max));
// console.log(firstOperation);
// console.log(upRange);
// console.log(questiNum);
// console.log(sessTime);
