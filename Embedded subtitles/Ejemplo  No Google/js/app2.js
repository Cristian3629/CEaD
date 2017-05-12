var apiKey = "AIzaSyCswdcyFNVbzBjApp5MjBCpNkxPpCrgAhs";
var clientId = "1052872841813-nrdvdimngi0vqh8r9nbvf9ojmbnp60bv.apps.googleusercontent.com"
var scope = "https://www.googleapis.com/auth/youtube.force-ssl";



$(function(){
  $("form").on('submit',function(event) {
    event.preventDefault();
    //Solicito los ids de los captions del id del video que pasé
    var request = gapi.client.youtube.captions.list({
      part: "id",
      //id del video que me interesa
      videoId: "QdjO0e10O_I",
      //solicito solo el campo de id del caption
      fields : "items/id"
    });

    request.execute(function(response){
      var result= response.result;
      //var responseJSON = JSON.stringify(result);
      //ver como acceder a JSON
      //var id = respondeJSON["items"]:"id";
      //muestro el resultado
      console.log(result);
      var responseJSON = JSON.stringify(result);
      //console.log(responseJSON["items"]);
    });
  });
})






function apiYoutubeReady() {
  gapi.client.init({
    apiKey: apiKey,
    clientId: clientId,
    scope: scope
  });
  gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}
