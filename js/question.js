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
  if(firstOperation === "ADD")
    return '+';
  else if(firstOperation === "SUBTRACT")
    return '-'
  else if(firstOperation === "MULTIPLY")
    return '*'
  else if(firstOperation === "DIVIDE")
    return '/'

  return alert("Operator did not work!!");
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  function getQuestion() {
    var count = 0;
    var results = [];
    while(count < questiNum) {
      var container = $('<div />');
      var operators = setOperator(firstOperation);
      var val1 = getRandomInt(min,max);
      var val2 = getRandomInt(min,max);
      var lbl = $('<label />');
      lbl.html(val1 + ' ' + operator + ' ' + val2 + ' = ');
      container.append(lbl);
      var input = $('<input type="text" />');
      container.append(input);
      var btn = $('<input type="button" value="Submit result" />');
      var val;
      count++;
      btn.click(function() {

          results.push({
              number1 : val1,
              number2 : val2,
              answer : input.val()
          });

          input.attr('disabled', true);
          $(this).attr('disabled', true);

          $(this).after(function() {
              if(eval(val1 + operator + val2) == input.val()) return 'RIGHT';
              return 'WRONG';
          });

          getQuestion();

      });
      container.append(btn);
      $('body').append(container);
    }
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
