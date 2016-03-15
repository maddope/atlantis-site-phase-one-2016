// uses animated_bg.js
//http://webdesignerwall.com/tutorials/animating-background-colors

$(document).ready(function() {
		$('.container').animatedBG({
				colorSet: ['#abebfe', '#aad667', '#57e6ee', '#ff7ebb'],
				speed: 2000
		});
});

// Simple maths for for smart resizing of the background. It gets the height of logo and sizes appropriately the container to scaled proportional to the logo image.

function resizer() {
		var height = $("#logo img").height();
		height = height * .708;
		$("#main").height(height);
		$(".container").css("min-height", height);
};
resizer();

$(window).resize(function() {
		resizer();
});