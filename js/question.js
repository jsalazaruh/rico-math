var firstOperation = localStorage.getItem("operation");
var upRange = localStorage.getItem("range");
var questiNum = localStorage.getItem("questionNumber");
var sessTime = localStorage.getItem("sessionTime");

var max = parseInt(upRange);
var min = 0;
var questRight = 0;
var quantQuest = 0;

$(function() {
  var operators = setOperator(firstOperation);
  for(quantQuest = 0; quantQuest < questiNum; quantQuest++) {
    var num1 = getRandomInt(min,max);
    var num2 = getRandomInt(min,max);
    displayQuestion(num1,num2,operators);
    checkQuest(num1,num2,operators);
  }

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

function displayQuestion(num1,num2,operators) {
  var arr = [];

  $('#question').html(num1 + ' ' + operators + ' ' + num2 + ' = ');
}

function checkQuest(num1,num2,operators) {
  $('#question-answer').keyup(function(e) {
    if(e.which == 13) {
      $('#question-answer').attr('disabled', true);
      $(this).attr('disabled', true);
      $(this).after(function() {
        if(eval(num1 + operators + num2) == $('#question-answer').val()) {
          questRight++;
          console.log("RIGHT!!!" + questRight);
        }

      });
    }
  });
}



// console.log(creatingQuest(numQuest));
// console.log(getRandomInt(min,max));
// console.log(firstOperation);
// console.log(upRange);
// console.log(questiNum);
// console.log(sessTime);
