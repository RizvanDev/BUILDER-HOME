$('.links').slick({
	arrows: true,
	dots: false,
	infinite: true,
	initialSlide: 0,
	adaptiveHeight: true,
	draggable: false,
	slidesToShow: 5,
	waitForAnimate: false,
	centerMode: true,
	focusOnSelect: true,
	centerPadding: '0px',
	speed: 500,
	asNavFor: ".review__position",
	responsive: [{
		breakpoint: 480,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		}
	}]
})

$('.review__position').slick({
	arrows: false,
	dots: false,
	speed: 500,
	infinite: true,
	waitForAnimate: false,
	slidesToScroll: 1,
	draggable: false,
	asNavFor: ".links"
})