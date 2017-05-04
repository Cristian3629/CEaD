$(document).ready(function(){
  $('#button1').click(function(){
    //Selecciono todos los elementos de la pagina, le aplico ese formato
    //y calculo el tamanio
    var elementCount = $( "*" ).css( "border", "3px solid blue" ).length;
    //Insert content, specified by the parameter, to the beginning of each
    //element in the set of matched elements.
    $("body").prepend( "<h2>" + elementCount + " elements found</h2>" );
  });
});
