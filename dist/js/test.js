
$(function () {
	var timer = undefined;
	var tabBar = $('#tab-bar');
	function stopTimer() {
		if (timer !== undefined) {
			clearInterval(timer);
			timer = undefined;
		}
	}
	function startTimer() {
		stopTimer();
		timer = setInterval(function() {
			var next = tabBar.find('li.active').next('li')
			if (!next.length)
				next = tabBar.find('li').first()
			next.find('[data-toggle="tab"]').tab('show');
		}, 50000);
	}

	tabBar.on('mouseenter', '[data-toggle="tab"]', function () {
		stopTimer();
		$(this).tab('show');
	});
	tabBar.hover(stopTimer, startTimer);
	$('#tab-content').hover(stopTimer, startTimer);
	startTimer();
})
