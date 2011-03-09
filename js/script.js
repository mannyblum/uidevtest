$(document).ready(function() {
	$('.typechange').click(function() {
		if ($(this).hasClass('normal')) {
			
            $(this).removeClass('normal').addClass('large').children('a').html('Smaller Type');
            $('.entry').removeClass('normaltext').addClass('largetext');

		} else if ($(this).hasClass('large')) {
			
            $(this).removeClass('large').addClass('normal').children('a').html('Larger Type');
            $('.entry').removeClass('largetext').addClass('normaltext');

		}
	});
});

