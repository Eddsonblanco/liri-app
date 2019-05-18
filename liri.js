require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv.slice(3).join(" ");
var axios = require('axios');
var moment = require('moment');
var fs = require('fs');


if(command === 'spotify-this-song'){
    playSong(input)
}
else if (command === 'movie-this'){
    playMovie(input)
}
else if(command === 'concert-this'){
    concert(input)
}
else if (command === 'do-what-it-says'){
    doit();
}
function playSong (songName){

    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        var song = data.tracks.items[0];
 
        console.log("Song Name:" + song.name)
        console.log("Artist: " + song.artists[0].name)
        console.log("Album:" + song.album.name)
        console.log(song.preview_url)
 
     })
 

}

function concert(artistInput) {
        var artist = artistInput.split(" ").join("+");
        var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(queryURL).then(function(response) {
           
            if (!response.data.length) {
                console.log("No results found for " + artistInput);
                return;
              }
            var date = response.data[1].datetime;
            var dateFormat = moment(date).format('MMMM Do, YYYY');
    
            console.log("The next " + artistInput + " concert is on " + dateFormat + " at the " + response.data[0].venue.name + " in " + response.data[0].venue.city + ", " + (response.data[0].venue.region || response.data[0].venue.country) + ".");
             
        })
    
        
    }

function playMovie(movie){
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    if (movie.length < 1) {
        movie = "Spiderman";
      }
    // This line is just to help us debug against the actual URL.
    // console.log(queryUrl);
    //      ```
    axios.get(queryUrl).then(
        function(response) {
          // Then log the Release Year for the movie
            console.log("You searched: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB rating: " + response.data.Ratings[0].Value);
            console.log("Rotton Tomatoes rating: " + response.data.Ratings[1].Value);
            console.log(response.data.Title + " was produced in " + response.data.Country + " and features the following languages: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log(response.data.Title + " stars: " + response.data.Actors);
        }
      );
    }
function doit (){
    fs.readFile("random.txt", "utf8", function(err, data){
        if( err){
            return console.log(err)
        }
        var dataArray = data.split(",");
        if(dataArray[0] === "spotify-this-song" ){
            playSong(dataArray[1])
        }
        else if(dataArray[0] === "concert-this" ){
            concert(dataArray[1])
        }
        if(dataArray[0] === "movie-this" ){
            playMovie(dataArray[1])
        }

    })
}


