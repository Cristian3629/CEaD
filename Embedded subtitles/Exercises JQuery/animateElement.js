$(document).ready(function(){
  $('#button1').click(function(){
    //Periodo con la cual se efectua el cambio de formato, si se ve, crece de manera lenta
    //a medida que subo el periodo
    var periodo = 1500;
    $( "#pid" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  },periodo);
});
});
