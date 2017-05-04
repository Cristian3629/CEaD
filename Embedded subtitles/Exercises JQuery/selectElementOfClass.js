//Si el elemento de tipo p es de clase w3r_bg_orange, le agrego la clase w3r_bg_red
$(document).ready(function(){
  //Tengo que ver porque está cómo párametro el index
  $("p").addClass(function(index,currentClass){
    var addedClass;
    if (currentClass == "w3r_bg_orange"){
      addedClass == "w3r_bg_red";
    }
    return addedClass;
  });
});
