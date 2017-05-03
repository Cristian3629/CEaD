//SI el documento se cargo, llamo a la siguiente funcion
$(document).ready(function(){
  //Si el # no funciona.
   $('#button1').click(function() {
     //Con el .add() anido otra accion, en este caso anido p y realizo  la accion
   $("textarea").css("border", "2px solid red").add("p")
     .css("border", "2px solid red");
   });
});


//$(this).hide() - hides the current element.

//$("p").hide() - hides all <p> elements.

//$(".test").hide() - hides all elements with class="test".

//$("#test").hide() - hides the element with id="test".
