/*Selecciono todo aquellos elementos tal que su id sea iddiv, para el caso de la
página test_8, tira el nro 3, eso quiere decir que cuenta el boton,span y p.

Dado que seleccione un elemento de id iddv, con el find busco todos sus sublementos.
Es la misma logica que si hago ("*") estoy haciendo sobre la pagina misma
Si saco el find, me tira 1.
*/
$(document).ready(function(){
  $('#button1').click(function(){
    var elementCount = $( "#iddiv" ).find( "*" ).css( "border", "2px solid blue" ).length;
    $( "body" ).prepend( "" + elementCount + " element(s) found" );
  });
});
