//Selecciono el ultimo parrafo y le agrego la clase w3r_background

$(document).ready(function(){
  $("p").last().addClass("w3r_background");
  $("p:first").addClass("w3r_font_color");
  $("p").last().addClass("w3r_font_color");
});
