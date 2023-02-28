function showMessage() {
    alert("Hello, World!");
  }
  


  var video = document.getElementById("myVideo");
  
  function playPause() {
    if (video.paused)
      video.play();
    else
      video.pause();
  }
  
  video.onclick = function() {
    playPause();
  };

  