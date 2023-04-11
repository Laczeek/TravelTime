const spanDate = document.querySelector('.footer__socials-date');

$('.feedback__elements').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	centerMode: false,
	centerPadding: '60px',
	slidesToShow: 1,
	slidesToScroll: 1,
    mobileFirst: true,
	responsive: [
		{
			breakpoint: 768,
			centerMode: true,
			settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
			},
		},
		{
			breakpoint: 992,
			settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
			},
		},
	],
});

const currentYear = new Date().getFullYear();
spanDate.textContent = currentYear;