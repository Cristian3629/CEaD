$(document).ready(function(){
  // $("#caption").click(function(event){
  //   console.log("Hice un click en un div");
  // });
  $("div").on('click', 'p', function(){
    $(this).css({
      "border": "5px solid black"
    });
    console.log("Toque una linea");
    console.log($(this).val());
    //obtengo el time de la linea que tocaron
    var time = $(this).val();
    var array = time.split("-->");
    console.log("Tiempo Inicio:"+array[0]);
    console.log("Tiempo Fin:"+array[1]);
    var totalSeconds = getSeconds(array[0]);
    player.seekTo(totalSeconds);
  });
});

//A esta funcion le llega el formato siguiente
//hh:mm::ss,ms
function getSeconds(time){
  //array es el del tipo ["hh","mm","ss,ms"]
  var hhMmSsArray = time.split(":");
  var secondsArray = hhMmSsArray[2].split(",");
  var hoursInSeconds = parseInt(hhMmSsArray[0])*60*60;
  var minutesInSeconds = parseInt(hhMmSsArray[1])*60;
  var seconds = parseInt(secondsArray[0]);
  var miliseconds = parseInt(secondsArray[1])/1000;
  var time = hoursInSeconds + minutesInSeconds + seconds + miliseconds;
  console.log("Son:"+time+" segundos");
  return time;
}
