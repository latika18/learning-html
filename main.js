/****
** This is a multiline comment
*****/
/**alert("This is an alert");
console.log("This is a log");**/
var btn = document.getElementById("go-button");

function buttonClicked() {
  console.log("Button clicked");

  var customText = document.getElementsByClassName("my-input");
  var textArea = document.getElementsByClassName("my-textarea");

  var results = document.getElementById('text');

  results.innerHTML = "Heloo, " + customText[0].value + "<br />" ;


  console.log(textArea);
  results.innerHTML += "Message" + textArea[0].value;

}

btn.addEventListener("click",buttonClicked);

