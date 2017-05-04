//Todos los elementos del tipo span, los inserto luego de los elementos del tipo
//p, es como mover los elementos.
$(document).ready(function(){
  $('#button1').click(function(){
    $("p").after($( "span" ));
  });
});
