var activeInterval = null;
var lastSecond = 0;
var lastPosition = 0;

function refreshTime(){
  activeInterval = setInterval(updateTime,500);
}

function stopRefreshTime(){
  if (activeInterval != null)
  clearInterval(activeInterval);
}

function updateTime(){
  //console.log("Current time:"+player.getCurrentTime());
  var currentTime =  player.getCurrentTime();
  var currentSecond =  Math.floor(currentTime);
  //console.log("The time is: "+currentSecond);
  if (lastSecond < currentSecond){
    for (var i = lastPosition; i < lineas.length; i++) {

      if ($(lineas[i]).val() == currentSecond){
        console.log("Lo encontré");
        $(lineas[i]).css({
          "font-weight": "bold"
        });
        if (preselectCaption != null){
          preselectCaption.css({
            "font-weight": 'normal',
          });
      }
      preselectCaption = lineas[i];
      lastSecond = currentSecond;
      lastPosition = i;
      setVerticalScrollbar();
      break;
      }
    }
  }


}

function setVerticalScrollbar(){
  console.log("scrollTop:"+$(lineas[lastPosition]).position().top);
  console.log("scrollTop 2222:"+$("#caption").scrollTop());
  $("#caption").animate({ scrollTop:$(lineas[lastPosition]).position().top +$("#caption").scrollTop() }, "slow");

}
