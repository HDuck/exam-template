var player = document.getElementById("video-player");
var playBtn = document.getElementById("video-player-btn");
var videoDesc = document.getElementById("video-desc");

playBtn.addEventListener('click', function() {
  player.play();
}, false)

player.addEventListener('click', function() {
  if (videoDesc.className === "video-pres__desc video-pres__desc_hidden")
    player.pause();
}, false)

player.addEventListener('play', function() {
  videoDesc.className = "video-pres__desc video-pres__desc_hidden";
}, false)

player.addEventListener('pause', function() {
  videoDesc.className = "video-pres__desc video-pres__desc_visible";
}, false)