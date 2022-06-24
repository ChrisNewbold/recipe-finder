// JavaScript

// video fetching code
key = "AIzaSyAS8g3KcaT03dC34Re_lsr5pQSE2TMrzL0"; // api key for yt
var searchQuery; // search query for youtube. will be concatenated to searchResults. if query is multiple words, the words should be separated by pluses
var searchResults = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=' + searchQuery + '&key=AIzaSyAS8g3KcaT03dC34Re_lsr5pQSE2TMrzL0'; // search results through google api
var player;
var videoRecipe = document.getElementById('') // loads video to the element
var videoID; // grabs video id to load a video for each recipe
var recipeURL; // links recipe for video. 

// fetch request to obtain the response from the youtube api
fetch(searchResults).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
    videoID = data.items[0].id.videoId;
    console.log(videoID);
    recipeURL = "https://www.youtube.com/watch?v=" + videoID;
    console.log(recipeURL);
})

// this function loads the iframe api to view YT videos
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: videoID,
    playerVars: {
        'playsinline': 1
        },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
        });
}

function onPlayerReady(event) {
event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
}
}
function stopVideo() {
player.stopVideo();
}