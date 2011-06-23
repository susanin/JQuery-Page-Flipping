$(document).ready(function(){
    
	$(".b-load > div").each(function(i){
		var zi = 10 - i;
		$(this).css('z-index',zi);
	});


	$('#next_page_button').bind('tap',function(event){
        var nextSlide = $('.cur').next();
		if(!nextSlide.length){return false;}


		var marg = parseInt('-770');
		$(".b-load .cur").animate({left:marg+"px",opacity:0.4}, 1500, 'swing');
		$(".b-load > div").removeClass('cur');
		nextSlide.addClass('cur');
	});

	$('#prev_page_button').bind('tap',function(event){
        var prevSlide = $('.cur').prev();
		if(!prevSlide.length){return false;}


		//var marg = parseInt(0);
		$(prevSlide).animate({left:0,opacity:1}, 1500, 'swing');
		$(".b-load > div").removeClass('cur');
		prevSlide.addClass('cur');

	});

});