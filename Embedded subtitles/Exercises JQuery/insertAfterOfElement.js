//Insertar cualquier texto en el html.
$(document).ready(function(){
  //Seleccionos los elementos del tipo p pero no hago nada.
  //Por defecto luego de todos los elementos de p.
  $("p").add("<span>Exercises</span>").appendTo(document.body)
});
