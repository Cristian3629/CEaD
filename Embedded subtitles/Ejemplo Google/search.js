function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response){
    $(document.body).css("background-color","red");
    console.log(response.result);
    var str = JSON.stringify(response.result);
    $('#search-container').html('<p>' + str + '</p>');
  });
}
