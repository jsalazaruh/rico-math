var slider = document.getElementById("myRange");
var output = document.getElementById("numRange");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


  document.getElementById("result").innerHTML=localStorage.getItem("operation");
