//Una vez que la pagina se compĺeto, realizo la siguiente funcion:
/*
Cuando el ajax está completo, meto en .log el texto que se muestra, pero eso queda
bloqueado hasta que el ajax esta completo.
En la siguiente lanzo un solicitud para cargar en .result lo que tenga el archivo
demo.txt
*/

$(document).ready(function(){
  //runs for every request that completes,use this when you want to do something
  //with each request/result.
  $(document).ajaxComplete(function(){
    $(".log2").text("Se completó el Ajax");
  });
  //En caso de que hubo algun error en la solicitud Ajax
  $(document).ajaxError(function(){
    $(".log").text("El ajax no se pude completar");
  });
  //Cuando hago un click en un elemento de clase jquery
  $(".jquery").click(function(){
    $(".result").load("demo.txt");
  });

  //Cuando ya se envio la solicitud. Esto es un Ajax Event
  $(document).ajaxSend(function(){
    $(".log").text("Ya se envió el ajax");
  });

  //Cuando el request ya empezó
  $(document).ajaxStart(function(){
    $(".log1").text("Ya comenzó el ajax");
  });

  //Cuando un Ajax request se completa, JQuery cheque si hay otro Ajax reQuest
  //pendiente, si ninguno queda, JQuery lanza el evento Ajax Stop
  $(document).ajaxStop(function(){
    $(".log2").text("Se completaron todas las solicitudes");
  });

  //Esto para cuando se completo con exito
  $(document).ajaxSucess(function(){
    $(".log").text("Se completó de manera satifactoria el request");
  });
});
