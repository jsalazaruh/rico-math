//retrieving set up information
var firstOperation = localStorage.getItem("operation");
var upRange = localStorage.getItem("range");
var questiNum = localStorage.getItem("questionNumber");
var sessTime = localStorage.getItem("sessionTime");

var max = parseInt(upRange);
var min = 0;
var questRight = 0;
var quantQuest = 0;
var num1 = 0;
var num2 = 0;
var temp = 0;
var operators;
var timeCount = sessTime;





$(function() {
  var countdown = setInterval(function() {
    var progressPercent = (sessTime - timeCount) / sessTime * 100;
    $("#timeLeft").html(timeCount + " seconds remaining!");
    $('#time-left-indicator').animate({'width': progressPercent + '%'}, 300);
      if(timeCount == 0) {
        clearInterval(countdown);
        window.location.href = "final.html";
        localStorage.setItem('questRight', questRight);
      }
      timeCount--;
  }, 1000);

  loadNextQuest();
  checkQuest(operators, quantQuest);
});

function loadNextQuest() {
  operators = setOperator(firstOperation);
  num1 = getRandomInt(min, max);
  num2 = getRandomInt(min, max);
  if(num1 > num2) {
    displayQuest(quantQuest);
  } else {
    temp = num1;
    num1 = num2;
    num2 = temp;
    displayQuest(quantQuest);
  }
}

function setOperator(firstOperation) {
  if (firstOperation === "ADDITION") {
    console.log("setOperation: ADDITION");
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

function displayQuest() {
  var containerQuest = $('#question');
  containerQuest.text(`${num1} ${operators} ${num2} = `);
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
          loadNextQuest();
        }
        else {
          window.location.href = "final.html";
          localStorage.setItem('questRight', questRight);
        }
      });
    }
  });
}
