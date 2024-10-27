function color(z){
  var a = getComputedStyle(z);
var b = a.backgroundColor;
document.getElementsByTagName("body")[0].style.backgroundColor=b;
}

let buttons = document.querySelector('.buttons');
let btn = buttons.querySelectorAll('.btn');

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function() {
   
    let current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    
    this.className += " active";
  });
}
function myfunction(){
var element = document.body;
element.classList.toggle("dark-mode");
}


var changeFontStyle = function (font) {
  document.getElementById(
    "text").style.fontFamily
    = font.value;
  
}
  
