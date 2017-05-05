$(document).ready(function(){
  //i see tag with id "myselect" and children whit tag option and value is equal
  //two.
  var txt = $("#myselect option[value=2]").text();
  console.log(txt);
});
