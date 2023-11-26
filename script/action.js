$(document).ready(function(){
	$(window).scroll(function(){
		var scrT = $(window).scrollTop();

		$('#banner .webpage img').each(function(){
			var imgTop = $(this).offset().top;

			if(scrT >= imgTop - $(window).height()/2){
				$(this).addClass('on')
			}
		})
	})
})