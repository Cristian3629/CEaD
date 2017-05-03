//Selecciono el ultimo elemento y le inserto 2 clases
$(document).ready(function(){
  $("p").last().addClass("w3r_font_color").addClass("w3r_background");
  //o de esta manera tambien se puede
  //$("p").last().addClass("w3r_font_color w3r_background");
});
