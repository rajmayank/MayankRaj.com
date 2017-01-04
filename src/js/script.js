(function() {
	$('.bar').each(function() {
		var width = $(this).attr('data-progress');
		$(this).attr('style', 'width : ' + width + '%');
	});
})();
// $('.skill-set').each(function(){
// 	var elem = $(this).find('.bar').clone();
// 	$(this).find('.bar').remove();
// 	$(this).find('.progress-bar').append( elem );
// });