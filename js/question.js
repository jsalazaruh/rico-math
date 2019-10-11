var firstOperation = localStorage.getItem("operation");
var upRange = localStorage.getItem("range");
var questiNum = localStorage.getItem("questionNumber");
var sessTime = localStorage.getItem("sessionTime");

int max = parseInt(upRange);


// console.log(firstOperation);
console.log(max);
// console.log(questiNum);
// console.log(sessTime);

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
  // return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(getRandomInt());
console.log(getRandomInt());
