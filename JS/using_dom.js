var technologies = ["HTML","CSS","JAVASCRIPT","PYTHON"];

console.log(technologies);
function createMenu( items ) {
  
  var menu = document.createElement("ul");
  
  items.forEach(function(element,index,array){
    console.log(menu);
    var menuItem = document.createELement("li");
    var textNode = document.createTextNode(element);
   
    menuItem.appendChild(textNode);
    menu.appendChild(menuItem);
        
  });
  
  
 document.body.appendChild(menu);
  
}


createMenu(technologies) ;
