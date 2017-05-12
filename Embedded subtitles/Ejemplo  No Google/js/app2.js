var apiKey = "AIzaSyCswdcyFNVbzBjApp5MjBCpNkxPpCrgAhs";
var clientId = "223976978127-egnpt8tu7bf32cqf2h2m7qor7lbe20b6.apps.googleusercontent.com"
var scope = 'https://www.googleapis.com/auth/youtubepartner';


var GoogleAuth;

function getCaption(idCaption){
  var request = gapi.client.youtube.captions.download({
    id: idCaption,
    tfmt: "vtt"
  });

  request.execute(function(){
    console.log("response is successful");
  });
}



function makeRequest(){
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
      //var result = response.result;
      var idCaption = response.items[0].id;
      console.log("IdCaption:"+idCaption);
      getCaption(idCaption);
    });
  });
}

var isAuthorized;
var currentApiRequest;


function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    isAuthorized = true;
    if (currentApiRequest) {
      sendAuthorizedApiRequest(currentApiRequest);
    }
  } else {
    isAuthorized = false;
  }
}


function sendAuthorizedApiRequest(requestDetails) {
  currentApiRequest = requestDetails;
  if (isAuthorized) {
    // Make API request
    // gapi.client.request(requestDetails)

    // Reset currentApiRequest variable.
    makeRequest();
  } else {
    GoogleAuth.signIn();
  }
}


function apiYoutubeReady(){
  gapi.client.init({
    apiKey: apiKey,
    clientId: clientId,
    scope: scope
  });
  //.then(function(){
    //GoogleAuth = gapi.auth2.getAuthInstance();
    //GoogleAuth.isSignedIn.listen(updateSigninStatus);
  //});
  gapi.client.load("youtube", "v3", makeRequest);
}
