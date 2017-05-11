$(function(){
  $("form").on('submit',function(event) {
    event.preventDefault();
    //Solicito los ids de los captions del id del video que pasé
    var request = gapi.client.youtube.captions.list({
      part: "snippet",
      //id del video
      videoId: "PRU2ShMzQRg",
      //solicito solo el campo de id del caption
      fields : "items/id"
    });

    request.execute(function(response){
      var result= response.result;
      //var responseJSON = JSON.stringify(result);
      //ver como acceder a JSON
      //var id = respondeJSON["items"]:"id";
      console.log(result);
      var responseJSON = JSON.stringify(result);
      //console.log(responseJSON["items"]);
    });
  });
})






function apiYoutubeReady() {
  gapi.client.init({
    apiKey: "AIzaSyCswdcyFNVbzBjApp5MjBCpNkxPpCrgAhs",
    clientId: "1052872841813-nrdvdimngi0vqh8r9nbvf9ojmbnp60bv.apps.googleusercontent.com"
  });
  gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}
