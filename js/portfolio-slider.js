	$('.slider__items').slick({
		arrows: true,
		dots: false,
		infinite: false,
		initialSlide: 0,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		waitForAnimate: false,
		centerMode: false,
		speed: 700,
		responsive: [{
		breakpoint: 1100,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		}
	},
	{
		breakpoint: 460,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]

	})