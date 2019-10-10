var firstOperation = localStorage.getItem("operation");
// var upRange = localStorage.getItem("myRange");

console.log(firstOperation);
// console.log(typeof upRange.id);

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
