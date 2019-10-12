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

function creatingQuest(questiNum) {
  var quest = new Array();
  for(i = 0; i < questiNum; i++) {
    console.log("Question: " + i);
    quest[i] = getRandomInt(min, max);

  }
  return ;
}

// console.log(getRandomInt(min,max));
// console.log(firstOperation);
// console.log(upRange);
// console.log(questiNum);
// console.log(sessTime);
