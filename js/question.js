var firstOperation = localStorage.getItem("operation");
var upRange = localStorage.getItem("range");
var questiNum = localStorage.getItem("questionNumber");
var sessTime = localStorage.getItem("sessionTime");

console.log(firstOperation);
console.log(upRange);
console.log(questiNum);
console.log(sessTime);

var QuestionAdapter = function() {

  this.getUpperBound = function() { return upRange; }

  function isCheckBoxOfValueChecked(firstOperation) {
    if (firstOperation === null) {
      alert("Something happened, please go home and start again.")
    }
    return firstOperation;
  }

  this.allowAdd = function() { return isCheckBoxOfValueChecked('ADD'); }
  this.allowSub = function() { return isCheckBoxOfValueChecked('SUBTRACT'); }
  this.allowMul = function() { return isCheckBoxOfValueChecked('MULTIPLY'); }
  this.allowDiv = function() { return isCheckBoxOfValueChecked('DIVIDE'); }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
