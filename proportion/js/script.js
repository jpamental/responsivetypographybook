/**
 * @file
 * Global JavaScript file for the site.
 */


// Rewritten version for correcting a screen-zoom issue on rotation in iOS
// By @mathias, @cheeaun and @jdalton

function checkMq() {
	$('body').removeClass('mq-l-desk');
	$('body').removeClass('mq-desk');
	$('body').removeClass('mq-l-tab');
	$('body').removeClass('mq-s-tab');
	$('body').removeClass('mq-phone');
	if(Modernizr.mq('only all and (min-width: 81.25em)')) {
		$('body').addClass('mq-l-desk');
	} else if(Modernizr.mq('only all and (min-width: 56.25em)')) {
		$('body').addClass('mq-desk');
	} else if(Modernizr.mq('only all and (min-width: 43.75em)')) {
		$('body').addClass('mq-l-tab');
	} else if(Modernizr.mq('only all and (min-width: 25em)')) {
		$('body').addClass('mq-s-tab');
	} else {
		$('body').addClass('mq-phone');
	}
};

$(function() {
    // the call to checkMq here will execute after the document has loaded
    checkMq();

    $(window).resize(function() {
        // the call to checkMq here will execute every time the window is resized
        checkMq();
    });

    // you can add other listeners here click, hover, etc.  
});

$(document).ready(function(e) {
	// Fallback toggle button
	$(".toggle-scale").click(function(){
		$("html").toggleClass("font-scale-active font-scale-inactive");
		$(this).toggleClass("on off");
	});
	e.preventDefault();
});

(function(doc) {

	var addEvent = 'addEventListener',
		type = 'gesturestart',
		qsa = 'querySelectorAll',
		scales = [1, 1],
		meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [0.25, 1.6];
		doc[addEvent](type, fix, true);
	}

}(document));