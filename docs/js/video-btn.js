var player = document.getElementById("video-player");
var playBtn = document.getElementById("video-player-btn");
var videoDesc = document.getElementById("video-desc");

playBtn.addEventListener('click', function() {
  player.play();
  videoDesc.className = "video-pres__desc video-pres__desc_hidden";
  player.controls = "true";
}, false)