$(document).ready(function() {
  $("#btn0").click(function() {
    //Esto es un ejemplo de cómo cambiar el texto de un elemento con cierto id
    //el getElementById() devuelve un DOM
    document.getElementById("p").innerHTML = "r";
    document.getElementById("a").innerHTML = "b";

    //Esto es como yo lo haria, pero no funciona
    // http://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery
    //El select de devuelve a Jquery Object
    //$("#p").innerHTML = "r";
    //$("#a").innerHTML = "b";
  });

  $("#btn1").click(function(){
    //Asi esta resuelto en la pagina
    //$('li').each(function( index, elem ){
      //$(elem).prepend( '<b>' + index + ': </b>');
    //});

    //Otra forma de hacerlo, menos sugar sintax
    var listItems = $("li");
    var length = listItems.length;
    for (var i = 0; i < length; i++) {
      var item = $(listItems[i]);
      $(item).prepend('<b>' + i + ': </b>');
    }
  });

  $("#btn2").click(function(){
    var listItems = $("li");
    var rawListItem = listItems[0];
    //obtengo lo que internamente tiene dentro de las etiquetas
    var html = rawListItem.innerHTML;
    console.log(html);
  });

});
