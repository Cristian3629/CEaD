//Elegir el primer elemento del tipo textarea y los del tipo p y poner el
//fondo rojo
$(document).ready(function(){
  $("#button1").click(function(){
    $("textarea:first").css("background","red").add("p").css(
      "background","red");
  });
});
