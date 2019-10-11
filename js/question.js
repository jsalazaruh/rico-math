var firstOperation = localStorage.getItem("operation");
var upRange = localStorage.getItem("range");
var questiNum = localStorage.getItem("questionNumber");


console.log(firstOperation);
console.log(upRange);
console.log(questiNum);

var QuestionAdapter = function() {

  this.getUpperBound = function() { return upRange; }

  function isOperationReceived(firstOperation) {
    if (firstOperation === null) {
      alert("Something happened, please go home and start again.")
    }
    return firstOperation;
  }

  this.allowAdd = function() { return isOperationReceived('ADD'); }
  this.allowSub = function() { return isOperationReceived('SUBTRACT'); }
  this.allowMul = function() { return isOperationReceived('MULTIPLY'); }
  this.allowDiv = function() { return isOperationReceived('DIVIDE'); }
}

var Question = function(internal) {
  this.internal = internal;
  var display = internal .replace('/', 'Ã·')
                         .replace('*', 'Ã—');

  this.getAnswer = function() {
    return eval(internal);
  }

  this.getDisplay = function() {
    return display;
  }
}

var QuestionFactory = function() {
  this.adapter = new QuestionAdapter();

  var rand = getRandomInt;

  // function binaryFactory(a, b, operator) {
  //   return format(parseInt(rand(a, b)), operator, parseInt(rand(a, b)));
  //   // return "{0} {1} {2}".format(parseInt(rand(a, b)), operator, parseInt(rand(a, b)));
  // }

  function addFactory(a, b) {
    return (a, b, '+');
  }

  function subFactory(a, b) {
    return (a, b, '-');
  }

  function mulFactory(a, b) {
    b = b / Math.log(b);
    return (a, b, '*');
  }

  function divFactory(a, b) {
    var x1 = 1 + rand(Math.floor(Math.sqrt(a)), Math.ceil(Math.sqrt(2*b)));
    var x2 = 1 + rand(Math.floor(Math.sqrt(a)), Math.ceil(Math.sqrt(2*b)));
    var y = x1 * x2;

    if (y > b)
      return divFactory(a, b * 2);

    return (y, '/', x1);
  }

  this.nextQuestion = function() {
    var factories = [];
    // add factories as requested
    if (this.adapter.allowAdd())
      factories.push(addFactory);
    if (this.adapter.allowSub())
      factories.push(subFactory);
    if (this.adapter.allowMul())
      factories.push(mulFactory);
    if (this.adapter.allowDiv())
      factories.push(divFactory);

    // select random factory and apply it to the range (a, b)
    var randFactory = factories[Math.floor(Math.random() * factories.length)];
    var internal = randFactory(0, this.adapter.getUpperBound());
    return new Question(internal);
  }

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
