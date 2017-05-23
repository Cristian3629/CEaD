var preselectCaption = null;
var preselectChapter = null;

  $("div").on('click', 'p', function(event){
    //Al elemento seleccionado lo pongo en negrita
    $(this).css({
      "font-weight": "bold"
    });
    var selectElement = $(this);
    if (selectElement.hasClass('line')){
    if (preselectCaption != null && !preselectCaption.is(selectElement) ){
         preselectCaption.css({
         "font-weight": "normal",
         });
     }
    preselectCaption = selectElement;
    console.log('toque en una linea');
    }else{
      console.log('toque un capitulo');
      if(preselectChapter != null && !preselectChapter.is(selectElement)){
          console.log("pongo el capitulo en normal");
          preselectChapter.css({
           "font-weight": "normal",
        });
      }else{
        console.log("chapter es null o es igual");
      }
      preselectChapter = selectElement;
      console.log("Cambie preselectChapter:"+preselectChapter);
    }

    //obtengo el time de la linea que tocaron
    var time = $(this).val();
    var array = time.split("-->");
    var totalSeconds = getSeconds(array[0]);
    player.seekTo(totalSeconds);
    event.stopPropagation();
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
  //console.log("Son:"+time+" segundos");
  return time;
}
