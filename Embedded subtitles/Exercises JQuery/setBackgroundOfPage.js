$(document).ready(function(){
  $("button").click(function(){
    //Si coloco "background" o "background-color" funciona igual
    //Si o si tengo que poner document.body
    $(document.body).css("background-color","red");
  });
});
