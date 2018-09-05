/****
** This is a multiline comment
*****/
/**alert("This is an alert");
console.log("This is a log");**/
var btn = document.getElementById("go-button");

function buttonClicked() {
  console.log("Button clicked");

  var customText = document.getElementsByClassName("my-input");
  var results = document.getElementById('text');

  console.log(customText);
  results.innerHTML = "Heloo, " + customText[0].value;

}

btn.addEventListener("click",buttonClicked);
