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

	$('[btn-burger]').click(function(){
		$(this).toggleClass('active');
		
		if($(this).hasClass('active')) {
			$('[nav-menu]').addClass('open')
		} else {
			$('[nav-menu]').removeClass('open')
		}
	});
});
