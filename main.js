/* browser action fires spotify web player */
chrome.browserAction.onClicked.addListener(function() {
  chrome.windows.create({url:'https://play.spotify.com', width: 590, height: 360, focused:true, type: "detached_panel"}, function() {
  		
  });


});
      