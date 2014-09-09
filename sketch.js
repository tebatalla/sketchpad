function createGrid (size){
	var wrapper = $(".wrapper");
	var width = size * 24;
	wrapper.css({"width":width+"px","height":width+"px"})
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			wrapper.append('<div class="box"></div>')
		};
	};
	$(".box").on("mouseenter",function(){
		$(this).addClass("highlighted");
	});
}

function gridPrompt(){
	$(".box").remove();
	var size = prompt('What size grid would you like to build?');
	createGrid(size);
}

$(document).ready(function(){
	var wrapper = $(".wrapper");
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 16; j++) {
			wrapper.append('<div class="box"></div>')
		};
	};
	$(".box").on("mouseenter",function(){
		$(this).addClass("highlighted");
	});
});