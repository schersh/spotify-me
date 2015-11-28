// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/
function searchByArtist(keyword) {
  var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done(function(response){
    console.log(response)
    response.artists.map(function(artist){
      $("#results").append("<li>" + artist.name + "</li>")
    })
  }).fail(function(){
    console.log("request failed")
  }).always(function(){
    console.log("this always happens")
  })
}
function searchByTrack(keyword) {
  var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done(function(response){
    console.log(response)
    response.tracks.map(function(track){
      $("#results").append("<li>" + track.name + "</li>")
    })
  }).fail(function(){
    console.log("request failed")
  }).always(function(){
    console.log("this always happens")
  })
}

$(document).ready(function(){
  $("input:submit").on("click", function(event){
      event.preventDefault();
      if ($("#search-type").val() == "artist") {
        searchByArtist ($("#search-keyword").val())
      }
      else if ($("#search-type").val() == "track") {
        searchByTrack ($("#search-keyword").val())
      }
  })
})
