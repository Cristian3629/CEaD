$(document).ready(function(){
  $("button").click(function(){
    $("form > input ").hide();
    //La solucion en la página es la siguiente, pero es el mismo resultado
    //$( demo_form.elements ).hide();
  });
});
