var firstOperation = localStorage.getItem("operation");
var upRange = localStorage.getItem("range");
var questiNum = localStorage.getItem("questionNumber");
var sessTime = localStorage.getItem("sessionTime");

var max = parseInt(upRange);
var min = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(getRandomInt(min,max));
// console.log(firstOperation);
// console.log(upRange);
// console.log(questiNum);
// console.log(sessTime);
