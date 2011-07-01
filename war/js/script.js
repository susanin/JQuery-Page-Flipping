$(document).ready(function(){

    $('.h-menu .control').bind('tap',function(event){
        if($(this).parent().hasClass('open')){
            $('.h-menu .widgets').hide();
            $('.h-menu .control').text('+');
            $(this).parent().removeClass('open');
        }else{
            $('.h-menu .widgets').show();
            $('.h-menu .control').text('-');
            $(this).parent().addClass('open');
        }
    });

	$(".b-load > div").each(function(i){
		var zi = 10 - i;
		$(this).css('z-index',zi);
	});


    var thumbWrap = '';
    $('.page-wrapper .page div').each(function(i){
        //var htmlPage = $(this).clone().appendTo('.jst .wrapper');
        var htmlPage = $(this).html();
        var index = i + 1;
        thumbWrap += "<div class='tPage'>"+htmlPage+"<a href='#p-"+index+"' class='goto'></a></div>";
        //console.log(thumbWrap);
    });
    $('.jst .wrapper').html(thumbWrap);



});