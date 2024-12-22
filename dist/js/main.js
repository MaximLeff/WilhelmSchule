barba.init({
	transitions: [{
		name: 'opacity-transition',
		leave(data) {
			return gsap.to(data.current.container, {
				opacity: 0
			});
		},
		enter(data) {
			return gsap.from(data.next.container, {
				opacity: 0
			});
		}
	}],
});

jQuery(document).ready(function ($) {
	// $('input[type="tel"]').inputmask({ mask: '+38 (999) 999-99-99' });

	$('[btn-burger]').click(function () {
		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			$('[nav-menu]').addClass('open')
		} else {
			$('[nav-menu]').removeClass('open')
		}
	});

	$('.online-courses__tab').click(function () {
		if (!$(this).hasClass('active')) {
			$('.online-courses__tab.active').removeClass('active')
			$(this).addClass('active')

			$('.online-courses__tab .online-courses__tab-content').slideUp(200);
			$(this).find('.online-courses__tab-content').slideDown(200, function () {
				$(this).css({
					display: "flex"
				})
			});

			let index = $(this).attr('tab-text-index')
			$(`.online-courses__image`).removeClass('active')
			$(`.online-courses__image[tab-image-index=${index}]`).addClass('active')
		}
	})

	$('.faq__tab').click(function() {
		if(!$(this).hasClass('active')){
			$('.faq__tab.active').removeClass('active')
			$(this).addClass('active')

			$('.faq__tab .faq__tab-content').slideUp(200);
			$(this).find('.faq__tab-content').slideDown(200, function () {
				$(this).css({
					display: "flex"
				})
			});
		}
	})

	const howLong = new Swiper('.how-long__slides', {
		slidesPerView: 1,
		spaceBetween: 15,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			500: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});

	const ourTeachers = new Swiper('.our-teachers__slides', {
		slidesPerView: 1,
		spaceBetween: 15,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			500: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});
});
