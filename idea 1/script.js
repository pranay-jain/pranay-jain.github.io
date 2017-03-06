$(document).ready(function() {
	var win = $(window); 
	var isAtTop = win.scrollTop() == 0;
	var isFirstLoad = true;

	$('body').on('mousewheel', function(e) {
		if(isFirstLoad && isAtTop){
	        e.preventDefault();
	        e.stopPropagation();
	        isFirstLoad = false;
	        
			$('html, body').animate({
		        scrollTop: $("#works").offset().top 
		    }, 800);
	    }

	    if (win.scrollTop() >= $("#works").offset().top - 350 && win.scrollTop() < $("#contact").offset().top - 350) {
			$('.box').css({'border': '10px solid #fff', 'z-index': '1000'});
		} else {
			$('.box').css({'border': '10px solid #222', 'z-index': '-100'});
		}
	});


	
});