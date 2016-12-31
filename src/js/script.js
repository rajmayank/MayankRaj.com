(function() {
	console.log('width');
	$('.bar').each(function() {
		var width = $(this).attr('data-progress');
		console.log(width);
		$(this).attr('style', 'width : ' + width + '%');
	});
})();
