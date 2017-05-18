// Load the API and make an API call.  Display the results on the screen.
var captionFormat = "srt";
var videoId = "QdjO0e10O_I";
var fieldsOfQuery = "items/id"
var doneCaption = false;

function getIdCaption() {
  gapi.client.youtube.captions.list({
    part: "id",
    //id del video que me interesa
    videoId: videoId,
    //solicito solo el campo de id del caption
    fields : fieldsOfQuery
  }).then(function(response){
    console.log(response);
    var body = response.body;
    console.log(body);
    var obj = JSON.parse(body);
    var idCaption = String(obj.items[0].id);
    console.log("El id del Caption:"+idCaption);
    getCaption(idCaption);
  });
}

function getCaption(idCaption){
  gapi.client.youtube.captions.download({
    id:idCaption,
    //formato del subtitulo
    tfmt: captionFormat
  }).then(function(response){
      var caption = response.body;
      //console.log(caption);
      parserCaption(caption);
  });
}
