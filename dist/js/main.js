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
});
