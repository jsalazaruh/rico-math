
$(function() {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("numRange");
  document.getElementById("result").innerHTML=localStorage.getItem("operation");
  output.innerHTML = slider.value;
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  $("#numberOfQuestions").on('input', function() {
    var questNum = $(this).val();
    localStorage.setItem("questionNumber", questNum);
  });
  $("#lengthOfTime").on('input', function() {
    var timeOfSession = $(this).val();
    localStorage.setItem("sessionTime", timeOfSession);
  });
  $("#myRange").on('input', function() {
    var range = $(this).val();
    localStorage.setItem("range", range);
  });
});
