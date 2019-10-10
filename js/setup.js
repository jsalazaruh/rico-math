var slider = document.getElementById("myRange");
var output = document.getElementById("numRange");

$(document).ready(function() {
  $("#myRange").on('input', function() {
    var range = $(this).val();
    localStorage.setItem("range", range);
  });
});


output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

document.getElementById("result").innerHTML=localStorage.getItem("operation");
