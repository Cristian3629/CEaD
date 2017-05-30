var activeInterval = null;

function refreshTime(){
  activeInterval = setInterval(updateTime,500);
}

function stopRefreshTime(){
  if (activeInterval != null)
  clearInterval(activeInterval);
}

function updateTime(){
  console.log("Current time:"+player.getCurrentTime());
  var currentTime =  player.getCurrentTime();
  //var arraySplit  = currentTime.split(".");
  var seconds =  Math.floor(currentTime);
  console.log("The time is: "+seconds);
  for (var i in lineas) {
    //console.log(lineas[element].val());
    //console.log("valor:"+$(lineas[i]).val());
    if ($(lineas[i]).val() == seconds){
      console.log("Lo encontré");
      $(lineas[i]).css({
        "font-weight": "bold"
      });
    }
  }

}
