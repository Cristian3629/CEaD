//Hago las siguientes acciones:
$(document).ready(function(){
  //Selecciono a los del tipo div y clase left y right
  //De esos, busco a los con div e hijos de div tipo p y le
  //agrego la clase border
  $("div.left,div.right").find("div,div > p").addClass("border");
  $("div.before-addback").find("p").addClass("background");
  //el addBack() al previo conjunto conjunto de elementos en el stack del conjunto
  //reciente, osea en este caso aplico al conjunto de "div.after-addback"
  $("div.after-addback").find("p").addBack().addClass("background");
});
