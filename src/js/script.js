(function() {
	$('.bar').each(function() {
		var width = $(this).attr('data-progress');
		$(this).attr('style', 'width : ' + width + '%');
	});
})();
