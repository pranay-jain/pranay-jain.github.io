$(document).ready(function () {
	$('.landing-text h1, .landing-text h2.name').addClass("animated fadeInLeft");
	$('.landing-text h2.landing').addClass("animated fadeInUp");

	$(window).scroll(function () {
		var windowScroll = $(window).scrollTop();
		var projectHeading = $('#projects').offset().top;
		var aboutHeading = $('#about').offset().top;
		var contactHeading = $('#contact').offset().top;
		
		if (windowScroll >= projectHeading - window.innerHeight/1.5) {						
			$('#projects h4').addClass("animated fadeInUp");
			$('#projects h4').removeClass("no-display");

			$('.project').each(function (index) {
				if (windowScroll >= $(this).offset().top - window.innerHeight/1.5) {				
					$(this).find('.proj_image, .heading, p').removeClass("no-display");
					$(this).find('.proj_image').addClass("animated fadeIn");
					$(this).find('.content p').addClass("animated flipInX");
					if (index % 2 === 0) {
						$(this).find('.heading').addClass("animated fadeInRight");
					} else {						
						$(this).find('.heading').addClass("animated fadeInLeft");
					}

				}
			});
		}

		if (windowScroll >= aboutHeading - window.innerHeight/1.5) {
			$('#about h4').addClass("animated fadeInUp");
			$('.about-header').addClass("animated fadeInUp");
			
			$('#about h4, .about-header').removeClass("no-display");

			let mainContent = $('.about-content').offset().top;

			if (windowScroll >= mainContent - window.innerHeight/1.5) {
				$('.about-content p, .tldr').removeClass("no-display");
				$('.about-content p').addClass("animated fadeIn");
				$('.tldr').addClass("animated fadeInUp");
				$('.skill-card').each(function (index) {
					$(this).removeClass("no-display");
					$(this).addClass("animated zoomIn");
				});
			}

		}

		if (windowScroll >= contactHeading - window.innerHeight/1.5) {
			$('#contact h5').addClass("animated fadeIn");
			
			$('#contact h5').removeClass("no-display");
		}

	});
});