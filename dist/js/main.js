barba.init({
	transitions: [{
		name: 'opacity-transition',
		leave(data) {
			return gsap.to(data.current.container, {
				opacity: 0,
			});
		},
		enter(data) {
			return gsap.from(data.next.container, {
				opacity: 0,
			});
		},
	}],
});

jQuery(document).ready(function ($) {
	// $('input[type="tel"]').inputmask({ mask: '+38 (999) 999-99-99' });

	$('[btn-burger]').click(function () {
		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			$('[nav-menu]').addClass('open');
			$('body').addClass('overflow-hidden');
		} else {
			$('[nav-menu]').removeClass('open');
			$('body').removeClass('overflow-hidden');
		}
	});

	

	const howLong = new Swiper('.how-long__slides', {
		slidesPerView: 1,
		spaceBetween: 15,

		navigation: {
			nextEl: '.how-long__slides .swiper-button-next',
			prevEl: '.how-long__slides .swiper-button-prev',
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
			nextEl: '.our-teachers__slides .swiper-button-next',
			prevEl: '.our-teachers__slides .swiper-button-prev',
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

	const courses = new Swiper('.courses__slider', {
		slidesPerView: 'auto',
		spaceBetween: 15,
		centeredSlides: true,

		navigation: {
			nextEl: '.courses__slider .swiper-button-next',
			prevEl: '.courses__slider .swiper-button-prev',
		},
		initialSlide: 1,
		breakpoints: {
			1281: {
				slidesPerView: 'auto',
				// centeredSlides: false,
			},
		},
	});

	if ($(window).width() > 768) {
		const scene = $('#parallax')[0];
		if (scene) {
			const parallaxInstance = new Parallax(scene);
		}
	}

	$('.btn--list').click(function () {
		$(this).toggleClass('active');
	});

	$(document).mouseup(function (e) {
		const btn = $('.btn--list');

		if (!btn.is(e.target)) {
			btn.removeClass('active');
		}
	});

	$('.faq__tab').click(function () {
		if (!$(this).hasClass('active')) {
			$('.faq__tab.active').removeClass('active');
			$(this).addClass('active');

			$('.faq__tab .faq__tab-content').slideUp(200);
			$(this).find('.faq__tab-content').slideDown(200, function () {
				$(this).css({
					display: 'flex',
				});
			});
		}
	});

	// online-courses
	function changeTabCourses(tab, index) {
		$('.online-courses__tab').removeClass('active');
		tab.classList.add('active');
		$('.online-courses__image.active').removeClass('active');
		$(`.online-courses__col [tab-image-index=${index + 1}]`).addClass('active');
	}

	if (window.innerWidth > 1280) {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.online-courses',
				start: '-20% center',
				end: '150% center',
				scrub: 1,
				// markers: true,
				// pin: true,
				snap: {
					snapTo: [0.1, 0.35, 0.62, 0.9],
					// duration: 0.2,
					// delay: 0.2,
					// ease: false
				},
			},
		});
		const tabs = document.querySelectorAll('.online-courses__tab');
		tabs.forEach((tab, index) => {
			tl.addLabel(`show-${index}`)
				.from(tab.querySelector('.online-courses__tab-content-wrap'), {
					height: 0,
					opacity: 0,
				})
				.add(function () {
					changeTabCourses(tab, index);
				});
			tl.addLabel(`hide-${index}`)
				.to(tab.querySelector('.online-courses__tab-content-wrap'), {
					height: 0,
					opacity: 0,
				}, '+=0.5')
				.add(function () {
					changeTabCourses(tab, index);
				});
		});
	} else {
		$('.online-courses__tab').click(function () {
			if (!$(this).hasClass('active')) {
				$('.online-courses__tab.active').removeClass('active');
				$(this).addClass('active');

				$('.online-courses__tab .online-courses__tab-content-wrap').slideUp(200);
				$(this).find('.online-courses__tab-content-wrap').slideDown(200);

				const index = $(this).attr('tab-text-index');
				$('.online-courses__image').removeClass('active');
				$(`.online-courses__image[tab-image-index=${index}]`).addClass('active');
			}
		});
	}
});
