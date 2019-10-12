var firstOperation = localStorage.getItem("operation");
var upRange = localStorage.getItem("range");
var questiNum = localStorage.getItem("questionNumber");
var sessTime = localStorage.getItem("sessionTime");

var max = parseInt(upRange);
var min = 0;
var numQuest = questiNum * 2;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function creatingQuest(numQuest) {
  var quest = new Array();
  for(i = 0; i < numQuest; i++) {
    console.log("Number: " + i);
    quest[i] = getRandomInt(min, max);
    console.log(quest[i]);
  }
  return "it worked!!";
}

console.log(creatingQuest(numQuest));
// console.log(getRandomInt(min,max));
// console.log(firstOperation);
// console.log(upRange);
// console.log(questiNum);
// console.log(sessTime);
