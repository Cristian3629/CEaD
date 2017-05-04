//Luego de todo el texto inserto un DOM (Document Object Model)
$(document).ready(function(){
  $("#button1").click(function(){
    $("p").after(document.createTextNode("with solution\n"));
    var h = document.createElement("H1");
    var t = document.createTextNode("Hello Word!");
    //h es del tipo H1, y luego le inserto el hijo, es decir el texto.
    h.appendChild(t);
    $("p").after(h);
  });
});
