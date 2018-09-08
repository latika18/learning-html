/*******Before this load jquery script link in html doc
**********/$(document).ready(function() {
  alert('loaded');

  var el = document.getElementById('text');
  console.log("El in Vanilla Js:",el);
  console.log("El  in jQuery:", $(el));


  document.getElementsByClassName('my-input')[0].value = "Value of input";
  $('.my-input').val("New Input Val");

});
