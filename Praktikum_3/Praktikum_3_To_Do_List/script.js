//close button 
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// close button hide current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a checked symbol 

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// edit a list item
function edititem(event) {
  var li = event.target;
  var currentText = li.textContent.slice(0, -1); 
  var input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.className = "edit-input";
  li.textContent = '';
  li.appendChild(input);
  input.focus();
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      saveEdit(li, input);
    }
  });

  input.addEventListener("blur", function() {
    saveEdit(li, input);
  });
}
function saveEdit(li, input) {
  var newText = input.value;

  if (newText === '') {
    alert("Text cannot be empty.");
    input.focus();
    return;
  }

  li.textContent = newText;

  // the close button after editing
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Create a new list item
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.addEventListener('dblclick', edititem);

  if (inputValue === '') {
    alert("KETIK WOI APA YANG DI ISI");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Trigger the newElement function on Enter key in input field
document.getElementById("myInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    newElement();
  }
});

// Reapply close button functionality for existing elements
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
