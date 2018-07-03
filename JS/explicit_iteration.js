var webCategories =  ["front end developper", "backend developper", "full stack developper"];
var uppercasedCategories = [];

/*function uppercaseElement(element, index, array) {
uppercasedCategories.push(element.toUpperCase();
}
webCategories.forEach(uppercaseElement);
*/

// explicit iteration
 for(var i= 0; i<webCategories.length; i = i+1){
  uppercasedCategories.push(webCategories[i].toUpperCase());
 }
