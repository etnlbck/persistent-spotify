$(document).ready(function(){
	
	$('#main-nav').append('<div id="nav-toggle" class="hide"></div>');
	var path = chrome.extension.getURL('spotify.css');
  	console.log(path);
  	$('head').append('<link rel="stylesheet" type="text/css" href="'+path+'">');

    
	$('body').on('click','#nav-toggle', function(){
		var btn = $(this);
		if(btn.hasClass() == 'hide'){
			$('#main-nav').css('bottom','-49px');
		} else {
			$('#main-nav').css('bottom','0');
		}

	});
});