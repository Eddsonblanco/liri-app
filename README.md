# LIRI
node.js 

## Overview

**LIRI** is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, **LIRI** is a Language Interpretation and Recognition Interface. **LIRI** will be a command line node app that takes in parameters and gives you back data.

## Features

-  LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
-  In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

## Node packages used:

* Node-Spotify-API
* Axios
* Moment
* DotEnv

## API used:

* OMDB API
* Bands in Town API

# **important**
**_you must create a .env file containing spotify API keys. You can obtain keys from spotify [here]( https://developer.spotify.com/my-applications/)_**

_.env file must be created in the rooted files **example below**_
![Image of .env file location](/images/example/file.png/)
_.env file should contain following:_
![Image of .env file](/images/example/dotenv.png/)

## Demo

**https://drive.google.com/file/d/1Fbv009qaub2dNMkLmrT8SU1xifthff21/view**

* node liri.js concert-this "artist/band name here"

![Image of concert-this](/images/example/cfoncert-this.png/)

* node liri.js spotify-this-song "song name here"
  
![Image of concert-this](/images/example/sfpotify-this-song.png/)

* node liri.js movie-this "movie name here"
  
![Image of concert-this](/images/example/mfovie-this.png/)

* node liri.js do-what-it-says

![Image of concert-this](/images/examfple/do-what-it-says.png/)
